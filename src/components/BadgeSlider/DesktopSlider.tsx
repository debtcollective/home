import React from 'react';
import chunk from 'lodash.chunk';
import Badge from '@components/Badge';
import { IBadge } from '.';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel';
import classnames from 'classnames';

const ITEMS_PER_PAGE = 3;

interface Props {
  items: IBadge[];
}

const DesktopSlider: React.FC<Props> = ({ items }) => {
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const slides = chunk(items, ITEMS_PER_PAGE);

  return (
    <CarouselProvider
      naturalSlideWidth={500}
      naturalSlideHeight={200}
      isIntrinsicHeight
      totalSlides={totalPages}
      className="relative hidden lg:block max-w-8xl mx-auto"
    >
      <Slider>
        {slides.map((slide, index) => (
          <Slide
            key={index}
            index={index}
            innerClassName="grid grid-cols-3 gap-12 px-20 justify-items-center"
          >
            {slide.map((badge: IBadge) => (
              <Badge
                key={badge.title}
                imageSrc={badge.src}
                imageAlt={badge.alt}
                title={badge.title}
                backgroundColor={badge.backgroundColor}
                text={badge.text}
              />
            ))}
          </Slide>
        ))}
      </Slider>
      <ButtonBack
        className={classnames('absolute left-0 top-0 h-full', {
          hidden: items.length === 0 || items.length === ITEMS_PER_PAGE
        })}
      >
        <span
          className="material-icons text-gray"
          style={{
            fontSize: '5rem'
          }}
        >
          navigate_before
        </span>
      </ButtonBack>
      <ButtonNext
        className={classnames('absolute right-0 top-0 h-full', {
          hidden: items.length === 0 || items.length === ITEMS_PER_PAGE
        })}
      >
        <span
          className="material-icons text-gray"
          style={{
            fontSize: '5rem'
          }}
        >
          navigate_next
        </span>
      </ButtonNext>
    </CarouselProvider>
  );
};

export default DesktopSlider;
