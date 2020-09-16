import { DonationMachineContext } from './machine/types';

/**
 * Publishable key that is used in order to load Stripe
 */
export const STRIPE_API_KEY = 'pk_test_TYooMQauvdEDq54NiTphI7jx';

/**
 * Add extra data to the create token process to take advantage
 * of Stripe built-in checks.
 * https://stripe.com/docs/js/tokens_sources/create_token?type=cardElement#stripe_create_token-data
 */
export const getStripeTokenOptions = (
  donationMachineContext: DonationMachineContext
) => {
  const { billingInformation, cardInformation } = donationMachineContext;

  return {
    name: `${cardInformation.firstName} ${cardInformation.lastName}`,
    address_line1: billingInformation.address,
    address_city: billingInformation.city,
    address_zip: billingInformation.zipCode,
    address_country: billingInformation.country,
    currency: 'USD'
  };
};

/**
 * CSS-in-JS styles for the card component
 * https://stripe.com/docs/js/appendix/style
 */
export const stripeCardStyles = {
  base: {
    color: '#1C1C1C',
    fontSize: '16px',
    lineHeight: 1.5,
    '::placeholder': {
      color: '#A0AEC0'
    }
  },
  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a'
  }
};
