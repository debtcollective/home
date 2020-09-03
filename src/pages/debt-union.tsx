import React from 'react';
import Layout from '@components/Layout';
import Hero from '@components/Hero';
import { graphql } from 'gatsby';
import WhatIsADebtorsUnion from '@sections/WhatIsADebtorsUnion';
import MembershipBenefits from '@sections/MembershipBenefits';
import FAQ from '@sections/FAQ';
import PowerInNumbers from '@sections/PowerInNumbers';
import OweTheBank from '@sections/OweTheBank';
import LineBreak from '@components/LineBreak';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

const DebtUnion: React.FC<Props> = ({ data }) => {
  const heroImage = data?.heroImage?.childImageSharp?.fluid?.src || '';

  return (
    <Layout>
      <Hero
        backgroundSrc={heroImage}
        title={
          <>
            You are not <span className="text-yellow">A Loan!</span>
          </>
        }
        text={
          <>
            Join a growing community of debtors organizing <LineBreak /> to
            cancel debts and build financial and political power
          </>
        }
      >
        {
          // @TODO: include the donations widget
        }
      </Hero>
      <WhatIsADebtorsUnion />
      <MembershipBenefits />
      <FAQ />
      <PowerInNumbers />
      <OweTheBank />
    </Layout>
  );
};

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "you-are-not-a-loan.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          src
        }
      }
    }
  }
`;

export default DebtUnion;
