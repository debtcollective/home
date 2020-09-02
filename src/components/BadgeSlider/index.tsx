import React from 'react';
import Badge from 'components/Badge';
import { Colors } from 'constants/colors';

interface IBadge {
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
    <div className="flex justify-evenly items-stretch w-full flex-wrap">
      {items.map((item) => (
        <Badge
          key={item.title}
          imageSrc={item.src}
          imageAlt={item.alt}
          title={item.title}
          backgroundColor={item.backgroundColor}
          text={item.text}
          className="mb-12 lg:mb-0"
        />
      ))}
    </div>
  );
};

export default BadgeSlider;
