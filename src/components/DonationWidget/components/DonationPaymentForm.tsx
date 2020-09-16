import React, { useEffect, useState } from 'react';
import {
  loadStripe,
  Stripe,
  StripeCardElementChangeEvent,
  StripeCardElement,
  Token
} from '@stripe/stripe-js';
import * as DonationWizard from './DonationWizard';
import { STRIPE_API_KEY, stripeCardStyles } from '../stripe';

export interface Props {
  amount: number;
  defaultValues: { firstName: string; lastName: string; email: string };
  onEditAmount: () => void;
  onSubmit: (
    e: React.ChangeEvent<HTMLFormElement>,
    paymentToken: Token
  ) => void;
}

const DonationPaymentForm: React.FC<Props> = ({
  amount,
  defaultValues,
  onEditAmount,
  onSubmit
}) => {
  const [stripe, setStripe] = useState<Stripe | null>(null);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(false);
  const [card, setCard] = useState<StripeCardElement | null>(null);

  const handleOnChangeStripeCardInput = (e: StripeCardElementChangeEvent) => {
    setIsSubmitDisabled(!e.error && e.complete);
  };

  const handleOnSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.persist();

    if (!stripe || !card) {
      console.warn('handleOnSubmit without necessary data');
      return;
    }

    const result = await stripe.createToken(card);
    if (result.token) {
      onSubmit(e, result.token);
    }
  };

  /**
   * load stripe instance to be used within the card
   * information input and token creation
   */
  useEffect(() => {
    (async function loadingStripe() {
      const stripeInstance = await loadStripe(STRIPE_API_KEY);
      setStripe(stripeInstance);
    })();
  }, []);

  /**
   * create the StripeCardElement and hold it into the state
   * for further usage after mounting it within the form
   */
  useEffect(() => {
    if (!stripe || card) return;

    const elements = stripe.elements();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore ts doesn't accept card as a valid param
    const stripeCard = elements.create('card', { style: stripeCardStyles });
    stripeCard.on('change', handleOnChangeStripeCardInput);

    stripeCard.mount('#stripe-input-element');
    setCard(stripeCard);
  }, [card, stripe]);

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
        <DonationWizard.Input as="div" id="stripe-input-element">
          {/* An stripe element will be inserted here */}
        </DonationWizard.Input>
        <DonationWizard.Button type="submit" disabled={!isSubmitDisabled}>
          next step
        </DonationWizard.Button>
      </DonationWizard.Form>
    </DonationWizard.Container>
  );
};

export default DonationPaymentForm;
