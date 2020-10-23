import React from 'react';
import { Link } from 'gatsby';
import Layout from '@components/Layout';
import logoSmall from '@static/logo-small.png';

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <div className="px-4 py-32 min-h-screen-70 md:px-12 lg:px-24">
        <img
          src={logoSmall}
          alt="Content not found"
          className="mx-auto mb-12"
        />
        <h1 className="w-full mb-12 text-5xl font-bold text-center capitalize md:text-7xl">
          <span className="text-primary">404</span> content not found
        </h1>
        <p className="w-full my-0 text-3xl font-normal text-center md:text-5xl text-gray">
          This page does not exists. Please go to our{' '}
          <Link to="/" className="text-primary">
            home page
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
