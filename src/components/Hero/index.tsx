import React, { ReactNode } from 'react';
import classnames from 'classnames';
import Button from '@components/Button';
import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery, graphql } from 'gatsby';

interface Props {
  className?: string;
  primaryAction: () => void;
  primaryActionLabel: string;
  secondaryAction: () => void;
  secondaryActionLabel: string;
  text: string | ReactNode;
  title: string | ReactNode;
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
      desktop: file(relativePath: { eq: "heros/main.png" }) {
        childImageSharp {
          fluid(maxWidth: 4160, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      medium: file(relativePath: { eq: "heros/main.png" }) {
        childImageSharp {
          fluid(maxWidth: 1400, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      small: file(relativePath: { eq: "heros/main.png" }) {
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
    <BackgroundImage
      fluid={backgroundArtDirectionStack}
      className={classnames(
        'min-h-section-size bg-no-repeat bg-cover bg-center -mt-20 pt-20 p-4 pb-8 md:px-12 lg:p-24',
        className
      )}
    >
      <div className="mt-0 md:mt-16 max-w-3xl mr-auto">
        <div className="flex flex-col">
          <h1 className="font-bold text-5xl text-white md:text-6xl leading-none mt-4 md:mt-0">
            {title}
          </h1>
          <p className="font-semibold text-xl text-white md:text-2xl leading-tight mt-4">
            {text}
          </p>
        </div>
        <div className="flex flex-col md:flex-row mt-12 md:max-w-xl">
          <Button className="w-full md:w-1/2" onClick={primaryAction}>
            {primaryActionLabel}
          </Button>
          <Button
            className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-4"
            onClick={secondaryAction}
            variant="secondary"
          >
            {secondaryActionLabel}
          </Button>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default Hero;
