import React, { useEffect, useState } from 'react';
// TODO: avoid to use AnyEventObject in favor of DonationMachineEvent
import { AnyEventObject } from 'xstate';
import { useMachine } from '@xstate/react';
import { Stripe, StripeCardElement, loadStripe } from '@stripe/stripe-js';
import { getStripeTokenOptions, STRIPE_API_KEY } from './stripe';
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
  const [stripe, setStripe] = useState<Stripe | null>(null);
  const [state, send] = useMachine<DonationMachineContext, AnyEventObject>(
    donationMachine
  );
  const { context: machineContext } = state;
  const { billingInformation, cardInformation } = machineContext;
  const machineState: DonationMachineStateValueMap = state.value;

  /**
   * load stripe instance to be used within the card
   * information input and token creation
   */
  useEffect(() => {
    (async function loadingStripe() {
      const stripeInstance = await loadStripe(STRIPE_API_KEY);
      setStripe(stripeInstance);
      send({ type: 'UPDATE.PAYMENT.SERVICE', stripe: stripeInstance });
    })();
  }, [send]);

  /**
   * whenever the machine enter into failure
   * status trigger an effect to retry the process
   */
  useEffect(() => {
    if (machineState === 'failure') {
      alert(`Something went wrong ${JSON.stringify(machineContext)}`);
      send('RETRY');
    }
  });

  const onSubmitAmountForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    const data = new FormData(e.currentTarget);
    const value = Number(data.get('amount'));
    const { id: formId } = e.currentTarget;
    const updateAmountEvent = `UPDATE.AMOUNT.${formId.toUpperCase()}`;

    if (!value || (formId !== 'once' && formId !== 'monthly')) {
      console.error('error trying to update amount', value, formId);
      return;
    }

    send([{ type: updateAmountEvent, value }, { type: 'NEXT' }]);
    e.preventDefault();
  };

  const onSubmitPaymentInfoForm = async (
    e: React.ChangeEvent<HTMLFormElement>,
    card: StripeCardElement
  ) => {
    if (!stripe) return;

    e.persist();

    const formData = new FormData(e.currentTarget);

    const data = {
      firstName: formData.get('first-name'),
      lastName: formData.get('last-name'),
      email: formData.get('email'),
      card
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
    const updateDonationTypeEvent = `START.${value.toUpperCase()}`;

    if (value !== 'once' && value !== 'monthly') {
      console.error('error trying to change donation type', value);
      return;
    }

    send(updateDonationTypeEvent);
  };

  if (!stripe) {
    // Do not render the widget until Stripe has been loaded successfully
    return (
      <div id="loading" style={{ opacity: 0 }}>
        Stripe being loaded...
      </div>
    );
  }

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
          stripe={stripe}
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
