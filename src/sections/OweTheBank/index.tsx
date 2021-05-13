import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery, graphql } from 'gatsby';
import { formatNumberWithCommas } from '@formatters/number';

const OweTheBank = () => {
  const { desktop, medium, small, allAbout } = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "owe-the-bank.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      medium: file(relativePath: { eq: "owe-the-bank.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      small: file(relativePath: { eq: "owe-the-bank.png" }) {
        childImageSharp {
          fluid(maxWidth: 490, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const userCount = 10000;

  // Art-Direction Array
  const backgroundArtDirectionStack = [
    small.childImageSharp.fluid,
    {
      ...medium.childImageSharp.fluid,
      media: `(min-width: 491px)`
    },
    {
      ...desktop.childImageSharp.fluid,
      media: `(min-width: 1201px)`
    }
  ];

  return (
    <BackgroundImage
      fluid={backgroundArtDirectionStack}
      className="flex items-center min-h-fish-section from-turquoise bg-gradient-to-l px-x-screen-spacing lg:p-desktop-screen-spacing"
    >
      <div className="order-2 w-full mx-auto max-w-8xl">
        <p className="text-xl font-semibold text-right text-white lg:text-2xl">
          With +{formatNumberWithCommas(userCount)} members,
        </p>
        <p className="text-xl font-semibold text-right text-white lg:text-2xl">
          together, we own the bank!
        </p>
        <h2 className="mt-2 text-6xl font-bold text-right text-white leading-20 lg:mt-5 lg:text-7xl">
          +{formatNumberWithCommas(userCount)}
        </h2>
      </div>
    </BackgroundImage>
  );
};

export default OweTheBank;
