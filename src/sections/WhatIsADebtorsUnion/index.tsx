import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import Link from '@components/Link';
import BackgroundImage from 'gatsby-background-image';

const WhatIsADebtorsUnion: React.FC = () => {
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
      className="flex flex-col justify-center bg-no-repeat bg-cover bg-center px-x-screen-spacing py-y-screen-spacing lg:p-desktop-screen-spacing"
    >
      <div className="max-w-8xl mx-auto flex flex-col justify-between mb-12 lg:mb-24 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <h2 className="text-5xl leading-none mb-8 text-black-100 font-bold lg:mb-0">
            What is a Debtor’s Union?
          </h2>
          <Image
            fluid={data?.debtorsUnionImage?.childImageSharp?.fluid}
            className="w-full mb-8 lg:hidden"
          />
          <p className="text-gray font-semibold text-xl mt-4">
            In a workplace, workers come together to defend and fight for their
            interests against greedy bosses and owners. Similarly, debtors are
            coming together to form a union to defend our interests. We use our
            collective power to fight for better conditions in our financial
            lives and a more equitable society: the cancellation and
            renegotiation of debts, access to publicly-funded goods (education,
            healthcare, housing, etc), anti-racist economic policies, and much
            more.
          </p>
        </div>
        <Image
          fluid={data?.debtorsUnionImage?.childImageSharp?.fluid}
          className="w-1/2 hidden lg:block"
        />
      </div>
      <Link
        className="w-full self-center lg:w-auto"
        href="#faq"
        variant="button"
      >
        Frequently Asked Questions
      </Link>
    </BackgroundImage>
  );
};

export default WhatIsADebtorsUnion;
