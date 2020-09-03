import React from 'react';
import { navigate, graphql } from 'gatsby';
import Layout from '@components/Layout';
import Hero from '@components/Hero';
import MainVictories from '@sections/MainVictories';
import MainSlider from '@sections/MainSlider';
import LineBreak from '@components/LineBreak';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

const Home: React.FC<Props> = ({ data }) => {
  const heroImage = data?.heroImage?.childImageSharp?.fluid?.src || '';
  const mainVictoriesImage =
    data?.mainVictoriesImage?.childImageSharp?.fluid?.src || '';

  return (
    <Layout>
      <Hero
        backgroundSrc={heroImage}
        title={
          <>
            Alone our debts are a <LineBreak /> burden. Together they{' '}
            <LineBreak /> make us <span className="text-yellow">powerful.</span>
          </>
        }
        text={
          <>
            We are a debtors&apos; union fighting to cancel debts and defend
            millions <LineBreak /> of households. Join us to build a world where
            college is publicly <LineBreak /> funded, healthcare is universal
            and housing is guaranteed for all.
          </>
        }
        primaryAction={() => navigate('/debt-union')}
        primaryActionLabel="Join the Union"
        secondaryAction={() => navigate('/debt-union')}
        secondaryActionLabel="Member Benefits"
        hasActions
      />
      <MainSlider />
      <MainVictories mainVictoriesImage={mainVictoriesImage} />
    </Layout>
  );
};

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "main-hero.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          src
        }
      }
    }
    mainVictoriesImage: file(relativePath: { eq: "main-victories-image.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          src
        }
      }
    }
  }
`;

export default Home;
