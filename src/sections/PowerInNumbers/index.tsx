import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery, graphql } from 'gatsby';

const PowerInNumbers = () => {
  const data = useStaticQuery(graphql`
    query {
      coverImage: file(relativePath: { eq: "power-in-numbers.png" }) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const coverImage = data?.coverImage?.childImageSharp?.fluid || {};

  const renderContent = () => {
    return (
      <>
        <h2 className="text-white text-left text-4xl font-black mb-4 mt-5 leading-9 lg:leading-20 lg:text-6xl w-full lg:w-1/2">
          Power in Numbers
        </h2>
        <p className="text-white text-left text-xl leading-7 font-bold mb-5 lg:text-2xl w-full lg:w-1/2">
          We believe there is power in numbers. As the old saying goes, if you
          owe the bank $100,000, the bank owns you.
        </p>
      </>
    );
  };

  return (
    <>
      <BackgroundImage
        fluid={coverImage}
        className="p-desktop-screen-spacing bg-left hidden lg:block"
      >
        {renderContent()}
      </BackgroundImage>
      <section className="lg:hidden bg-gray p-screen-spacing">
        {renderContent()}
      </section>
    </>
  );
};

export default PowerInNumbers;
