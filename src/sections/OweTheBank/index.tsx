import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery, graphql } from 'gatsby';

const OweTheBank = () => {
  const data = useStaticQuery(graphql`
    query {
      coverImage: file(relativePath: { eq: "owe-the-bank.png" }) {
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
      <div className="order-2 w-full lg:w-1/4">
        <p className=" text-gray lg:text-white text-xl font-bold text-right mb-5 lg:text-2xl">
          With over 33K members, together, we own the bank!
        </p>
        <h2 className=" text-gray lg:text-white font-black leading-20 text-right text-6xl mb-4 mt-5 lg:text-7xl">
          33,021
        </h2>
      </div>
    );
  };

  return (
    <>
      <BackgroundImage
        fluid={coverImage}
        className="p-desktop-screen-spacing bg-left hidden lg:flex justify-end"
      >
        {renderContent()}
      </BackgroundImage>
      <section
        className="lg:hidden p-screen-spacing"
        style={{
          background:
            'linear-gradient(270deg, #95d5c7 0.70%, #c7e8e1 55%, #FCFBF7 80.89%)'
        }}
      >
        {renderContent()}
      </section>
    </>
  );
};

export default OweTheBank;
