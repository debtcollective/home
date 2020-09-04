import React, { useState } from 'react';
import Badge from 'components/Badge';
import rightArrowIcon from 'static/icons/right-arrow.svg';
import leftArrowIcon from 'static/icons/left-arrow.svg';
import ArrowButton from './ArrowButton';
import { IBadge } from '.';

interface Props {
  items: IBadge[];
}

const MobileSlider: React.FC<Props> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = items.length;

  return (
    <div className="flex relative lg:hidden">
      <ArrowButton
        id="previous-item-mobile"
        alt="Previous item"
        src={leftArrowIcon}
        onClick={() => setCurrentIndex((current) => current - 1)}
        hidden={currentIndex === 0}
        className="flex-shrink-0 mr-6"
      />
      <Badge
        imageSrc={items[currentIndex].src}
        imageAlt={items[currentIndex].alt}
        title={items[currentIndex].title}
        backgroundColor={items[currentIndex].backgroundColor}
        text={items[currentIndex].text}
        className="mb-12 lg:mb-0 m-auto"
      />
      <ArrowButton
        id="next-item-mobile"
        alt="Next item"
        src={rightArrowIcon}
        onClick={() => setCurrentIndex((current) => current + 1)}
        hidden={currentIndex + 1 === totalItems}
        className="flex-shrink-0 ml-6"
      />
    </div>
  );
};

export default MobileSlider;
