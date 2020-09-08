import React, { ReactNode } from 'react';
import Footer from '@components/Footer';
import SEO from '@components/SEO';

interface Props {
  children: ReactNode;
  description?: string;
  title?: string;
}

const Layout: React.FC<Props> = ({ children, title, description }) => {
  return (
    <>
      <SEO title={title} description={description} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
