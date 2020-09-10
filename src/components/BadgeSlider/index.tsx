import React, { useState } from 'react';
import chunk from 'lodash.chunk';
import Badge from '@components/Badge';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot
} from 'pure-react-carousel';
import classnames from 'classnames';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Colors } from '@constants/colors';

export interface IBadge {
  alt: string;
  backgroundColor: Colors;
  src: string;
  text: string;
  title: string;
}

const ITEMS_PER_PAGE = 3;

interface Props {
  items: IBadge[];
}

const BadgeSlider: React.FC<Props> = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const slides = chunk(items, ITEMS_PER_PAGE);
  const hideControls = items.length === 0 || items.length === ITEMS_PER_PAGE;

  return (
    <CarouselProvider
      naturalSlideWidth={500}
      naturalSlideHeight={200}
      isIntrinsicHeight
      totalSlides={totalPages}
      currentSlide={currentSlide}
      className="relative max-w-8xl mx-auto"
    >
      <Slider>
        {slides.map((slide, index) => (
          <Slide
            key={index}
            index={index}
            innerClassName="grid grid-cols-1 gap-12 justify-items-center lg:px-20 lg:grid-cols-3"
          >
            {slide.map((badge: IBadge) => (
              <Badge
                key={badge.title}
                imageSrc={badge.src}
                imageAlt={badge.alt}
                title={badge.title}
                backgroundColor={badge.backgroundColor}
                text={badge.text}
                className="mx-auto"
              />
            ))}
          </Slide>
        ))}
      </Slider>
      {!hideControls && (
        <>
          <ButtonBack
            className="hidden lg:block absolute left-0 top-0 h-full"
            onClick={() => setCurrentSlide((slide) => slide - 1)}
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
            className="hidden lg:block absolute right-0 top-0 h-full"
            onClick={() => setCurrentSlide((slide) => slide + 1)}
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
        </>
      )}
      {!hideControls && (
        <div className="flex justify-center mt-12">
          {slides.map((_, index) => (
            <Dot
              slide={index}
              key={index}
              className={classnames('bg-gray-500 rounded-full w-6 h-6', {
                'mr-3': !(index + 1 === slides.length),
                'bg-purple-100': index === currentSlide
              })}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      )}
    </CarouselProvider>
  );
};

export default BadgeSlider;
