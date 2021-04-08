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

const Layout: React.FC<Props> = ({
  children,
  title,
  description,
  hideNewsletter
}) => {
  const { isOpen: isAnnouncementOpen, closeAnnouncement } = useAnnouncement();
  const popupQueryResult = useStaticQuery(POPUP_QUERY);
  const popup = popupQueryResult.allSanityPopup.edges[0].node;
  const popupText = popup._rawText;

  const popupImageSrc = popup.popupImage?.asset?.fluid?.src;
  const popupImageSrcset = popup.popupImage?.asset?.fluid?.srcSet;

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
      <Header />
      <main className="mt-20">{children}</main>
      <Footer hideNewsletter={hideNewsletter} />
    </>
  );
};

export default Layout;
