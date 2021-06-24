import React from 'react';
import logoBlack from '@static/logo-black.png';
import logoSmall from '@static/logo-small.png';

// TODO: this declaration should live over a d.ts file to prevent cluttering
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'dc-header': unknown;
      'dc-footer': unknown;
    }
  }
}

const GATSBY_HOST_URL = process.env.GATSBY_HOST_URL;
const GATSBY_COMMUNITY_URL = process.env.GATSBY_COMMUNITY_URL;

const Header = () => {
  return (
    <dc-header
      logo={logoBlack}
      logosmall={logoSmall}
      community={GATSBY_COMMUNITY_URL}
      homepage="/"
      returnurl={GATSBY_HOST_URL}
      id="dc-header"
    ></dc-header>
  );
};

export default Header;
