import React from 'react';
import { navigate } from 'gatsby';
import Layout from '@components/Layout';
import Hero from '@components/Hero';
import MainVictories from '@sections/MainVictories';
import MainSlider from '@sections/MainSlider';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero
        title={
          <>
            Alone our debts are a burden. Together they make us{' '}
            <span className="text-yellow">powerful.</span>
          </>
        }
        text={
          <>
            We are a debtors&apos; union fighting to cancel debts and defend
            millions of households. Join us to build a world where college is
            publicly funded, healthcare is universal and housing is guaranteed
            for all.
          </>
        }
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
