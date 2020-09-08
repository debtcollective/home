// @ts-nocheck

import React, { useEffect } from 'react';
import { useMachine } from '@xstate/react';
import donationWizardMachine from './machine';

export interface DonationWidgetProps {
  /**
   * Optional identifier for the widget
   */
  id?: string;
}

const DonationWidget: React.FC<DonationWidgetProps> = ({ id }) => {
  const [state, send] = useMachine(donationWizardMachine);
  const { context: machineCtx } = state;

  useEffect(() => {
    if (state.value === 'failure') {
      alert(`Something went wrong ${JSON.stringify(machineCtx)}`);
      send('RETRY');
    }
  });

  const handleSubmitAmountForm = (e) => {
    const data = new FormData(e.currentTarget);
    send([
      {
        type: 'UPDATE.AMOUNT',
        value: data.get('amount')
      },
      { type: 'NEXT' }
    ]);
    e.preventDefault();
  };

  const handleSubmitPaymentInfoForm = (e) => {
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

  const handleSubmitAddressForm = (e) => {
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

  console.log(state);
  return (
    <div id={id} className="m-auto" style={{ width: '420px' }}>
      {state.value.amountForm && (
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
      {state.value.paymentForm === 'cardForm' && (
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
      {state.value.paymentForm === 'addressForm' && (
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
