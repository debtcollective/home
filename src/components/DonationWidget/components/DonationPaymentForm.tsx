import {
  Stripe,
  StripeCardElement,
  StripeCardElementChangeEvent
} from '@stripe/stripe-js';
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import * as DonationWizard from './DonationWizard';
import { CARD_ELEMENT_OPTIONS } from '../stripe';

export interface Props {
  amount: number;
  defaultValues: { firstName: string; lastName: string; email: string };
  onEditAmount: () => void;
  onSubmit: (
    e: React.ChangeEvent<HTMLFormElement>,
    paymentProvider: { stripe: Stripe; card: StripeCardElement }
  ) => void;
}

const DonationPaymentForm: React.FC<Props> = ({
  amount,
  defaultValues,
  onEditAmount,
  onSubmit
}) => {
  const [error, setError] = useState<string | null | undefined>(null);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const elements = useElements();
  const stripe = useStripe();

  const handleOnSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.persist();
    e.preventDefault();

    if (!elements || !stripe) {
      console.warn('Submitting without necessary data');
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      console.error('Error trying to get card element');
      return;
    }

    onSubmit(e, { stripe, card });
  };

  const onChangeInputCardElement = (e: StripeCardElementChangeEvent) => {
    setError(e.error?.message);
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
          placeholder="jane.doe@debtcollective.org"
          required
          title="Contact email"
        />
        <CardElement
          id="stripe-card-element"
          options={CARD_ELEMENT_OPTIONS}
          onChange={onChangeInputCardElement}
        />
        <DonationWizard.HelpText role="alert">{error}</DonationWizard.HelpText>
        <DonationWizard.Button type="submit" disabled={isSubmitDisabled}>
          next step
        </DonationWizard.Button>
      </DonationWizard.Form>
    </DonationWizard.Container>
  );
};

export default DonationPaymentForm;
