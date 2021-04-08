import React, { ReactNode, useEffect, useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Footer from '@components/Footer';
import SEO from '@components/SEO';
import logoBlack from '@static/logo-black.png';
import logoSmall from '@static/logo-small.png';
import useMembership from '@hooks/useMembership';
import AnnouncementModal from '@components/AnnouncementModal';
import useAnnouncement from '@hooks/useAnnouncement';

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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      'dc-footer': any;
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

const POPUP_QUERY = graphql`
  query PopupQuery {
    allSanityPopup(sort: { fields: _createdAt, order: DESC }, limit: 1) {
      edges {
        node {
          id
          title
          subtitle
          popupImage {
            asset {
              fluid(maxWidth: 500, maxHeight: 750) {
                ...GatsbySanityImageFluid_noBase64
              }
            }
          }
          _rawText
          ctaText
          ctaLink
        }
      }
    }
  }
`;

const Layout: React.FC<Props> = ({
  children,
  title,
  description,
  hideNewsletter
}) => {
  const [links, setLinks] = useState(HEADER_LINKS);
  const [user, setUser] = useState(null);
  const { isOpen: isAnnouncementOpen, closeAnnouncement } = useAnnouncement();
  const popupQueryResult = useStaticQuery(POPUP_QUERY);
  const popup = popupQueryResult.allSanityPopup.edges[0].node;
  const popupText = popup._rawText;

  const popupImageSrc = popup.popupImage?.asset?.fluid?.src;
  const popupImageSrcset = popup.popupImage?.asset?.fluid?.srcSet;

  const handleUserSynced = (e: unknown) => {
    // @ts-ignore
    const syncedUser = e?.detail;
    setUser(syncedUser);
  };

  // TODO: https://stenciljs.com/docs/events JSX event binding not working
  React.useEffect(() => {
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
    <>
      <AnnouncementModal
        title={popup.title}
        subtitle={popup.subtitle}
        text={popupText}
        imageSrc={popupImageSrc}
        imageSrcSet={popupImageSrcset}
        ctaText={popup.ctaText}
        ctaLink={popup.ctaLink}
        isOpen={isAnnouncementOpen}
        onClose={closeAnnouncement}
      />
      <SEO title={title} description={description} />
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
      <main className="mt-20">{children}</main>
      <Footer hideNewsletter={hideNewsletter} />
    </>
  );
};

export default Layout;
