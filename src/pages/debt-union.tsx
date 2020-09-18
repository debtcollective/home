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
      <MembershipBenefits
        title="Membership Benefits"
        description="In addition to becoming part of a community of debtors and helping to
        build the union, members also receive
        access to a host of benefits:"
      />
      <PowerInNumbers />
      <OweTheBank />
      <FAQ />
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
