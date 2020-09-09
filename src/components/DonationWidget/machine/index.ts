import { Machine, assign, AnyEventObject } from 'xstate';
import { sendDonation } from '../service';
import { DonationMachineSchema, DonationMachineContext } from './types';

export const MINIMAL_DONATION = 5;

// TODO: properly address Machine state declaration with Event support

/**
 * A state machine to describe the transitions within the
 * donation workflow.
 *
 * https://xstate.js.org/viz/?gist=50ecf807d3b9c049fc58cda690f90594
 */
const donationWizardMachine = Machine<
  DonationMachineContext,
  DonationMachineSchema,
  AnyEventObject
>(
  {
    id: 'donation',
    context: {
      donation: {},
      donationType: 'once',
      donationOnceAmount: MINIMAL_DONATION,
      donationMonthlyAmount: MINIMAL_DONATION,
      error: null,
      billingInformation: {
        address: '',
        city: '',
        zipCode: '',
        country: ''
      },
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
              'START.MONTHLY': 'donateMonthly',
              'UPDATE.AMOUNT': {
                target: 'donateOnce',
                actions: ['updateDonationOnceAmount']
              }
            }
          },
          donateMonthly: {
            entry: ['setMonthlyDonation'],
            on: {
              NEXT: '#donation.paymentForm',
              'START.ONCE': 'donateOnce',
              'UPDATE.AMOUNT': {
                target: 'donateMonthly',
                actions: ['updateDonationMonthlyAmount']
              }
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
          src: 'donationService',
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
          RETRY: { target: '#donation.paymentForm.cardForm' }
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
      updateDonationOnceAmount: assign({
        donationOnceAmount: (context, event) => {
          const { value } = event;
          return value;
        }
      }),
      updateDonationMonthlyAmount: assign({
        donationMonthlyAmount: (context, event) => {
          const { value } = event;
          return value;
        }
      }),
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
      setMonthlyDonation: assign<DonationMachineContext>({
        donationType: 'monthly'
      }),
      setOnceDonation: assign<DonationMachineContext>({
        donationType: 'once'
      })
    },
    services: {
      donationService: (context) => sendDonation(context)
    }
  }
);

export default donationWizardMachine;
