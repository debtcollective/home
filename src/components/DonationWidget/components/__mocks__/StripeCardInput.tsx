import React, { useEffect } from 'react';
import { Input } from '../DonationWizard';

interface Props {
  onChange: (e: any) => void;
  onMount: (card: any) => void;
  stripe: any;
}

const StripeCardInput: React.FC<Props> = ({ onChange, onMount, stripe }) => {
  useEffect(() => {
    const elements = stripe.elements();
    const stripeCard = elements.create('card');
    onMount(stripeCard);
  }, [onChange, onMount, stripe]);

  return (
    <Input
      id="stripe-mocked-input-element"
      title="stripe-mocked-input-element"
      // emulate StripeElementChangeEvent without error and completed
      onChange={() => onChange({ error: undefined, complete: true })}
    />
  );
};

export default StripeCardInput;
