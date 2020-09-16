/**
 * Publishable key that is used in order to load Stripe
 */
export const STRIPE_API_KEY = 'pk_test_TYooMQauvdEDq54NiTphI7jx';

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
