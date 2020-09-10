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

    send([{ type: 'UPDATE.AMOUNT', value }, { type: 'NEXT' }]);
    e.preventDefault();
  };

  const onSubmitPaymentInfoForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    const data = new FormData(e.currentTarget);

    send({
      type: 'NEXT',
      firstName: data.get('first-name'),
      lastName: data.get('last-name'),
      email: data.get('email'),
      cardNumber: data.get('card')
    });
    e.preventDefault();
  };

  const onSubmitAddressForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    const data = new FormData(e.currentTarget);

    send({
      type: 'NEXT',
      address: data.get('address'),
      city: data.get('city'),
      zipCode: data.get('zipCode'),
      country: data.get('country')
    });
    e.preventDefault();
  };

  return (
    <div id={id} className="m-auto" style={{ width: '420px' }}>
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
          defaultValues={{
            email: cardInformation.email,
            firstName: cardInformation.firstName,
            lastName: cardInformation.lastName
          }}
          onSubmit={onSubmitPaymentInfoForm}
        />
      )}
      {machineState.paymentForm === 'addressForm' && (
        <DonationAddressForm
          defaultValues={{
            address: billingInformation.address,
            city: billingInformation.city,
            zipCode: billingInformation.zipCode,
            country: billingInformation.country
          }}
          onSubmit={onSubmitAddressForm}
        />
      )}
    </div>
  );
};

export default DonationWidget;
