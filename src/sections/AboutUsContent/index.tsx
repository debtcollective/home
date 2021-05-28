import React from 'react';
import AboutUsItem from './AboutUsItem';
import AboutUsLayout from '@sections/AboutUsLayout';
import { ISanityAboutUsItem } from 'src/types/about-us';

interface Props {
  items?: ISanityAboutUsItem[];
}

const AboutUsContent: React.FC<Props> = ({ items }) => (
  <AboutUsLayout>
    <div className="relative md:-top-10">
      {items?.map((item) => (
        <AboutUsItem key={item.title} data={item} />
      ))}
    </div>
  </AboutUsLayout>
);

export default AboutUsContent;
