import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { DonationWidget } from '@components/Donation';

const DonateCover: React.FC = () => {
  const { desktop, medium, small } = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "heros/donate-horizontal.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4160, quality: 100) {
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
        className="min-h-section-size bg-no-repeat bg-cover bg-center -mt-20 pt-20 p-4 pb-8 md:px-12 lg:p-24"
      >
        <div className="mt-0 md:mt-16 max-w-2xl ml-auto">
          <h1 className="font-bold text-5xl text-white md:text-6xl md:text-right leading-none mt-4">
            Help us <br className="md:hidden" />{' '}
            <span className="text-yellow">build a Debtors&apos; movement!</span>
          </h1>
          <p className="font-semibold text-xl text-white md:text-right md:text-2xl leading-tight mt-4 mb-8">
            Your contribution helps grow the union of debtors to fight back
            against creditors and create the just economic system we deserve
          </p>
          <DonationWidget className="mr-auto ml-0 md:ml-auto md:mr-0" />
        </div>
      </BackgroundImage>
    </>
  );
};

export default DonateCover;
