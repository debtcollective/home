import React from 'react';
import YouTube from 'react-youtube';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import BlockContent from '@sanity/block-content-to-react';

interface Props {
  body?: string;
  title?: unknown;
  videoId?: string;
}

const Highlight: React.FC = (props) => (
  <span className="not-italic text-primary">{props.children}</span>
);

const DebtAmount: React.FC = (props) => (
  <>
    <br />
    <span className="text-6xl font-semibold leading-20 text-primary font-more-gothic lg:text-9xl lg:leading-40">
      {props.children}
    </span>
  </>
);

const MainVictories: React.FC<Props> = ({ body, title, videoId }) => {
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
      className="flex flex-col justify-center bg-center bg-no-repeat bg-cover px-x-screen-spacing py-y-screen-spacing lg:p-desktop-screen-spacing"
    >
      <div className="mx-auto lg:grid lg:grid-cols-2 lg:gap-16 max-w-8xl">
        <YouTube
          videoId={videoId}
          className="w-full h-48 mb-10 lg:mb-0 lg:h-full"
        />
        <div>
          <BlockContent
            blocks={title}
            renderContainerOnSingleChild
            className="text-3xl font-semibold leading-9 lg:leading-13 lg:text-5xl"
            serializers={{
              marks: {
                em: Highlight,
                strong: DebtAmount
              }
            }}
          />
          <p className="text-2xl font-semibold leading-7">{body}</p>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default MainVictories;
