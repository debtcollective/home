import React, { useEffect, useRef } from 'react';
import {
  Stripe,
  StripeCardElementChangeEvent,
  StripeCardElement
} from '@stripe/stripe-js';
import { Input } from './DonationWizard';
import { stripeCardStyles } from '../stripe';

interface Props {
  stripe: Stripe | null | undefined;
  onChange: (e: StripeCardElementChangeEvent) => void;
  onMount: (card: StripeCardElement) => void;
}

const StripeCardInput: React.FC<Props> = ({ stripe, onChange, onMount }) => {
  /**
   * avoid infinite loop of call caused by a new
   * reference of the same fn being passed on each render
   */
  const onChangeRef = useRef(onChange);
  const onMountRef = useRef(onMount);

  /**
   * create the StripeCardElement and hold it into the state
   * for further usage after mounting it within the form
   */
  useEffect(() => {
    if (!stripe) return;

    const elements = stripe.elements();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore ts doesn't accept card as a valid param
    const stripeCard = elements.create('card', { style: stripeCardStyles });
    stripeCard.on('change', onChangeRef.current);
    stripeCard.on('ready', () => onMountRef.current(stripeCard));
    stripeCard.mount('#stripe-input-element');
  }, [onChangeRef, onMountRef, stripe]);

  return (
    <Input as="div" id="stripe-input-element">
      {/* An stripe element will be inserted here */}
    </Input>
  );
};

export default StripeCardInput;
