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
  },
  {
    href: 'https://teespring.com/stores/debt-collective',
    text: 'Store',
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
    if (user) {
      setLinks([...HEADER_LINKS, ...USER_LINKS]);
      return;
    }
    setLinks([...HEADER_LINKS, ...GUEST_LINKS]);
  }, [user]);

  return (
    <dc-header
      id="dc-header"
      logo={logoBlack}
      logosmall={logoSmall}
      host={GATSBY_HOST_URL}
      memberhuburl={`${GATSBY_HOST_URL}/hub`}
      community={GATSBY_COMMUNITY_URL}
      donateurl=""
    >
      <div slot="header">
        <nav className="nav">
          {links.map(({ text, href, ...attrs }) => (
            <div key={href} className="nav-item d-md-flex">
              <Link className="nav-link" to={href} {...attrs}>
                {text}
              </Link>
            </div>
          ))}
        </nav>
      </div>
      <div slot="menu">
        <div className="flex flex-col space-y-4 nav-item">
          {links.map(({ text, href, ...attrs }) => (
            <Link key={href} className="nav-link" to={href} {...attrs}>
              {text}
            </Link>
          ))}
        </div>
      </div>
      <div slot="donate-header">
        <Link to="/donate" className="btn-donate">
          Donate
        </Link>
      </div>
      <div slot="donate-menu">
        <Link to="/donate" className="btn-donate">
          Donate
        </Link>
      </div>
    </dc-header>
  );
};

export default Header;
