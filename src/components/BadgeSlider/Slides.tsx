import React, { useState, useContext, useEffect } from 'react';
import Badge from '@components/Badge';
import {
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
  CarouselContext
} from 'pure-react-carousel';
import classnames from 'classnames';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { IBadge } from '.';

interface Props {
  hideControls: boolean;
  slides: IBadge[][];
}

const Slides: React.FC<Props> = ({ slides, hideControls }) => {
  const carouselContext = useContext(CarouselContext);
  const [currentSlide, setCurrentSlide] = useState(
    carouselContext?.state?.currentSlide || 0
  );

  useEffect(() => {
    const onSlideChange = () => {
      setCurrentSlide(carouselContext.state.currentSlide);
    };

    carouselContext?.subscribe(onSlideChange);
    return () => carouselContext?.unsubscribe(onSlideChange);
  }, [carouselContext]);

  return (
    <>
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
          <ButtonBack className="hidden lg:block absolute left-0 top-0 h-full">
            <span
              className="material-icons text-gray"
              style={{
                fontSize: '5rem'
              }}
            >
              navigate_before
            </span>
          </ButtonBack>
          <ButtonNext className="hidden lg:block absolute right-0 top-0 h-full">
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
                'bg-primary': index === currentSlide
              })}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Slides;
