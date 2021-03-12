import { defineCustomElements as defineCustomElementsHeader } from '@debtcollective/dc-header-component/loader';
import { defineCustomElements as defineCustomElementsFooter } from '@debtcollective/dc-footer-component/loader';

import './src/tailwind.css';

defineCustomElementsHeader();
defineCustomElementsFooter();

if (typeof window !== 'undefined') {
  // TODO: We need to add support to pass these variables as props
  window.DC_DONATE_API_URL = process.env.GATSBY_DONATE_API_URL;
  window.DC_MEMBERSHIP_API_URL = process.env.GATSBY_MEMBERSHIP_API_URL;
  window.DC_RECAPTCHA_V3_SITE_KEY = process.env.GATSBY_RECAPTCHA_V3_SITE_KEY;
  window.DC_STRIPE_PUBLIC_TOKEN = process.env.GATSBY_STRIPE_PUBLIC_TOKEN;
}
