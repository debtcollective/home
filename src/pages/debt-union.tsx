import React from 'react';
import Layout from 'components/Layout';
import Hero from 'components/Hero';
import { graphql } from 'gatsby';

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
            Join a growing community of debtors organizing{' '}
            <br className="hidden lg:inline" /> to cancel debts and build
            financial and political power
          </>
        }
      >
        {
          // @TODO: include the donations widget
        }
      </Hero>
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
