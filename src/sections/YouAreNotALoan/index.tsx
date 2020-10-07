import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { UnionWidget } from '@components/Donation';

const YouAreNotALoan: React.FC = () => {
  const { desktop, medium, small } = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "heros/join-union.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      medium: file(relativePath: { eq: "heros/join-union.png" }) {
        childImageSharp {
          fluid(maxWidth: 1400, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      small: file(relativePath: { eq: "heros/join-union.png" }) {
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
        className="min-h-screen-70 bg-black-100 flex lg:items-end bg-no-repeat bg-cover bg-center px-4 md:px-12 lg:px-24"
      >
        <div className="absolute inset-0 bg-gray opacity-75"></div>
        <div className="relative max-w-full w-8xl mx-auto mt-8 md:mt-0">
          <div className="py-10 md:pt-16 lg:pb-24 max-w-2xl">
            <h1 className="font-bold text-5xl text-white md:text-6xl leading-none">
              Join the <br className="md:hidden" />{' '}
              <span className="text-yellow">Union!</span>
            </h1>
            <p className="font-semibold text-xl text-white md:text-2xl leading-tight mt-4 mb-8">
              Join a growing community of debtors organizing to cancel debts and
              build financial and political power
            </p>
            <UnionWidget className="ml-0 mr-auto md:mr-0" />
          </div>
        </div>
      </BackgroundImage>
    </>
  );
};

export default YouAreNotALoan;
