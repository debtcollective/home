import React, { ReactNode } from 'react';
import Footer from 'components/Footer';
import SEO from 'components/Helmet';

interface Props {
  children: ReactNode;
  description?: string;
  title?: string;
}

const Layout: React.FC<Props> = ({ children, title, description }) => {
  return (
    <>
      <SEO title={title} description={description} />
      <main>
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
