import React, { ReactNode } from 'react';
import AboutUsMenu from '@sections/AboutUsMenu';

interface Props {
  children?: ReactNode;
  headingText?: string;
}

const AboutUsLayout: React.FC<Props> = ({ children, headingText }) => (
  <section className="px-x-screen-spacing py-y-screen-spacing lg:px-desktop-screen-spacing lg:pb-desktop-screen-spacing bg-gradient-to-t lg:bg-gradient-to-b from-blue-200 via-white-200 to-white-300">
    <div className="mx-auto max-w-8xl">
      {headingText && (
        <h2 className="mb-12 text-xl font-normal md:text-3xl lg:text-4xl lg:w-3/4 text-black-100">
          {headingText}
        </h2>
      )}
      <div className="flex flex-col flex-wrap w-full lg:flex-row">
        <div className="lg:w-3/4">{children}</div>
        <div className="flex-grow flex-shrink-0 lg:w-1/4">
          <AboutUsMenu />
        </div>
      </div>
    </div>
  </section>
);

export default AboutUsLayout;
