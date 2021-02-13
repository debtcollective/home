import React from 'react';
import Layout from '@components/Layout';
import AboutUsCover from '@sections/AboutUsCover';
import AboutUsFAQ from '@sections/AboutUsFAQ';

const AboutUsPage: React.FC = () => {
  return (
    <Layout>
      <AboutUsCover />
      <AboutUsFAQ />
    </Layout>
  );
};

export default AboutUsPage;
