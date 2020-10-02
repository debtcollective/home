import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery, graphql } from 'gatsby';

const OweTheBank = () => {
  const { desktop, medium, small, allAbout } = useStaticQuery(graphql`
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
      allAbout {
        nodes {
          about {
            stats {
              user_count
            }
          }
        }
      }
    }
  `);

  // Fetch user count from Discourse
  const {
    about: {
      stats: { user_count: userCount }
    }
  } = allAbout.nodes[0];

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
      className="min-h-fish-section px-x-screen-spacing py-y-screen-spacing lg:p-desktop-screen-spacing"
    >
      <div className="order-2 w-full max-w-8xl mx-auto">
        <p className=" text-white text-xl font-semibold text-right lg:text-2xl">
          With {userCount} members,
        </p>
        <p className=" text-white text-xl font-semibold text-right lg:text-2xl">
          together, we own the bank!
        </p>
        <h2 className=" text-white font-bold leading-20 text-right text-6xl mt-2 lg:mt-5 lg:text-7xl">
          {userCount}
        </h2>
      </div>
    </BackgroundImage>
  );
};

export default OweTheBank;
