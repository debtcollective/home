import React, { useEffect } from 'react';
// TODO: avoid to use AnyEventObject in favor of DonationMachineEvent
import { AnyEventObject } from 'xstate';
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
  DonationAddressForm
} from './components';
import DonationTypeControl from './components/DonationTypeControl';

export interface DonationWidgetProps {
  /**
   * Optional identifier for the widget
   */
  id?: string;
}

const DonationWidget: React.FC<DonationWidgetProps> = ({ id }) => {
  const [state, send] = useMachine<DonationMachineContext, AnyEventObject>(
    donationMachine
  );
  const { context: machineContext } = state;
  const { billingInformation, cardInformation } = machineContext;
  const machineState: DonationMachineStateValueMap = state.value;

  useEffect(() => {
    if (machineState === 'failure') {
      alert(`Something went wrong ${JSON.stringify(machineContext)}`);
      send('RETRY');
    }
  });

  const onSubmitAmountForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    const data = new FormData(e.currentTarget);
    const value = Number(data.get('amount'));

    if (!value) return;

    send([{ type: 'UPDATE.AMOUNT.ONCE', value }, { type: 'NEXT' }]);
    e.preventDefault();
  };

  const onSubmitPaymentInfoForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('first-name'),
      lastName: formData.get('last-name'),
      email: formData.get('email'),
      cardNumber: formData.get('card')
    };

    send({ type: 'NEXT', ...data });
    e.preventDefault();
  };

  const onSubmitAddressForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const data = {
      address: formData.get('address'),
      city: formData.get('city'),
      zipCode: formData.get('zipCode'),
      country: formData.get('country')
    };

    send({ type: 'NEXT', ...data });
    e.preventDefault();
  };

  const onEditAmount = () => {
    send('START.ONCE');
  };

  const onChangeType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    const DONATION_TYPE = {
      once: 'START.ONCE',
      monthly: 'START.MONTHLY'
    };

    if (value !== 'once' && value !== 'monthly') return;

    send(DONATION_TYPE[value]);
  };

  return (
    <div id={id} className="m-auto" style={{ width: '420px' }}>
      <DonationTypeControl
        defaultValues={{ activeType: machineContext.donationType }}
        onChange={onChangeType}
      />
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
            lastName: cardInformation.lastName
          }}
          onEditAmount={onEditAmount}
          onSubmit={onSubmitPaymentInfoForm}
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
