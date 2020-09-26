import React, { useEffect } from 'react';
import { useMachine } from '@xstate/react';
import donationMachine from './machines/donationMachine';
import {
  DonationMachineContext,
  DonationMachineStateValueMap
} from './machines/donationType';
import {
  DonationOnceForm,
  DonationMonthlyForm,
  DonationPaymentForm,
  DonationAddressForm,
  DonationThankYou,
  DonationLoading,
  DonationWizard
} from './components';
import { getStripeTokenOptions } from './utils/stripe';
import { DonationPaymentProvider } from './components/StripeCardInput';

export interface Props {
  /**
   * Optional identifier for the widget
   */
  id?: string;
  /**
   * Optional set of classes
   */
  className?: string;
}

const DonationWidget: React.FC<Props> = ({ id, className }) => {
  const [state, send] = useMachine<DonationMachineContext, any>(
    donationMachine
  );
  const { context: machineContext } = state;
  const { billingInformation, cardInformation } = machineContext;
  const machineState: DonationMachineStateValueMap = state.value;

  /**
   * whenever the machine enter into failure
   * status trigger an effect to retry the process
   */
  useEffect(() => {
    if (machineState === 'failure') {
      console.error('Machine falls on failure status', machineContext);
      send('RETRY');
    }
  });

  const onSubmitAmountForm = (
    data: { [string: string]: unknown },
    formId: string
  ) => {
    const { value } = data;
    const updateAmountEvent = `UPDATE.AMOUNT.${formId.toUpperCase()}`;

    if (!value || (formId !== 'once' && formId !== 'monthly')) {
      console.error('error trying to update amount', value, formId);
      return;
    }

    send([{ type: updateAmountEvent, value }, { type: 'NEXT' }]);
  };

  const onSubmitPaymentInfoForm = async (
    data: {
      [string: string]: unknown;
    },
    paymentProvider?: DonationPaymentProvider
  ) => {
    if (!paymentProvider) {
      console.error('no payment provider', 'onSubmitPaymentInfoForm');
      return;
    }

    send({
      type: 'UPDATE.PAYMENT.SERVICE',
      stripe: paymentProvider.stripe,
      stripeToken: data.stripeToken
    });
    // TODO: adapt all data and use the machine guard to provide feedback when necessary
    send({ type: 'NEXT', ...data });
  };

  const onSubmitAddressForm = (data: { [string: string]: unknown }) => {
    send({ type: 'NEXT', ...data });
  };

  const onEditAmount = () => {
    send('START.ONCE');
  };

  return (
    <div
      id={id}
      className={`m-auto w-full ${className}`}
      style={{ maxWidth: '24rem' }}
    >
      {machineState === 'processDonation' && <DonationLoading />}
      {machineState === 'success' && (
        <DonationThankYou>
          <p className="text-center mb-4 mt-4 w-9/12">
            {machineContext.donation.message}
          </p>
        </DonationThankYou>
      )}
      {machineState.amountForm === 'donateOnce' && (
        <DonationOnceForm
          defaultValues={{ amount: machineContext.donationOnceAmount }}
          onSubmit={onSubmitAmountForm}
        />
      )}
      {machineState.amountForm === 'donateMonthly' && (
        <DonationWizard.Container>
          <DonationWizard.Title>
            Choose an amount to give per month
          </DonationWizard.Title>
          <DonationMonthlyForm
            defaultValues={{ amount: machineContext.donationMonthlyAmount }}
            onSubmit={onSubmitAmountForm}
          />
        </DonationWizard.Container>
      )}
      {machineState.paymentForm === 'cardForm' && (
        <DonationPaymentForm
          errors={machineContext.errors}
          amount={machineContext.donationOnceAmount}
          defaultValues={{
            email: cardInformation.email,
            firstName: cardInformation.firstName,
            lastName: cardInformation.lastName,
            phoneNumber: cardInformation.phoneNumber
          }}
          onEditAmount={onEditAmount}
          onSubmit={onSubmitPaymentInfoForm}
          tokenData={getStripeTokenOptions(machineContext)}
        />
      )}
      {machineState.paymentForm === 'addressForm' && (
        <DonationAddressForm
          amount={machineContext.donationOnceAmount}
          defaultValues={{
            address: billingInformation.address,
            city: billingInformation.city,
            zipCode: billingInformation.zipCode,
            country: billingInformation.country
          }}
          onEditAmount={onEditAmount}
          onSubmit={onSubmitAddressForm}
        />
      )}
      <p className="text-white text-xss text-center mt-2 px-4">
        After processing your donation an account will be created for you
        providing access to all Debt Collective Union Member benefits.
      </p>
    </div>
  );
};

export default DonationWidget;
