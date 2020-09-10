import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const YouAreNotALoan: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      coverImage: file(relativePath: { eq: "you-are-not-a-loan.png" }) {
        childImageSharp {
          fluid(quality: 100, fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const coverImage = data?.coverImage?.childImageSharp?.fluid;

  return (
    <BackgroundImage
      fluid={coverImage}
      className="min-h-section-size bg-no-repeat bg-cover bg-center p-screen-spacing lg:p-desktop-screen-spacing"
    >
      <div className="max-w-8xl mx-auto flex flex-col items-end">
        <h1 className="text-5xl leading-13 lg:text-right font-black text-white mb-6 lg:leading-15 lg:text-6xl lg:w-7/12">
          You are not <span className="text-yellow">A Loan!</span>
        </h1>
        <p className="font-bold text-2xl text-white leading-6 mb-12 lg:w-1/2 lg:text-right">
          Join a growing community of debtors organizing to cancel debts and
          build financial and political power
        </p>
        {/* @TODO: Include widget */}
      </div>
    </BackgroundImage>
  );
};

export default YouAreNotALoan;
