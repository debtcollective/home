import React from 'react';
import Layout from '@components/Layout';
import Link from '@components/Link';
import logo from '@static/dc-logo--horizontal.svg';
import Subscribe from '@components/BidenSubscribe';
import pdfDownload from '@downloads/debtcollective_flickofthepen.pdf';

const FlickOfThePenPage: React.FC = () => {
  return (
    <Layout>
      <div className="py-12 sm:py-8 px-8 sm:px-12 md:px-0 mx-auto max-w-2xl">
        <img
          src={logo}
          alt="Sign it Already"
          className="mx-auto mb-4 md:mb-12 block h-12 md:h-16"
        />
        <p className="hyphens-none font-bold lg:text-center text-lg lg:text-3xl uppercase font-black">
          Big news! President Biden can cancel all federal student loan debt with a simple executive order.
        </p>
        <div>
          <p>
            So, we wrote the entire executive order for him. All he has to do is sign this piece of paper.
          </p>
          <Link
            className="my-6 mx-auto block uppercase font-black text-3xl"
            variant="button"
            href={pdfDownload}
          >
            Read the Executive Order
          </Link>
          <p className="fhyphens-none mb-6">
            All Joe Biden has to do is sign <Link className="text-green-400 underline" href={pdfDownload}>this two-page document</Link>, and 100% of your federal student loans will be gone. It won’t cost taxpayers a penny, and it will transform the lives of 45 million people struggling with student loan debt. Really, it’s that simple!
          </p>
          <p className="hyphens-none mb-6">
            President Biden has a magic wand that can create millions of new jobs, narrow the racial wealth gap, and liberate 45 million people crushed by student debt. This wand is <b>authority legally granted</b><span className="font-black color-primary">*</span> by Congress. The President can cancel all federal student loans through executive order. It's not a magic trick; with the flick of his pen he can legally make all federal student loan debt disappear!
          </p>
          <p className="hyphens-none mb-6">
            We need to get this Executive Order to President Biden so he will sign it.
          </p>
          <p>
            <ul className="border-b-1 border-gray-500 mt-6 mb-3">
              <li className="pt-3 pb-3 border-solid border-t-1 border-gray-500">
                <Link className="underline text-green-400" href="https://twitter.com/intent/tweet?url=http%3A%2F%2Fbit.ly%2FstudentdebtEO&text=.@POTUS%20must%20cancel%20all%20student%20debt.%20Here%20@JoeBiden%2C%20@strikedebt%20wrote%20the%20Executive%20Order%20for%20you.%20Just%20sign%20it%21&hashtags=CancelStudentDebt">
                  Tweet at @JoeBiden!
                </Link>
              </li>
              <li className="pt-3 pb-3 border-solid border-t-1 border-gray-500">
                <Link className="underline text-green-400" href="https://actionnetwork.org/petitions/president-joe-biden-sign-this-executive-order-to-cancel-all-student-loan-debt/">
                  Email the Executive Order to President Biden for him to sign it!
                </Link>
              </li>
              <li className="pt-3 pb-3 border-dolid border-t-1 border-gray-500">
                <Link
                  className="text-green-400 underline font-normal!important"
                  href="https://actionnetwork.org/letters/ask-president-biden-to-sign-the-executive-order-to-cancel-all-student-loan-debt">
                  Email the Executive Order to your Representative to give to Biden so he can sign it!
                </Link>
              </li>
              <li className="pt-3 pb-3 border-solid border-t-1 border-gray-500">
                <Link className="underline text-green-400" href="https://tools.usps.com/find-location.htm">
                  Mail the executive order to President Biden with a pen so he can sign it.
                </Link><br/>Don’t forget two stamps!&nbsp;<Link className="underline text-green-400" href="https://tools.usps.com/find-location.htm">Find your nearest postal box here.</Link>
              </li>
            </ul>
            <div className="signupform">
              <Subscribe />
            </div>
            <p className="hyphens-none mb-6">
              We know that we can’t leave it up to Joe Biden to do the right thing on his own. That’s why we did Biden’s work for him and wrote an Executive Order to cancel student debt. Now we need to MAKE him sign it. Full student debt cancellation can’t wait.
            </p>

            <p className="hyphens-none mb-6">
              <span className="font-black color-primary text-xs">*</span> <Link className="text-green-400" href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3442234">
                Find out more about this legal authority
              </Link>.
            </p>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default FlickOfThePenPage;
