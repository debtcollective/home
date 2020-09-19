import React, { useEffect } from 'react';
import { useMachine } from '@xstate/react';
import donationMachine from './machine';
import {
  DonationMachineContext,
  DonationMachineStateValueMap
} from './machine/types';
import {
  DonationOnceForm,
  DonationMonthlyForm,
  DonationPaymentForm,
  DonationAddressForm,
  DonationThankYou,
  DonationLoading
} from './components';
import DonationTypeControl from './components/DonationTypeControl';
import { getStripeTokenOptions } from './utils/stripe';
import { DonationPaymentProvider } from './components/StripeCardInput';

export interface Props {
  /**
   * Optional identifier for the widget
   */
  id?: string;
}

const DonationWidget: React.FC<Props> = ({ id }) => {
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
    paymentProvider: DonationPaymentProvider
  ) => {
    send({ type: 'UPDATE.PAYMENT.SERVICE', stripe: paymentProvider.stripe });
    // TODO: adapt all data and use the machine guard to provide feedback when necessary
    send({ type: 'NEXT', ...data });
  };

  const onSubmitAddressForm = (data: { [string: string]: unknown }) => {
    send({ type: 'NEXT', ...data });
  };

  const onEditAmount = () => {
    send('START.ONCE');
  };

  const onChangeType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    const updateDonationTypeEvent = `START.${value.toUpperCase()}`;

    if (value !== 'once' && value !== 'monthly') {
      console.error('error trying to change donation type', value);
      return;
    }

    send(updateDonationTypeEvent);
  };

  return (
    <div id={id} className="m-auto w-full" style={{ maxWidth: '24rem' }}>
      <DonationTypeControl
        defaultValues={{ activeType: machineContext.donationType }}
        onChange={onChangeType}
      />
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
        <DonationMonthlyForm
          defaultValues={{ amount: machineContext.donationMonthlyAmount }}
          onSubmit={onSubmitAmountForm}
        />
      )}
      {machineState.paymentForm === 'cardForm' && (
        <DonationPaymentForm
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
    </div>
  );
};

export default DonationWidget;
