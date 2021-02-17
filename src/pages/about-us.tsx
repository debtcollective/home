import React from 'react';
import Layout from '@components/Layout';
import AboutUsCover from '@sections/AboutUsCover';
import AboutUsContent from '@sections/AboutUsContent';
import { graphql } from 'gatsby';

export interface ISanityAboutUsItem {
  id: string;
  title: string;
  _rawContent: unknown[];
}

export interface ISanityAboutUs {
  title: string;
  content: {
    items: ISanityAboutUsItem[];
  };
}

interface Props {
  data: {
    sanityAboutUs: ISanityAboutUs;
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
