import React, { useEffect } from 'react';
import { useMachine } from '@xstate/react';
import donationWizardMachine from './machine';
import {
  DonationMachineContext,
  DonationMachineStateValueMap
} from './machine/types';
import { DonationOnceForm, DonationMonthlyForm } from './components';
// TODO: avoid to use AnyEventObject in favor of DonationMachineEvent
import { AnyEventObject } from 'xstate';
import DonationPaymentForm from './components/DonationPaymentForm';
import DonationAddressForm from './components/DonationAddressForm';

export interface DonationWidgetProps {
  /**
   * Optional identifier for the widget
   */
  id?: string;
}

const DonationWidget: React.FC<DonationWidgetProps> = ({ id }) => {
  const [state, send] = useMachine<DonationMachineContext, AnyEventObject>(
    donationWizardMachine
  );
  const { context: machineCtx } = state;
  const machineState: DonationMachineStateValueMap = state.value;

  useEffect(() => {
    if (machineState === 'failure') {
      alert(`Something went wrong ${JSON.stringify(machineCtx)}`);
      send('RETRY');
    }
  });

  const handleSubmitAmountForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    const data = new FormData(e.currentTarget);
    const value = Number(data.get('amount'));

    if (!value) return;

    send([
      {
        type: 'UPDATE.AMOUNT',
        value
      },
      { type: 'NEXT' }
    ]);
    e.preventDefault();
  };

  const handleSubmitPaymentInfoForm = (
    e: React.ChangeEvent<HTMLFormElement>
  ) => {
    const data = new FormData(e.currentTarget);
    const paymentInformation = {
      firstName: data.get('first-name'),
      lastName: data.get('last-name'),
      email: data.get('email'),
      cardNumber: data.get('card')
    };

    send({
      type: 'NEXT',
      ...paymentInformation
    });
    e.preventDefault();
  };

  const handleSubmitAddressForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    const data = new FormData(e.currentTarget);
    const addressInformation = {
      address: data.get('address'),
      city: data.get('city'),
      zipCode: data.get('zipCode'),
      country: data.get('country')
    };

    send({
      type: 'NEXT',
      ...addressInformation
    });
    e.preventDefault();
  };

  return (
    <div id={id} className="m-auto" style={{ width: '420px' }}>
      {machineState.amountForm === 'donateOnce' && (
        <DonationOnceForm
          defaultValues={{ amount: machineCtx.donationOnceAmount }}
          onSubmit={handleSubmitAmountForm}
        />
      )}
      {machineState.amountForm === 'donateMonthly' && (
        <DonationMonthlyForm
          defaultValues={{ amount: machineCtx.donationMonthlyAmount }}
          onSubmit={handleSubmitAmountForm}
        />
      )}
      {machineState.paymentForm === 'cardForm' && (
        <DonationPaymentForm
          defaultValues={{
            email: machineCtx.cardInformation.email,
            firstName: machineCtx.cardInformation.firstName,
            lastName: machineCtx.cardInformation.lastName
          }}
          onSubmit={handleSubmitPaymentInfoForm}
        />
      )}
      {machineState.paymentForm === 'addressForm' && (
        <DonationAddressForm
          defaultValues={{
            address: machineCtx.billingInformation.address,
            city: machineCtx.billingInformation.city,
            zipCode: machineCtx.billingInformation.zipCode,
            country: machineCtx.billingInformation.country
          }}
          onSubmit={handleSubmitAddressForm}
        />
      )}
    </div>
  );
};

export default DonationWidget;
