import React, { useEffect, useState } from 'react';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import * as DonationWizard from './DonationWizard';
import { STRIPE_API_KEY, stripeCardStyles } from '../stripe';

export interface Props {
  amount: number;
  defaultValues: { firstName: string; lastName: string; email: string };
  onEditAmount: () => void;
  onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
}

const DonationPaymentForm: React.FC<Props> = ({
  amount,
  defaultValues,
  onEditAmount,
  onSubmit
}) => {
  const [stripe, setStripe] = useState<Stripe | null>(null);

  useEffect(() => {
    (async function loadingStripe() {
      const stripeInstance = await loadStripe(STRIPE_API_KEY);
      setStripe(stripeInstance);
    })();
  }, []);

  useEffect(() => {
    if (!stripe) return;

    const elements = stripe.elements();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore ts doesn't accept card as a valid param
    const card = elements.create('card', { style: stripeCardStyles });

    card.mount('#stripe-input-element');
  }, [stripe]);

  return (
    <DonationWizard.Container>
      <DonationWizard.Title>
        {`Giving ${amount}$`}{' '}
        <DonationWizard.Button variant="transparent" onClick={onEditAmount}>
          (edit amount)
        </DonationWizard.Button>
      </DonationWizard.Title>
      <DonationWizard.Form onSubmit={onSubmit}>
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
        <DonationWizard.Button type="submit">next step</DonationWizard.Button>
      </DonationWizard.Form>
    </DonationWizard.Container>
  );
};

export default DonationPaymentForm;
