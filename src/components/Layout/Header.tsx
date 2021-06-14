import React from 'react';

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
