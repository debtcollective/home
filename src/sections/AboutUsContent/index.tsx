import React from 'react';
import AboutUsMenu from '@sections/AboutUsMenu';
import AboutUsItem from './AboutUsItem';
import { ISanityAboutUsItem } from 'src/pages/about-us';

interface Props {
  items?: ISanityAboutUsItem[];
}

const AboutUsContent: React.FC<Props> = ({ items }) => (
  <section className="px-x-screen-spacing py-y-screen-spacing lg:px-desktop-screen-spacing lg:pb-desktop-screen-spacing bg-gradient-to-t lg:bg-gradient-to-b from-blue-200 via-white-200 to-white-300">
    <div className="flex flex-col w-full mx-auto lg:flex-row max-w-8xl">
      <div className="relative flex-grow md:-top-10">
        {items?.map((item) => (
          <AboutUsItem key={item.title} data={item} />
        ))}
      </div>
      <div className="flex-grow flex-shrink-0">
        <AboutUsMenu />
      </div>
    </div>
  </section>
);

export default AboutUsContent;
