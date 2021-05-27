import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { MembershipWidget } from '@debtcollective/union-component';
import HeroHighlight from '@components/HeroHighlight';

import BlockContent from '@sanity/block-content-to-react';

interface Props {
  title?: unknown[];
  body?: string;
}

const DebtUnionCover: React.FC<Props> = ({ title, body }) => {
  const { desktop, medium, small } = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "heros/join-union.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      medium: file(relativePath: { eq: "heros/join-union.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      small: file(relativePath: { eq: "heros/join-union.jpg" }) {
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
        className="flex px-4 bg-center bg-no-repeat bg-cover min-h-screen-70 bg-black-100 lg:items-end md:px-12 lg:px-24"
      >
        <div className="absolute inset-0 opacity-50 bg-gray"></div>
        <div className="relative max-w-full mx-auto mt-8 w-8xl md:mt-0">
          <div className="max-w-2xl py-10 md:pt-16 lg:pb-24">
            <BlockContent
              blocks={title}
              renderContainerOnSingleChild
              className="text-5xl font-bold leading-none text-white md:text-6xl"
              serializers={{
                marks: {
                  em: HeroHighlight
                }
              }}
            />
            <p className="mt-4 mb-8 text-xl font-semibold leading-tight text-white md:text-2xl">
              {body}
            </p>
            <MembershipWidget className="ml-0 mr-auto md:mr-0" />
          </div>
        </div>
      </BackgroundImage>
    </>
  );
};

export default DebtUnionCover;
