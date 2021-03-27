import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { DonationWidget } from '@debtcollective/union-component';

const DonateCover: React.FC = () => {
  const { desktop, medium, small } = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "heros/donate-horizontal.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      medium: file(relativePath: { eq: "heros/donate-horizontal.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      small: file(relativePath: { eq: "heros/donate-vertical.jpg" }) {
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
        className="flex px-4 bg-center bg-no-repeat bg-cover min-h-screen-70 bg-black-100 lg:items-end md:px-12 lg:px-24"
      >
        <div className="absolute inset-0 opacity-50 bg-gray"></div>
        <div className="relative max-w-full mx-auto mt-8 w-8xl md:mt-0">
          <div className="max-w-3xl py-10 md:pt-16 lg:pb-24">
            <h1 className="max-w-2xl text-5xl font-bold leading-none text-white md:text-6xl">
              Help us <br className="md:hidden" />{' '}
              <span className="text-yellow">
                build a Debtors&apos; movement!
              </span>
            </h1>
            <p className="mt-4 mb-8 text-xl font-semibold leading-tight text-white md:text-2xl">
              Your contribution helps grow the union of debtors to fight back
              against creditors and create the just economic system we deserve
            </p>
            <DonationWidget className="ml-0 mr-auto md:mr-0" />
          </div>
        </div>
      </BackgroundImage>
    </>
  );
};

export default DonateCover;
