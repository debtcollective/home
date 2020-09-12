import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const YouAreNotALoan: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      coverImage: file(relativePath: { eq: "you-are-not-a-loan.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      coverImageMobile: file(
        relativePath: { eq: "you-are-not-a-loan-mobile.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const coverImage = data?.coverImage?.childImageSharp?.fluid;
  const coverImageMobile = data?.coverImageMobile?.childImageSharp?.fluid;

  const renderContent = () => {
    return (
      <div className="max-w-8xl mx-auto flex flex-col items-end mt-64 mb-24 lg:mb-56">
        <h1 className="w-full text-5xl leading-13 lg:text-right font-black text-white mb-6 lg:leading-15 lg:text-6xl lg:w-7/12">
          You are not <br className="lg:hidden" />{' '}
          <span className="text-yellow">A Loan!</span>
        </h1>
        <p className="font-bold text-2xl text-white leading-6 mb-12 lg:w-1/2 lg:text-right">
          Join a growing community of debtors organizing to cancel debts and
          build financial and political power
        </p>
        {/* @TODO: Include widget */}
      </div>
    );
  };

  return (
    <>
      <BackgroundImage
        fluid={coverImage}
        className="min-h-section-size bg-no-repeat bg-cover bg-center p-desktop-screen-spacing hidden lg:block"
      >
        {renderContent()}
      </BackgroundImage>
      <BackgroundImage
        fluid={coverImageMobile}
        className="min-h-section-size bg-no-repeat bg-cover bg-center px-x-screen-spacing py-y-screen-spacing lg:hidden"
      >
        {renderContent()}
      </BackgroundImage>
    </>
  );
};

export default YouAreNotALoan;
