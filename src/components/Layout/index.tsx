import React, { ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Footer from '@components/Footer';
import SEO from '@components/SEO';
import useAnnouncement from '@hooks/useAnnouncement';
import Header from './Header';

interface Props {
  children: ReactNode;
  description?: string;
  title?: string;
  hideNewsletter?: boolean;
}

const Layout: React.FC<Props> = ({
  children,
  title,
  description,
  hideNewsletter
}) => {

  return (
    <>
      <SEO title={title} description={description} />
      <Header />
      <main id="main-container">{children}</main>
      <Footer hideNewsletter={hideNewsletter} />
    </>
  );
};

export default Layout;
