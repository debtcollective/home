import React, { useState } from 'react';
import Badge from 'components/Badge';
import { Colors } from 'constants/colors';
import rightArrowIcon from 'static/icons/right-arrow.svg';
import leftArrowIcon from 'static/icons/left-arrow.svg';
import classnames from 'classnames';

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

interface ArrowIconProps {
  id: string;
  src: string;
  alt: string;
  onClick: () => void;
  hidden: boolean;
  className?: string;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({
  id,
  src,
  alt,
  onClick,
  hidden,
  className
}) => {
  return (
    <button
      id={id}
      onClick={() => !hidden && onClick()}
      className={classnames(className, {
        invisible: hidden
      })}
    >
      <img src={src} alt={alt} />
    </button>
  );
};

const DesktopSlider: React.FC<Props> = ({ items }) => {
  return (
    <div className="relative hidden lg:flex justify-evenly items-stretch w-full">
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

const MobileSlider: React.FC<Props> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = items.length;

  return (
    <div className="flex relative lg:hidden">
      <ArrowIcon
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
      <ArrowIcon
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

const BadgeSlider: React.FC<Props> = ({ items }) => {
  return (
    <>
      <DesktopSlider items={items} />
      <MobileSlider items={items} />
    </>
  );
};

export default BadgeSlider;
