import React, { useEffect } from 'react';
import { useMachine } from '@xstate/react';
import donationWizardMachine from './machine';
import {
  DonationMachineContext,
  DonationMachineStateValueMap
} from './machine/types';
// TODO: avoid to use AnyEventObject in favor of DonationMachineEvent
import { AnyEventObject } from 'xstate';

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

  console.log(state);
  return (
    <div id={id} className="m-auto" style={{ width: '420px' }}>
      {machineState.amountForm && (
        <form
          className="grid grid-cols-1 gap-4"
          onSubmit={handleSubmitAmountForm}
        >
          <label>
            Donation value:
            <input defaultValue={machineCtx.donationOnceAmount} name="amount" />
          </label>
          <button type="submit">Next</button>
        </form>
      )}
      {machineState.paymentForm === 'cardForm' && (
        <form
          className="grid grid-cols-1 gap-4"
          onSubmit={handleSubmitPaymentInfoForm}
        >
          <label>
            First name:
            <input
              defaultValue={machineCtx.cardInformation.firstName}
              name="first-name"
            />
          </label>
          <label>
            Last name:
            <input
              defaultValue={machineCtx.cardInformation.lastName}
              name="last-name"
            />
          </label>
          <label>
            Email:
            <input
              defaultValue={machineCtx.cardInformation.email}
              name="email"
            />
          </label>
          <label>
            Card:
            <input name="card" />
          </label>
          <button type="submit">Next</button>
        </form>
      )}
      {machineState.paymentForm === 'addressForm' && (
        <form
          className="grid grid-cols-1 gap-4"
          onSubmit={handleSubmitAddressForm}
        >
          <label>
            Billing address
            <input
              defaultValue={machineCtx.billingInformation.address}
              name="address"
            />
          </label>
          <label>
            City
            <input
              defaultValue={machineCtx.billingInformation.city}
              name="city"
            />
          </label>
          <label>
            Zip code:
            <input
              defaultValue={machineCtx.billingInformation.zipCode}
              name="zipCode"
            />
          </label>
          <label>
            Country
            <input
              defaultValue={machineCtx.billingInformation.country}
              name="country"
            />
          </label>
          <button type="submit">Next</button>
        </form>
      )}
    </div>
  );
};

export default DonationWidget;
