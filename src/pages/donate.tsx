import React from 'react';
import Layout from '@components/Layout';
import { graphql } from 'gatsby';
import MembershipBenefits from '@sections/MembershipBenefits';
import FAQ from '@sections/FAQ';
import PowerInNumbers from '@sections/PowerInNumbers';
import OweTheBank from '@sections/OweTheBank';
import DonateCover from '@sections/DonateCover';

const Donate: React.FC = () => {
  return (
    <Layout>
      <DonateCover />
      <MembershipBenefits title="How we will use the money?" />
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

export default Donate;
