import React from 'react';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const Collective = () => {
  const data = useStaticQuery(graphql`
    query {
      floridaStrikers: file(relativePath: { eq: "florida-strikers.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <div className="flex flex-col justify-center">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 max-w-8xl mx-auto">
        <Image
          fluid={data?.floridaStrikers?.childImageSharp?.fluid}
          className="mb-10 lg:mb-0"
        />
        <div>
          <h3 className="text-xl leading-7 font-semibold lg:leading-8 lg:text-4xl">
            Your membership allow us to{' '}
            <span className="text-primary">build power</span> to cancel various
            forms of debt.
          </h3>
          <p className="text-xl leading-7 font-semibold mt-8">
            By joining our union, you are supporting the Debt Resistance
            Movement and helping us to push for policies{' '}
            <span className="text-primary">
              so people won’t have to go into debt in the first place.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Collective;
