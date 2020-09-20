import {
  CreateTokenCardData,
  loadStripe,
  StripeCardElementChangeEvent
} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import * as DonationWizard from './DonationWizard';
import StripeCardInput, { DonationPaymentProvider } from './StripeCardInput';
import { STRIPE_API_KEY } from '../utils/stripe';
import { PaymentInfoEvent } from '../machines/types';
import { DonationPhoneInput } from '.';

export interface Props {
  amount: number;
  defaultValues: Omit<PaymentInfoEvent, 'type' | 'token'>;
  onEditAmount: () => void;
  onSubmit: (
    data: { [string: string]: unknown },
    paymentProvider: DonationPaymentProvider
  ) => void;
  tokenData: CreateTokenCardData;
}

const DonationPaymentForm: React.FC<Props> = ({
  amount,
  defaultValues,
  onEditAmount,
  onSubmit,
  tokenData
}) => {
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [paymentProvider, setPaymentProvider] = useState<
    DonationPaymentProvider | undefined
  >();

  const handleOnSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.persist();
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    if (!paymentProvider || !paymentProvider.card) {
      console.error('Error trying to submit payment form', paymentProvider);
      return;
    }

    const { token } = await paymentProvider.stripe.createToken(
      paymentProvider.card,
      tokenData
    );

    const data = {
      firstName: formData.get('first-name'),
      lastName: formData.get('last-name'),
      email: formData.get('email'),
      phoneNumber: formData.get('phone-number'),
      token
    };

    onSubmit(data, paymentProvider);
  };

  const onChangeInputCardElement = (
    e: StripeCardElementChangeEvent,
    pProvider?: DonationPaymentProvider
  ) => {
    if (e.complete) {
      setPaymentProvider(pProvider);
    }
    setIsSubmitDisabled(!e.complete);
  };

  return (
    <DonationWizard.Container>
      <DonationWizard.Title>
        {`Giving ${amount}$`}{' '}
        <DonationWizard.Button variant="transparent" onClick={onEditAmount}>
          (edit amount)
        </DonationWizard.Button>
      </DonationWizard.Title>
      <DonationWizard.Form onSubmit={handleOnSubmit}>
        <DonationWizard.Input
          defaultValue={defaultValues.firstName}
          name="first-name"
          placeholder="Jane"
          required
          title="Card owner first name"
        />
        <DonationWizard.Input
          defaultValue={defaultValues.lastName}
          name="last-name"
          placeholder="Doe"
          required
          title="Card owner last name"
        />
        <DonationWizard.Input
          defaultValue={defaultValues.email}
          name="email"
          type="email"
          placeholder="jane.doe@debtcollective.org"
          required
          title="Contact email"
        />
        <DonationPhoneInput
          defaultValue={defaultValues.phoneNumber}
          name="phone-number"
          required
          title="Contact phone number"
        />
        <Elements stripe={loadStripe(STRIPE_API_KEY)}>
          <StripeCardInput onChange={onChangeInputCardElement} />
        </Elements>
        <DonationWizard.Button type="submit" disabled={isSubmitDisabled}>
          next step
        </DonationWizard.Button>
      </DonationWizard.Form>
    </DonationWizard.Container>
  );
};

export default DonationPaymentForm;
