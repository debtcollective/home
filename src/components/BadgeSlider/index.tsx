import React from 'react';
import { Colors } from 'constants/colors';
import DesktopSlider from './DesktopSlider';
import MobileSlider from './MobileSlider';

export interface IBadge {
  alt: string;
  backgroundColor: Colors;
  src: string;
  text: string;
  title: string;
}

interface Props {
  items: IBadge[];
}

const BadgeSlider: React.FC<Props> = ({ items }) => {
  return (
    <>
      <DesktopSlider items={items} />
      <MobileSlider items={items} />
    </>
  );
};

export default BadgeSlider;
