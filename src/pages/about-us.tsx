import React from 'react';
import Layout from '@components/Layout';
import AboutUsCover from '@sections/AboutUsCover';
import AboutUsContent from '@sections/AboutUsContent';
import { graphql } from 'gatsby';

export interface SanityAboutUsItem {
  id: string;
  title: string;
  _rawContent: unknown[];
}

export interface SanityAboutUs {
  title: string;
  content: {
    items: SanityAboutUsItem[];
  };
}

interface Props {
  data: {
    sanityAboutUs: SanityAboutUs;
  };
}

const AboutUsPage: React.FC<Props> = ({ data }) => (
  <Layout>
    <AboutUsCover />
    <AboutUsContent items={data?.sanityAboutUs?.content?.items} />
  </Layout>
);

export const query = graphql`
  {
    sanityAboutUs {
      title
      content {
        items {
          id
          title
          _rawContent
        }
      }
    }
  }
`;

export default AboutUsPage;
