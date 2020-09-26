import React, { ReactNode, useEffect, useState } from 'react';
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
export const MEMBERSHIP_URL = `${process.env.MEMBERSHIP_URL}`;

const HEADER_LINKS = [
  {
    href: '/debt-union',
    text: 'Join the Union'
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

const HUB_LINK = {
  href: '/hub',
  text: 'Member hub'
};

type MembershipStatus = 'pending' | 'active' | null;

const Layout: React.FC<Props> = ({
  children,
  title,
  description,
  hideNewsletter
}) => {
  const [links, setLinks] = useState(JSON.stringify(HEADER_LINKS));

  const onMembershipFetched = (response: { status: MembershipStatus }) => {
    if (response.status !== null) {
      setLinks(JSON.stringify([HUB_LINK, ...HEADER_LINKS]));
      return;
    }

    setLinks(JSON.stringify(HEADER_LINKS));
  };

  useEffect(() => {
    fetch(`${MEMBERSHIP_URL}/users/current.json`, {
      // credentials: 'include',
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(async (res) => {
      const response = await res.json();
      onMembershipFetched(response);
    });
  }, []);

  return (
    <>
      <dc-header
        id="dc-header"
        logo={logoBlack}
        logosmall={logoSmall}
        host={HOST_URL}
        memberhuburl={`${HOST_URL}/hub`}
        community={COMMUNITY_URL}
        donateurl="/donate"
        links={links}
      ></dc-header>
      <SEO title={title} description={description} />
      <main className="mt-20">{children}</main>
      <Footer hideNewsletter={hideNewsletter} />
    </>
  );
};

export default Layout;
