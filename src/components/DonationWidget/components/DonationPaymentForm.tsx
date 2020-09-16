import React, { useState } from 'react';
import {
  Stripe,
  StripeCardElementChangeEvent,
  StripeCardElement
} from '@stripe/stripe-js';
import * as DonationWizard from './DonationWizard';
import StripeCardInput from './StripeCardInput';

export interface Props {
  amount: number;
  defaultValues: { firstName: string; lastName: string; email: string };
  onEditAmount: () => void;
  onSubmit: (
    e: React.ChangeEvent<HTMLFormElement>,
    card: StripeCardElement
  ) => void;
  stripe: Stripe | null;
}

const DonationPaymentForm: React.FC<Props> = ({
  amount,
  defaultValues,
  onEditAmount,
  onSubmit,
  stripe
}) => {
  const [isSubmitEnabled, setIsSubmitEnabled] = useState<boolean>(false);
  const [card, setCard] = useState<StripeCardElement | null>(null);

  const handleOnChangeStripeCardInput = (e: StripeCardElementChangeEvent) => {
    setIsSubmitEnabled(!e.error && e.complete);
  };

  const handleOnSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!card) {
      console.warn('handleOnSubmit without necessary data');
      return;
    }

    onSubmit(e, card);
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
        <StripeCardInput
          stripe={stripe}
          onMount={setCard}
          onChange={handleOnChangeStripeCardInput}
        />
        <DonationWizard.Button type="submit" disabled={!isSubmitEnabled}>
          next step
        </DonationWizard.Button>
      </DonationWizard.Form>
    </DonationWizard.Container>
  );
};

export default DonationPaymentForm;
