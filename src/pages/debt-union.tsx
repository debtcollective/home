import React from 'react';
import Layout from '@components/Layout';
import { graphql } from 'gatsby';
import WhatIsADebtorsUnion from '@sections/WhatIsADebtorsUnion';
import MembershipBenefits from '@sections/MembershipBenefits';
import FAQ from '@sections/FAQ';
import PowerInNumbers from '@sections/PowerInNumbers';
import OweTheBank from '@sections/OweTheBank';
import YouAreNotALoan from '@sections/YouAreNotALoan';

const DebtUnion: React.FC = () => {
  return (
    <Layout>
      <YouAreNotALoan />
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
