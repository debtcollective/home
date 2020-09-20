/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Stripe, Token } from '@stripe/stripe-js';
import { Machine, assign, AnyEventObject } from 'xstate';
import { sendUnionDonation } from '../api/union';

export const MINIMAL_DONATION = 5;

export const unionMachineContext = {
  api: {
    donation: undefined,
    error: undefined
  },
  donationType: 'month',
  donationMonthlyAmount: MINIMAL_DONATION,
  addressInformation: {
    street: '',
    city: '',
    zipCode: '',
    country: ''
  },
  personalInformation: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  },
  paymentServices: {
    stripe: undefined,
    stripeToken: undefined
  }
};

export type UnionMachineContext = Omit<
  typeof unionMachineContext,
  'paymentServices' | 'paymentAuthorizations'
> & {
  paymentServices: { stripe?: Stripe; stripeToken?: Token };
};

export type AddressData = {
  street: string;
  city: string;
  zipCode: string;
  country: string;
};

export type PersonalData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  chapter: 'pennsylvania' | 'massachusetts' | 'washington' | 'chicago';
};

export type PaymentServices = {
  stripe?: Stripe;
  stripeToken?: Token;
};

export type AddressNextEvent = { type: 'NEXT'; data: AddressData };
export type AmountNextEvent = { type: 'NEXT'; data: { value: number } };
export type PersonalNextEvent = {
  type: 'NEXT';
  data: PersonalData & PaymentServices;
};
export type EditAmountEvent = { type: 'EDIT.AMOUNT' };
export type NextZeroEvent = { type: 'NEXT.ZERO' };
export type PrevEvent = { type: 'PREV' };
export type RetryEvent = { type: 'RETRY' };

export type UnionMachineEvent = AnyEventObject;

const actions = {
  updateChapterInformation: assign<UnionMachineContext, PersonalNextEvent>({
    personalInformation: (context, event) => {
      return {
        ...context.personalInformation,
        chapter: event.data.chapter
      };
    }
  }),
  updateDonationMonthlyAmount: assign<UnionMachineContext, AmountNextEvent>({
    donationMonthlyAmount: (context, event) => {
      return event.data.value;
    }
  }),
  updateAddressInformation: assign<UnionMachineContext, AddressNextEvent>({
    addressInformation: (context, event) => {
      const { street, city, zipCode, country } = event.data;
      return { street, city, zipCode, country };
    }
  }),
  updatePayeeInformation: assign<UnionMachineContext, PersonalNextEvent>({
    personalInformation: (context, event) => {
      const { firstName, lastName, email, phoneNumber } = event.data;
      return {
        ...context.personalInformation,
        firstName,
        lastName,
        email,
        phoneNumber
      };
    }
  }),
  updatePaymentServices: assign<UnionMachineContext, PersonalNextEvent>({
    paymentServices: (context, event) => {
      const { stripe, stripeToken } = event.data;
      return { ...context.paymentServices, stripe, stripeToken };
    }
  })
};

const services = {
  donationService: (context: UnionMachineContext) => sendUnionDonation(context)
};

const guards = {
  isAddressFormCompleted: (
    context: UnionMachineContext,
    event: AddressNextEvent
  ) => {
    const { street, city, zipCode, country } = event.data;
    const isValid = [street, city, zipCode, country].every(Boolean);

    if (!isValid) {
      console.error(
        'invalid information on guard:',
        'isAddressFormCompleted',
        event
      );
    }

    return isValid;
  },
  isAmountSelected: (context: UnionMachineContext, event: AmountNextEvent) => {
    return event.data.value !== null;
  },
  isPersonalFormCompleted: (
    context: UnionMachineContext,
    event: PersonalNextEvent
  ) => {
    const { firstName, lastName, email, phoneNumber, chapter } = event.data;

    const isValid = [firstName, lastName, email, phoneNumber, chapter].every(
      Boolean
    );

    if (!isValid) {
      console.error(
        'invalid information on guard:',
        'isPersonalFormCompleted',
        event
      );
    }

    return isValid;
  }
};

/**
 * A state machine to describe the transitions within a
 * union donation workflow
 *
 * https://xstate.js.org/viz/?gist=184c760f3d2176086487396038edd346
 */
const unionMachine = Machine<UnionMachineContext, UnionMachineEvent>(
  {
    id: 'donation',
    context: unionMachineContext,
    initial: 'amountForm',
    states: {
      amountForm: {
        initial: 'donateMonthly',
        states: {
          donateMonthly: {
            on: {
              NEXT: {
                target: '#donation.generalInformationForm',
                cond: 'isAmountSelected',
                actions: ['updateDonationMonthlyAmount']
              }
            }
          }
        }
      },
      generalInformationForm: {
        initial: 'addressInformationForm',
        states: {
          addressInformationForm: {
            on: {
              'EDIT.AMOUNT': '#donation.amountForm.donateMonthly',
              'NEXT.ZERO': [
                {
                  target: 'zeroPersonalInformationForm',
                  cond: 'isAddressFormCompleted',
                  actions: ['updateAddressInformation']
                }
              ],
              NEXT: [
                {
                  target: 'personalInformationForm',
                  cond: 'isAddressFormCompleted',
                  actions: ['updateAddressInformation']
                }
              ],
              PREV: '#donation.amountForm'
            }
          },
          personalInformationForm: {
            on: {
              'EDIT.AMOUNT': '#donation.amountForm.donateMonthly',
              NEXT: [
                {
                  target: '#donation.processUnion',
                  cond: 'isPersonalFormCompleted',
                  actions: [
                    'updatePaymentServices',
                    'updatePayeeInformation',
                    'updateChapterInformation'
                  ]
                }
              ],
              PREV: 'addressInformationForm'
            }
          },
          zeroPersonalInformationForm: {
            on: {
              'EDIT.AMOUNT': '#donation.amountForm.donateMonthly',
              NEXT: [
                {
                  target: '#donation.processUnion',
                  cond: 'isAddressFormCompleted',
                  actions: [
                    'updatePayeeInformation',
                    'updateChapterInformation'
                  ]
                }
              ],
              PREV: 'addressInformationForm'
            }
          },
          hist: {
            type: 'history',
            history: 'shallow'
          }
        }
      },
      processUnion: {
        invoke: {
          id: 'submitDonation',
          src: 'donationService',
          onDone: {
            target: 'success',
            actions: assign<UnionMachineContext, any>({
              api: (context, event) => ({
                donation: event.data,
                error: undefined
              })
            })
          },
          onError: {
            target: 'failure',
            actions: assign<UnionMachineContext, any>({
              api: (context, event) => ({
                donation: undefined,
                error: event.data
              })
            })
          }
        }
      },
      success: {
        type: 'final'
      },
      failure: {
        on: {
          RETRY: { target: '#donation.generalInformationForm.hist' }
        }
      }
    }
  },
  {
    // @ts-ignore TODO: Unable to related possible actions
    actions,
    // @ts-ignore TODO: Unable to related all possible events together
    guards,
    services
  }
);

export default unionMachine;
