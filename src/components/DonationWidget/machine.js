import { Machine, assign } from 'xstate';

const sendDonation = async () => fetch('path/to/stripe');

/**
 * A state machine to describe the transitions within the
 * donation workflow.
 *
 * https://xstate.js.org/viz/?gist=50ecf807d3b9c049fc58cda690f90594
 */
export const donationWizardMachine = Machine(
  {
    id: 'donation',
    context: {
      donationType: 'oneTime'
    },
    initial: 'amountForm',
    states: {
      amountForm: {
        initial: 'donateOnce',
        states: {
          donateOnce: {
            on: {
              entry: ['setMonthlyDonation'],
              NEXT: '#donation.paymentForm',
              'START.MONTHLY': 'donateMonthly'
            }
          },
          donateMonthly: {
            on: {
              entry: ['setOneTimeDonation'],
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
              NEXT: [{ target: 'addressForm', cond: 'paymentFormCompleted' }],
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
                  cond: 'addressFormCompleted'
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
    actions: {
      setMonthlyDonation: () => {
        assign({ donationType: 'monthly' });
      },
      setOneTimeDonation: () => {
        assign({ donationType: 'oneTime' });
      }
    }
  }
);
