import React, { ReactNode } from 'react';
import Footer from '@components/Footer';
import SEO from '@components/SEO';
import logoBlack from '@static/logo-black.png';
import logoSmall from '@static/logo-small.png';

interface Props {
  children: ReactNode;
  description?: string;
  title?: string;
  hideNewsletter?: boolean;
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

export const HOST_URL = process.env.HOST_URL;
export const COMMUNITY_URL = process.env.COMMUNITY_URL;

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

const Layout: React.FC<Props> = ({
  children,
  title,
  description,
  hideNewsletter
}) => {
  return (
    <>
      <dc-header
        logo={logoBlack}
        logosmall={logoSmall}
        host={HOST_URL}
        memberhuburl={`${HOST_URL}/hub`}
        community={COMMUNITY_URL}
        donateurl="/donate"
        links={JSON.stringify(HEADER_LINKS)}
      ></dc-header>
      <SEO title={title} description={description} />
      <main className="mt-16">{children}</main>
      <Footer hideNewsletter={hideNewsletter} />
    </>
  );
};

export default Layout;
