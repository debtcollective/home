import Link from '@components/Link';
import React from 'react';
import YouTube from 'react-youtube';

const Resources = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 max-w-8xl mx-auto">
        <YouTube
          videoId="ojgn6l2APfQ"
          className="w-full mb-10 lg:mb-0 h-48 lg:h-full"
        />
        <div>
          <h3 className="text-xl leading-7 font-bold lg:leading-8 lg:text-3xl">
            Membership gets you access to{' '}
            <span className="text-primary">
              proven trainings that help you to fight and cancel debt
            </span>{' '}
            for yourself and others.
          </h3>
          <p className="text-xl leading-7 font-bold mt-8">
            This includes our community forum, our debt dispute tools, debt
            clinics, a series of educational and training tools, involvement in
            local chapters, and a host of ways to become an active and engaged
            member of the union.
          </p>
          <p className="text-xl leading-7 font-bold mt-8">
            Please see our{' '}
            <Link
              className="text-primary text-xl leading-7 font-bold mt-8"
              href="#membership-benefits"
              variant="regular"
            >
              membership benefits
            </Link>{' '}
            section for more details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resources;
