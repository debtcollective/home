import React from 'react';
import Layout from '@components/Layout';
import Link from '@components/Link';
import logoSmall from '@static/logo-small.png';
import Subscribe from '@components/BidenSubscribe';
import pdfDownload from '@downloads/debtcollective_flickofthepen.pdf';

interface Props {
  pdfDonwload: '@downloads/debtcollective_flickofthepen.pdf';
}

const FlickOfThePenPage: React.FC<Props> = () => {
  return (
    <Layout>
      <div className="py-12 sm:py-3 px-8 sm:px-12 mx-auto max-w-2xl lg:px-0">
        <img
          src={logoSmall}
          alt="Sign it Already"
          className="mx-auto mb-12 block h-12 md:h-24 hidden md:block"
        />
        <p className=" mb-6 hyphens-none font-bold lg:text-center text-lg lg:text-3xl">
          What if you had a magic wand that could liberate 45 million people,
          create millions of new jobs and narrow the racial wealth gap? If you
          could wave that magic wand, would you?
          <br className="hidden md:block" />
          <span className="inline md:hidden">&nbsp;</span>
          What kind of person wouldn’t?
        </p>
        <div>
          <p>
            Joe Biden has that power. He can cancel all federal student loans
            with just a “flick of the pen.” It is an abuse of power for him not
            to.
          </p>
          <p className="mt-6 hyphens-none">
            The Debt Collective has done Biden’s work for him by creating the
            document that would cancel all student debt. All he has to do is
            sign this piece of paper and 100% of your federal student loans are
            gone.
          </p>
          <Link
            className="my-6 mx-auto block max-w-xs uppercase font-black"
            variant="button"
            href="{pdfDownload}"
          >
            Download the PDF!
          </Link>
          <p className="font-semibold hyphens-none">
            It really is that simple. Let’s all mail it to him. Include a pen.
            Don’t forget to add two forever stamps to account for the pen.
          </p>
        </div>
        <div className="signupform">
          <Subscribe />
        </div>
      </div>
    </Layout>
  );
};

export default FlickOfThePenPage;
