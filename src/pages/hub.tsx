import Layout, { COMMUNITY_URL } from '@components/Layout';
import useMembership from '@hooks/useMembership';
import { graphql, navigate, useStaticQuery } from 'gatsby';
import React, { useEffect } from 'react';

const LINKS = [
  {
    linkText: 'New Member Things to Do!',
    href: 'http://bit.ly/new-member-to-do',
    text:
      'Here is a list of first steps to take to begin getting involved with the debtors union'
  },
  {
    linkText: 'Debt Collective DNA',
    href: 'http://bit.ly/debt-collective-dna',
    text:
      'Please read through our principles and basic analysis. This document will introduce the basic outline of the beliefs, values and priorities of the organization'
  },
  {
    linkText: 'Debt Collective Community Forum',
    href: COMMUNITY_URL,
    text:
      'Log into the community forum - introduce yourself, read other debtors stories, find information and resources about various types of debt and get organized with fellow debtors!'
  },
  {
    linkText: 'Dispute your debt',
    href: 'https://tools.debtcollective.org/',
    text:
      'Fight back against your creditor and dispute your debt! We have developed a suite of experimental dispute tools that attempt to maximize your rights as a debtor and facilitates you through the process of disputing various debts you might owe'
  }
];

const MemberHub = () => {
  const [membership, isFetching] = useMembership();
  const data = useStaticQuery(graphql`
    query {
      coverImage: file(relativePath: { eq: "covers/memberhub-cover.jpg" }) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const coverImage = data?.coverImage?.childImageSharp?.fluid || {};

  useEffect(() => {
    if (!isFetching && membership === null) {
      console.warn('redirect home, no membership found');
      navigate('/');
    }
  }, [membership, isFetching]);

  return (
    <Layout hideNewsletter>
      {!membership?.confirmed && (
        <div
          className="bg-yellow border-t border-b border-blue-500 text-blue-700 px-4 py-3"
          role="alert"
        >
          <p className="font-bold">Please verify your account</p>
          <p className="text-sm">
            We have sent an email to{' '}
            <strong className="text-primary">{membership?.email}</strong>,
            please verify your inbox to continue the process and become part of
            our Union!
          </p>
        </div>
      )}
      <section
        className="py-y-screen-spacing flex flex-col justify-center lg:px-desktop-screen-spacing"
        style={{
          opacity: isFetching ? 0.1 : 1,
          pointerEvents: isFetching ? 'none' : 'all'
        }}
      >
        <div className="w-full max-w-8xl mx-auto border-1 border-gray-500 rounded-sm px-x-screen-spacing md:px-2 p-2">
          <img
            src={coverImage.src}
            srcSet={coverImage.srcSet}
            className="w-full hidden md:block"
            alt="Welcome to the Debt Collective!"
          />
          <h1 className="text-4xl lg:text-5xl font-semibold text-center mt-8 mb-3">
            Welcome to the Debt Collective!
          </h1>
          <hr className="border-primary mx-auto border-b-2 mb-12 w-3/4 md:w-1/2" />
          <p className="font-semibold text-lg md:px-24">
            We are excited to welcome you to the debtors union - a new and
            exciting type of organization where debtors come together and fight
            for debt cancellation and so much more. You are not a loan! Our
            website is in development, and this page will soon be transformed
            into a more extensive and user-friendly &ldquo;member hub&ldquo;
            where you can access all of your personal information and navigate
            through the Debt Collective platform in a personalized way.
          </p>
          <p className="font-semibold text-lg md:px-24 mt-4 mb-12">
            For now, we welcome you to begin your membership journey by
            exploring the pages and documents below!
          </p>
          <ul className="md:w-1/2 mx-auto">
            {LINKS.map((link, index) => {
              return (
                <li key={link.linkText} className={'text-base mb-6'}>
                  <span className="font-semibold">({index + 1})</span>{' '}
                  <a
                    href={link.href}
                    className="text-blue-100 font-semibold"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.linkText}
                  </a>
                  <p>{link.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default MemberHub;
