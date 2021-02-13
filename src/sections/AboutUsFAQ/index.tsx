import React from 'react';
import AboutUsMenu from '@sections/AboutUsMenu';
import FAQ from './FAQ';

const AboutUsFAQ = () => {
  return (
    <section className="px-x-screen-spacing py-y-screen-spacing lg:px-desktop-screen-spacing lg:pb-desktop-screen-spacing bg-gradient-to-t lg:bg-gradient-to-b from-blue-200 via-white-200 to-white-300">
      <div className="flex mx-auto max-w-8xl">
        <div className="relative flex-wrap flex-grow md:-top-10">
          <FAQ />
          <FAQ />
          <FAQ />
          <FAQ />
          <FAQ />
        </div>
        <AboutUsMenu />
      </div>
    </section>
  );
};

export default AboutUsFAQ;
