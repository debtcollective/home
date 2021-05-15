import React from 'react';
import { graphql, navigate } from 'gatsby';
import Layout from '@components/Layout';
import Hero from '@components/Hero';
import MainVictories from '@sections/MainVictories';
import MainSlider from '@sections/MainSlider';
import { ISanityHero, ISanitySecondSection } from 'src/types/home';
import { convertISanityBadgeToIBadge } from '@utils/badges';

interface Props {
  data: {
    sanityHome: {
      hero: ISanityHero;
      secondSection: ISanitySecondSection;
    };
  };
}

const Home: React.FC<Props> = ({ data }) => (
  <Layout>
    <Hero
      title={data?.sanityHome?.hero?._rawTitle}
      text={data?.sanityHome?.hero?.body}
      primaryAction={() => navigate('/debt-union')}
      primaryActionLabel="Join the Union"
      secondaryAction={() => navigate('/debt-union#membership-benefits')}
      secondaryActionLabel="Member Benefits"
    />
    <MainSlider
      title={data?.sanityHome?.secondSection?.title}
      body={data?.sanityHome?.secondSection?._rawBody}
      badges={data?.sanityHome?.secondSection?.badges.map(
        convertISanityBadgeToIBadge
      )}
    />
    <MainVictories />
  </Layout>
);

export default Home;

export const query = graphql`
  {
    sanityHome {
      hero {
        _rawTitle
        body
      }
      secondSection {
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
    }
  }
`;
