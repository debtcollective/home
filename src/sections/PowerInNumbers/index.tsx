import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery, graphql } from 'gatsby';

const PowerInNumbers = () => {
  const { desktop, medium, small } = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "power-in-numbers.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      medium: file(relativePath: { eq: "power-in-numbers.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      small: file(relativePath: { eq: "power-in-numbers.png" }) {
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
      className="min-h-fish-section px-x-screen-spacing py-y-screen-spacing lg:p-desktop-screen-spacing flex items-center"
    >
      <div className="max-w-8xl mx-auto">
        <h2 className="text-white text-left text-4xl font-bold mb-4 mt-5 leading-9 lg:leading-20 lg:text-6xl w-full lg:w-1/2">
          Power in Numbers
        </h2>
        <p className="text-white text-left text-xl leading-7 font-semibold mb-5 lg:text-2xl w-full lg:w-5/12">
          We believe there is power in numbers. As the old saying goes, if you
          owe the bank $100,000, the bank owns you. But if you owe the bank $100
          million, you own the bank.
        </p>
      </div>
    </BackgroundImage>
  );
};

export default PowerInNumbers;
