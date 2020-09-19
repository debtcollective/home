import React, { ReactNode, useEffect, useState } from 'react';
import Footer from '@components/Footer';
import SEO from '@components/SEO';
import logoBlack from '@static/logo-black.png';
import logoSmall from '@static/logo-small.png';
import useUser from '@hooks/useUser';

interface Props {
  children: ReactNode;
  description?: string;
  title?: string;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      'dc-header': any;
    }
  }
}

export const HOST_URL = process.env.HOST_URL || 'http://debtcollective.org';
export const COMMUNITY_URL =
  process.env.COMMUNITY_URL || 'https://community.debtcollective.org/';

const HEADER_LINKS = [
  {
    href: '/debt-union',
    text: 'Join the Union'
  },
  {
    href: 'http://debtcollective.org/',
    text: 'About us'
  },
  {
    href: 'https://community.debtcollective.org/',
    text: 'Community'
  },
  {
    href: 'https://teespring.com/stores/debt-collective',
    text: 'Store'
  }
];

const Layout: React.FC<Props> = ({ children, title, description }) => {
  const [headerLinks, setHeaderLinks] = useState(HEADER_LINKS);
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      setHeaderLinks((links) => [
        {
          href: '/hub',
          text: 'Member hub'
        },
        ...links
      ]);
    }
  }, [user]);

  return (
    <>
      <dc-header
        logo={logoBlack}
        logosmall={logoSmall}
        host={HOST_URL}
        community={COMMUNITY_URL}
        donateurl="/donate"
        links={JSON.stringify(headerLinks)}
      ></dc-header>
      <SEO title={title} description={description} />
      <main className="mt-16">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
