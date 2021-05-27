import React from 'react';
import { graphql, navigate } from 'gatsby';
import Layout from '@components/Layout';
import Hero from '@components/Hero';
import MainVictories from '@sections/MainVictories';
import MainSlider from '@sections/MainSlider';
import {
  ISanityDebtRelief,
  ISanityHero,
  ISanityHomePageFeatures
} from 'src/types/home';
import { convertISanityBadgeToIBadge } from '@utils/badges';

interface Props {
  data: {
    sanityHomeHero: {
      hero: ISanityHero;
    };
    sanityHomePageFeatures: ISanityHomePageFeatures;
    sanityDebtRelief: ISanityDebtRelief;
  };
}

const Home: React.FC<Props> = ({ data }) => (
  <Layout>
    <Hero
      title={data?.sanityHomeHero?.hero?._rawTitle}
      text={data?.sanityHomeHero?.hero?.body}
      primaryAction={() => navigate('/debt-union')}
      primaryActionLabel="Join the Union"
      secondaryAction={() => navigate('/debt-union#membership-benefits')}
      secondaryActionLabel="Member Benefits"
    />
    <MainSlider
      title={data?.sanityHomePageFeatures?.title}
      body={data?.sanityHomePageFeatures?._rawBody}
      badges={data?.sanityHomePageFeatures?.badges.map(
        convertISanityBadgeToIBadge
      )}
    />
    <MainVictories
      title={data?.sanityDebtRelief?._rawTitle}
      body={data?.sanityDebtRelief?.body}
      videoId={data?.sanityDebtRelief?.videoId}
    />
  </Layout>
);

export default Home;

export const query = graphql`
  {
    sanityHomeHero {
      hero {
        _rawTitle
        body
      }
    }
    sanityHomePageFeatures {
      title
      _rawBody
      badges {
        icon {
          asset {
            url
          }
        }
        title
        body
        color
        href
        caption
      }
    }
    sanityDebtRelief {
      _rawTitle
      body
      videoId
    }
  }
`;
