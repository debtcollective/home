import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
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
  const [links, setLinks] = useState(HEADER_LINKS);
  const [user, setUser] = useState(null);

  const handleUserSynced = (e: unknown) => {
    // @ts-ignore
    const syncedUser = e?.detail;
    setUser(syncedUser);
  };

  // TODO: https://stenciljs.com/docs/events JSX event binding not working
  useEffect(() => {
    const header = document.querySelector('#dc-header');
    header?.addEventListener('userSynced', handleUserSynced);

    return () => {
      window.removeEventListener('userSynced', handleUserSynced);
    };
  }, []);

  useEffect(() => {
    const extraLinks = user ? USER_LINKS : GUEST_LINKS;
    setLinks([...HEADER_LINKS, ...extraLinks]);
  }, [user]);

  return (
    <dc-header
      community={GATSBY_COMMUNITY_URL}
      homepage="/"
      returnurl={GATSBY_HOST_URL}
      id="dc-header"
    ></dc-header>
  );
};

export default Header;
