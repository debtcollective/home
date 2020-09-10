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
  const data = useStaticQuery(graphql`
    query {
      coverImage: file(relativePath: { eq: "main-hero.png" }) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const coverImage = data?.coverImage?.childImageSharp?.fluid || {};

  return (
    <BackgroundImage
      fluid={coverImage}
      className={classnames(
        'min-h-section-size bg-no-repeat bg-cover bg-center flex flex-col justify-center p-screen-spacing lg:px-desktop-screen-spacing',
        className
      )}
    >
      <div className="max-w-8xl mx-auto">
        <h1 className="text-5xl leading-13 font-black text-white mb-6 lg:leading-15 lg:text-6xl lg:w-7/12">
          {title}
        </h1>
        <p className="font-bold text-2xl text-white leading-6 mb-12 lg:w-7/12">
          {text}
        </p>
        <div className="flex flex-col md:block">
          <Button
            className="w-full mb-6 md:w-1/3 lg:w-1/5 md:mr-6 lg:mb-0"
            onClick={primaryAction}
          >
            {primaryActionLabel}
          </Button>
          <Button
            className="w-full md:w-1/3 lg:w-1/5"
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
