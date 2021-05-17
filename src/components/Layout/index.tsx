import React, { ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Footer from '@components/Footer';
import SEO from '@components/SEO';
import AnnouncementModal from '@components/AnnouncementModal';
import useAnnouncement from '@hooks/useAnnouncement';
import Header from './Header';

interface Props {
  children: ReactNode;
  description?: string;
  title?: string;
  hideNewsletter?: boolean;
}

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

const getAnnouncementModalPropsFromQuery = (queryResult: unknown) => {
  // @ts-ignore
  const popup = queryResult.allSanityPopup.edges[0].node;
  const text = popup._rawText;
  const imageData = popup.popupImage?.asset?.fluid || {};
  const { srcWebp, srcSet } = imageData;

  return {
    title: popup.title,
    subtitle: popup.subtitle,
    ctaText: popup.ctaText,
    ctaLink: popup.ctaLink,
    text,
    imageSrc: srcWebp,
    imageSrcset: srcSet
  };
};

const Layout: React.FC<Props> = ({
  children,
  title,
  description,
  hideNewsletter
}) => {
  const { isOpen: isAnnouncementOpen, closeAnnouncement } = useAnnouncement();
  const announcementModalProps = getAnnouncementModalPropsFromQuery(
    useStaticQuery(POPUP_QUERY)
  );

  return (
    <>
      <AnnouncementModal
        {...announcementModalProps}
        isOpen={isAnnouncementOpen}
        onClose={closeAnnouncement}
      />
      <SEO title={title} description={description} />
      <Header />
      <main className="mt-5 md:mt-20">{children}</main>
      <Footer hideNewsletter={hideNewsletter} />
    </>
  );
};

export default Layout;
