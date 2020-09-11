import React, { ReactNode } from 'react';
import Footer from '@components/Footer';
import SEO from '@components/SEO';

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

const Layout: React.FC<Props> = ({ children, title, description }) => {
  return (
    <>
      <dc-header
        host="http://debtcollective.org"
        links='[{"href":"http://debtcollective.org/","text":"About us"}, {"href":"https://community.debtcollective.org/","text":"Community"}, {"href":"https://teespring.com/stores/debt-collective","text":"Store"}]'
      ></dc-header>
      <SEO title={title} description={description} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
