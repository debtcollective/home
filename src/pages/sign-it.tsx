import React from 'react';
import Layout from '@components/Layout';
import Link from '@components/Link';
import logoSmall from '@static/logo-small.png';

const SignItPage: React.FC = () => {
  return (
    <Layout>
      <div className="px-4 py-32 min-h-screen-70 md:px-12 lg:px-24">
        <img
          src={logoSmall}
          alt="Sign it Already"
          className="mx-auto mb-12"
        />
        <h1 className="w-full mb-12 text-5xl font-bold text-center capitalize md:text-7xl">
          SIGN IT ALREADY!
        </h1>
        <p className="w-full my-0 text-3xl font-normal text-center md:text-5xl text-gray">
          Student debt has become an unsustainable burden for millions of households, for our higher education system, and for our society writ large.
        </p>
        <Link
          variant="button"
          href="biden/DebtCollective-BidenCancelStudentDebtMemo.pdf"
        >
          Download the PDF!
        </Link>
      </div>
    </Layout>
  );
};

export default SignItPage;
