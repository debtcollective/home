import React from 'react';
import Layout from '@components/Layout';
import OurTeamCover from '@sections/OurTeamCover';
import { graphql } from 'gatsby';
import OurTeamContent from '@sections/OurTeamContent';

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
    <OurTeamCover />
    <OurTeamContent items={data?.sanityAboutUs?.content?.items} />
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
