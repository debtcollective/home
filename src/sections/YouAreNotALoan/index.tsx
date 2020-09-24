import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { UnionWidget } from '@components/Donation';

const YouAreNotALoan: React.FC = () => {
  const { desktop, medium, small } = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "heros/join-union.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4160, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      medium: file(relativePath: { eq: "heros/join-union.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      small: file(relativePath: { eq: "heros/join-union.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 490, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  // Art-Direction Array
  const backgroundArtDirectionStack = [
    small.childImageSharp.fluid,
    {
      ...medium.childImageSharp.fluid,
      media: `(min-width: 491px)`
    },
    {
      ...desktop.childImageSharp.fluid,
      media: `(min-width: 1401px)`
    }
  ];

  return (
    <>
      <BackgroundImage
        fluid={backgroundArtDirectionStack}
        className="min-h-screen bg-no-repeat bg-cover bg-center -mt-20 pt-20 p-4 pb-8 lg:p-24"
      >
        <div className="">
          <h1 className="font-bold text-5xl text-white lg:text-right leading-none mt-4">
            Join the <br className="lg:hidden" />{' '}
            <span className="text-yellow">Union!</span>
          </h1>
          <p className="font-semibold text-xl text-white lg:text-right leading-tight mt-4 mb-8">
            Join a growing community of debtors organizing to cancel debts and
            build financial and political power
          </p>
          <UnionWidget className="ml-0 mr-auto lg:ml-auto lg:mr-0" />
        </div>
      </BackgroundImage>
    </>
  );
};

export default YouAreNotALoan;
