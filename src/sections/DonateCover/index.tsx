import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const DonateCover: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      coverImage: file(relativePath: { eq: "donate-page-cover.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const coverImage = data?.coverImage?.childImageSharp?.fluid;

  return (
    <>
      <BackgroundImage
        fluid={coverImage}
        className="min-h-section-size bg-no-repeat bg-cover bg-center px-x-screen-spacing py-y-screen-spacing lg:p-desktop-screen-spacing"
      >
        <div className="max-w-8xl mx-auto flex flex-col items-start mt-64 mb-24 lg:mb-56">
          <h1 className="w-full text-5xl leading-13 font-bold text-white mb-6 lg:leading-15 lg:text-6xl lg:w-7/12">
            You are not <br className="lg:hidden" />{' '}
            <span className="text-yellow">A Loan!</span>
          </h1>
          <p className="font-semibold text-2xl text-white leading-6 mb-12 lg:w-1/2">
            {/* @TODO: Include cover copy */}
          </p>
          {/* @TODO: Include widget */}
        </div>
      </BackgroundImage>
    </>
  );
};

export default DonateCover;
