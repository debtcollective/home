import React from 'react';
import Layout from 'components/Layout';
import Hero from 'components/Hero';
import { navigate, graphql } from 'gatsby';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

const Home: React.FC<Props> = ({ data }) => {
  const heroSrc = data?.file?.childImageSharp?.fluid?.src || '';

  return (
    <Layout>
      <Hero
        backgroundSrc={heroSrc}
        title={
          <>
            Alone our debts are a <br className="hidden lg:inline" /> burden.
            Together they <br className="hidden lg:inline" /> make us{' '}
            <span className="text-yellow">powerful.</span>
          </>
        }
        text={
          <>
            We are a debtors&apos; union fighting to cancel debts and defend
            millions <br className="hidden lg:inline" /> of households. Join us
            to build a world where college is publicly{' '}
            <br className="hidden lg:inline" /> funded, healthcare is universal
            and housing is guaranteed for all.
          </>
        }
        primaryAction={() => navigate('/debt-union')}
        primaryActionLabel="Join the Union"
        secondaryAction={() => navigate('/debt-union')}
        secondaryActionLabel="Member Benefits"
      />
    </Layout>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "main-hero.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          src
        }
      }
    }
  }
`;

export default Home;
