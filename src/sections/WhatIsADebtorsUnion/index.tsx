import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import Link from '@components/Link';
import BackgroundImage from 'gatsby-background-image';

interface Props {
  title?: string;
  body?: string;
}

const WhatIsADebtorsUnion: React.FC<Props> = ({ title, body }) => {
  const data = useStaticQuery(graphql`
    query {
      coverImage: file(relativePath: { eq: "debtors-union-cover.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      debtorsUnionImage: file(relativePath: { eq: "debtors-union.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);

  const coverImage = data?.coverImage?.childImageSharp?.fluid;

  return (
    <BackgroundImage
      fluid={coverImage}
      className="flex flex-col justify-center bg-green-100 bg-center bg-no-repeat bg-cover px-x-screen-spacing py-y-screen-spacing lg:p-desktop-screen-spacing"
    >
      <div className="flex flex-col justify-between mx-auto mb-12 max-w-8xl lg:mb-24 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <h2 className="mb-8 text-5xl font-bold leading-none text-black-100 lg:mb-0">
            {title}
          </h2>
          <Image
            fluid={data?.debtorsUnionImage?.childImageSharp?.fluid}
            className="w-full mb-8 lg:hidden"
          />
          <p className="mt-4 text-xl font-semibold text-gray">{body}</p>
        </div>
        <Image
          fluid={data?.debtorsUnionImage?.childImageSharp?.fluid}
          className="hidden w-1/2 lg:block"
        />
      </div>
      <Link
        className="self-center w-full lg:w-auto"
        href="#faq"
        variant="button"
      >
        Frequently Asked Questions
      </Link>
    </BackgroundImage>
  );
};

export default WhatIsADebtorsUnion;
