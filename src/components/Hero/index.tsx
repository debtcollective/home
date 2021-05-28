import React, { ReactNode } from 'react';
import classnames from 'clsx';
import Button from '@components/Button';
import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery, graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import HeroHighlight from '@components/HeroHighlight';

interface Props {
  className?: string;
  primaryAction: () => void;
  primaryActionLabel: string;
  secondaryAction: () => void;
  secondaryActionLabel: string;
  text: string | ReactNode;
  title: unknown[];
}

const Hero: React.FC<Props> = ({
  className,
  primaryAction,
  primaryActionLabel,
  secondaryAction,
  secondaryActionLabel,
  text,
  title
}) => {
  const { desktop, medium, small } = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "heros/main-horizontal.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      medium: file(relativePath: { eq: "heros/main-vertical.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      small: file(relativePath: { eq: "heros/main-vertical.jpg" }) {
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
      media: `(min-width: 1201px)`
    }
  ];

  return (
    <BackgroundImage
      fluid={backgroundArtDirectionStack}
      className={classnames(
        'min-h-screen-70 bg-black-100 bg-no-repeat bg-cover bg-center flex items-center px-4 md:px-12 lg:px-24',
        className
      )}
    >
      <div className="absolute inset-0 opacity-50 bg-gray"></div>
      <div className="relative max-w-full mx-auto w-8xl">
        <div className="max-w-3xl py-10 mt-0 mr-auto">
          <div className="flex flex-col">
            <BlockContent
              blocks={title}
              renderContainerOnSingleChild
              className="mt-4 text-5xl font-bold leading-none text-white md:text-6xl md:mt-0"
              serializers={{
                marks: {
                  em: HeroHighlight
                }
              }}
            />
            <p className="mt-4 text-xl font-semibold leading-tight text-white md:text-2xl">
              {text}
            </p>
          </div>
          <div className="flex flex-col mt-12 md:flex-row md:max-w-xl">
            <Button className="w-full md:w-1/2" onClick={primaryAction}>
              {primaryActionLabel}
            </Button>
            <Button
              className="w-full mt-4 md:w-1/2 md:mt-0 md:ml-4"
              onClick={secondaryAction}
              variant="secondary"
            >
              {secondaryActionLabel}
            </Button>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default Hero;
