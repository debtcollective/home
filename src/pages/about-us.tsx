import React from 'react';
import Layout from '@components/Layout';
import AboutUsCover from '@sections/AboutUsCover';
import AboutUsContent from '@sections/AboutUsContent';
import { graphql } from 'gatsby';
import { ISanityAboutUsContent, ISanityAboutUsHero } from 'src/types/about-us';

interface Props {
  data: {
    sanityAboutUsHero: {
      hero: ISanityAboutUsHero;
    };
    sanityAboutUsContent: ISanityAboutUsContent;
  };
}

const AboutUsPage: React.FC<Props> = ({ data }) => (
  <Layout>
    <AboutUsCover title={data?.sanityAboutUsHero?.hero?._rawTitle} />
    <AboutUsContent items={data?.sanityAboutUsContent?.items} />
  </Layout>
);

export const query = graphql`
  {
    sanityAboutUsHero {
      hero {
        _rawTitle
      }
    }
    sanityAboutUsContent {
      items {
        id
        title
        _rawContent
      }
    }
  }
`;

export default AboutUsPage;
