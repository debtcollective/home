import { Machine, assign } from 'xstate';
import { sendDonation } from './service';

/**
 * A state machine to describe the transitions within the
 * donation workflow.
 *
 * https://xstate.js.org/viz/?gist=50ecf807d3b9c049fc58cda690f90594
 */
const donationWizardMachine = Machine(
  {
    id: 'donation',
    context: {
      donationType: 'once',
      donationAmount: 5,
      cardInformation: {
        firstName: '',
        lastName: '',
        email: '',
        cardNumber: ''
      }
    },
    initial: 'amountForm',
    states: {
      amountForm: {
        initial: 'donateOnce',
        states: {
          donateOnce: {
            entry: ['setOnceDonation'],
            on: {
              NEXT: '#donation.paymentForm',
              'START.MONTHLY': 'donateMonthly'
            }
          },
          donateMonthly: {
            entry: ['setMonthlyDonation'],
            on: {
              NEXT: '#donation.paymentForm',
              'START.ONCE': 'donateOnce'
            }
          },
          hist: {
            type: 'history',
            history: 'shallow'
          }
        }
      },
      paymentForm: {
        initial: 'cardForm',
        states: {
          cardForm: {
            on: {
              NEXT: [
                {
                  target: 'addressForm',
                  cond: 'paymentFormCompleted',
                  actions: ['updateCardInformation']
                }
              ],
              PREV: '#donation.amountForm.hist',
              'START.ONCE': '#donation.amountForm.donateOnce',
              'START.MONTHLY': '#donation.amountForm.donateMonthly'
            }
          },
          addressForm: {
            on: {
              NEXT: [
                {
                  target: '#donation.processDonation',
                  cond: 'addressFormCompleted',
                  actions: ['updateBillingInformation']
                }
              ],
              PREV: 'cardForm',
              'START.ONCE': '#donation.amountForm.donateOnce',
              'START.MONTHLY': '#donation.amountForm.donateMonthly'
            }
          }
        }
      },
      processDonation: {
        invoke: {
          id: 'submitDonation',
          src: (context, event) => sendDonation(context.userId),
          onDone: {
            target: 'success',
            actions: assign({ donation: (context, event) => event.data })
          },
          onError: {
            target: 'failure',
            actions: assign({ error: (context, event) => event.data })
          }
        }
      },
      success: {
        type: 'final'
      },
      failure: {
        on: {
          RETRY: { target: '#donation.paymentForm.addressForm' }
        }
      }
    }
  },
  {
    guards: {
      paymentFormCompleted: (context, event) => {
        const { firstName, lastName, email, cardNumber } = event;
        return firstName && lastName && email && cardNumber;
      },
      addressFormCompleted: (context, event) => {
        const { address, city, zipCode, country } = event;
        return address && city && zipCode && country;
      }
    },
    actions: {
      updateBillingInformation: assign({
        billingInformation: (context, event) => {
          const { address, city, zipCode, country } = event;
          return { address, city, zipCode, country };
        }
      }),
      updateCardInformation: assign({
        cardInformation: (context, event) => {
          const { firstName, lastName, email, cardNumber } = event;
          return { firstName, lastName, email, cardNumber };
        }
      }),
      setMonthlyDonation: assign({
        donationType: 'monthly',
        donationAmount: 5
      }),
      setOnceDonation: assign({
        donationType: 'once',
        donationAmount: 5
      })
    }
  }
);

export default donationWizardMachine;
