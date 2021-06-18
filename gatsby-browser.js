import { defineCustomElements as defineCustomElementsHeader } from '@debtcollective/dc-header-component/loader';
import { defineCustomElements as defineCustomElementsFooter } from '@debtcollective/dc-footer-component/loader';
import { navigate } from 'gatsby';

import './src/tailwind.css';

defineCustomElementsHeader();
defineCustomElementsFooter();

if (typeof window !== 'undefined') {
  window.DC_DONATE_API_URL = process.env.GATSBY_DONATE_API_URL;
  window.DC_MEMBERSHIP_API_URL = process.env.GATSBY_MEMBERSHIP_API_URL;
  window.DC_FUNDS_API_URL = process.env.GATSBY_FUNDS_API_URL;
  window.DC_RECAPTCHA_V3_SITE_KEY = process.env.GATSBY_RECAPTCHA_V3_SITE_KEY;
  window.DC_STRIPE_PUBLIC_TOKEN = process.env.GATSBY_STRIPE_PUBLIC_TOKEN;

  // Allow to use gatsby router
  const header = document.querySelector('#dc-header');
  header &&
    header.addEventListener('linkClicked', ({ detail }) => {
      if (
        detail.to.charAt(0) === '/' ||
        Boolean(detail.to.match(location.origin))
      ) {
        navigate(detail.to);
      }

      detail.event.preventDefault();
    });
}
