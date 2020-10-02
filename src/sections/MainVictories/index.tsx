import React from 'react';
import YouTube from 'react-youtube';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const MainVictories: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      coverImage: file(relativePath: { eq: "main-victories-image.png" }) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  const coverImage = data?.coverImage?.childImageSharp?.fluid || {};

  return (
    <BackgroundImage
      fluid={coverImage}
      className="flex flex-col justify-center bg-no-repeat bg-cover bg-center px-x-screen-spacing py-y-screen-spacing lg:p-desktop-screen-spacing"
    >
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 max-w-8xl mx-auto">
        <YouTube
          videoId="lDX6a9pCOw8"
          className="w-full mb-10 lg:mb-0 h-48 lg:h-full"
        />
        <div>
          <h3 className="text-3xl leading-9 font-semibold lg:leading-13 lg:text-5xl">
            Our movement has <span className="text-primary">abolished</span>{' '}
            more than
          </h3>
          <h2 className="text-6xl leading-20 text-primary font-semibold font-more-gothic lg:text-9xl lg:leading-40">
            $1.8 Billion
          </h2>
          <p className="text-2xl leading-7 font-semibold">
            in student debt, medical debt, payday loans, probation debt and
            credit card debt. Our student debt campaign put full student debt
            cancellation and free public college on the political map.
          </p>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default MainVictories;
