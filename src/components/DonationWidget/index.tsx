// @ts-nocheck

import React from 'react';
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
    <div id={id}>
      {state.value.amountForm && (
        <form className="flex mb-4" onSubmit={handleSubmitAmountForm}>
          <div className="w-full bg-gray-500 h-12">
            <label>
              Donation value:
              <input
                defaultValue={machineCtx.donationOnceAmount}
                name="amount"
              />
            </label>
          </div>
          <button type="submit">Next</button>
        </form>
      )}
      {state.value.paymentForm === 'cardForm' && (
        <form className="flex mb-4" onSubmit={handleSubmitPaymentInfoForm}>
          <div className="w-full bg-gray-500 h-12">
            <label>
              First name:
              <input name="first-name" />
            </label>
            <label>
              Last name:
              <input name="last-name" />
            </label>
            <label>
              Email:
              <input name="email" />
            </label>
            <label>
              Card:
              <input name="card" />
            </label>
          </div>
          <button type="submit">Next</button>
        </form>
      )}
      {state.value.paymentForm === 'addressForm' && (
        <form className="flex mb-4" onSubmit={handleSubmitAddressForm}>
          <div className="w-full bg-gray-500 h-12">
            <label>
              Billing address
              <input name="address" />
            </label>
            <label>
              City
              <input name="city" />
            </label>
            <label>
              Zip code:
              <input name="zipCode" />
            </label>
            <label>
              Country
              <input name="country" />
            </label>
          </div>
          <button type="submit">Next</button>
        </form>
      )}
    </div>
  );
};

export default DonationWidget;
