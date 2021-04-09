import React from 'react';
import AboutUsItem from './AboutUsItem';
import { SanityAboutUsItem } from 'src/pages/about-us';
import AboutUsLayout from '@sections/AboutUsLayout';

interface Props {
  items?: SanityAboutUsItem[];
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
