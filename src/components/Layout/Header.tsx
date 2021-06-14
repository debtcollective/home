import React, { useEffect, useState } from 'react';
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

const GUEST_LINKS = [
  {
    href: '/debt-union',
    text: 'Join the Union',
    target: '_self'
  }
];

const USER_LINKS = [
  {
    href: '/hub',
    text: 'Member hub',
    target: '_self'
  }
];

const HEADER_LINKS = [
  {
    href: 'https://biden100.debtcollective.org/',
    text: 'Biden Jubilee 100',
    target: '_blank'
  },
  {
    href: 'https://community.debtcollective.org/',
    text: 'Community',
    target: '_blank'
  }
];

const Header = () => {
  return (
    <dc-header
      community={GATSBY_COMMUNITY_URL}
      donateurl=""
      homepage={GATSBY_HOST_URL}
      host={GATSBY_HOST_URL}
      id="dc-header"
      memberhuburl={`${GATSBY_HOST_URL}/hub`}
      union="/debt-union"
    ></dc-header>
  );
};

export default Header;
