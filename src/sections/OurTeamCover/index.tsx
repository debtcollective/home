import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import BlockContent from '@sanity/block-content-to-react';
import HeroHighlight from '@components/HeroHighlight';

interface Props {
  title: unknown[];
}

const OurTeamCover: React.FC<Props> = ({ title }) => {
  const { desktop, medium, small } = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "covers/our-team-cover.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      medium: file(relativePath: { eq: "covers/our-team-cover.png" }) {
        childImageSharp {
          fluid(maxWidth: 1400, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      small: file(relativePath: { eq: "covers/our-team-cover.png" }) {
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
        className="flex items-center px-4 bg-center bg-no-repeat bg-cover min-h-screen-45 md:px-12 lg:px-24"
      >
        <div className="absolute inset-0 opacity-50 bg-gray"></div>
        <div className="relative w-full max-w-full mx-auto lg:w-8xl">
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
        </div>
      </BackgroundImage>
    </>
  );
};

export default OurTeamCover;
