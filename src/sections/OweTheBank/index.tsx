import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery, graphql } from 'gatsby';

const OweTheBank = () => {
  const { desktop, medium, small } = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "owe-the-bank.png" }) {
        childImageSharp {
          fluid(maxWidth: 4160, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      medium: file(relativePath: { eq: "owe-the-bank.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
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
      className="p-desktop-screen-spacing"
    >
      <div className="order-2 w-full max-w-8xl mx-auto">
        <p className=" text-white text-xl font-semibold text-right lg:text-2xl">
          With over 33K members,
        </p>
        <p className=" text-white text-xl font-semibold text-right lg:text-2xl">
          together, we own the bank!
        </p>
        <h2 className=" text-white font-bold leading-20 text-right text-6xl mt-2 lg:mt-5 lg:text-7xl">
          33,021
        </h2>
      </div>
    </BackgroundImage>
  );
};

export default OweTheBank;
