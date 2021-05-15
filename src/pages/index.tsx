import React from 'react';
import { graphql, navigate } from 'gatsby';
import Layout from '@components/Layout';
import Hero from '@components/Hero';
import MainVictories from '@sections/MainVictories';
import MainSlider from '@sections/MainSlider';
import { ISanityHero } from 'src/types/home';

interface Props {
  data: {
    sanityHomePageHero: ISanityHero;
  };
}

const Home: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <Hero
        title={data?.sanityHomePageHero?.hero?._rawTitle}
        text={data?.sanityHomePageHero?.hero?.content}
        primaryAction={() => navigate('/debt-union')}
        primaryActionLabel="Join the Union"
        secondaryAction={() => navigate('/debt-union#membership-benefits')}
        secondaryActionLabel="Member Benefits"
      />
      <MainSlider />
      <MainVictories />
    </Layout>
  );
};

export default Home;

export const query = graphql`
  {
    sanityHomePageHero {
      hero {
        content
        _rawTitle
      }
    }
  }
`;
