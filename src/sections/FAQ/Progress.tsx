import Link from '@components/Link';
import React from 'react';
import YouTube from 'react-youtube';

const Progress = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="mx-auto lg:grid lg:grid-cols-2 lg:gap-16 max-w-8xl">
        <YouTube
          videoId="lDX6a9pCOw8"
          className="w-full h-48 mb-10 lg:mb-0 lg:h-full"
        />
        <div>
          <h3 className="text-3xl font-semibold leading-9 lg:leading-13 lg:text-5xl">
            Our movement has <span className="text-primary">abolished</span>{' '}
            more than
          </h3>
          <h2 className="text-6xl font-semibold leading-20 text-primary font-more-gothic lg:text-9xl lg:leading-40">
            $2.8 Billion
          </h2>
          <p className="text-xl font-semibold leading-7 lg:text-2xl">
            in student debt, medical debt, payday loans, probation debt and
            credit card debt. Our student debt campaign put full student debt
            cancellation and free public college on the political map.
          </p>
        </div>
      </div>
      <Link className="block mx-auto mt-10 lg:mt-20" variant="button" href="/">
        Join the union
      </Link>
    </div>
  );
};

export default Progress;
