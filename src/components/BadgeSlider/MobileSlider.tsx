import React from 'react';
import Badge from '@components/Badge';
import { IBadge } from '.';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import classnames from 'classnames';
interface Props {
  items: IBadge[];
}

const MobileSlider: React.FC<Props> = ({ items }) => {
  const totalItems = items.length;

  return (
    <CarouselProvider
      naturalSlideWidth={200}
      naturalSlideHeight={250}
      totalSlides={totalItems}
      className="relative lg:hidden"
    >
      <Slider>
        {items.map((badge, index) => (
          <Slide key={index} index={index} innerClassName="px-12">
            <Badge
              key={badge.title}
              imageSrc={badge.src}
              imageAlt={badge.alt}
              title={badge.title}
              backgroundColor={badge.backgroundColor}
              text={badge.text}
            />
          </Slide>
        ))}
      </Slider>
      <ButtonBack
        className={classnames('absolute left-0 top-0 h-full', {
          hidden: items.length === 0 || items.length === 1
        })}
      >
        <span
          className="material-icons text-gray"
          style={{
            fontSize: '3.5rem'
          }}
        >
          navigate_before
        </span>
      </ButtonBack>
      <ButtonNext
        className={classnames('absolute right-0 top-0 h-full', {
          hidden: items.length === 0 || items.length === 1
        })}
      >
        <span
          className="material-icons text-gray"
          style={{
            fontSize: '3.5rem'
          }}
        >
          navigate_next
        </span>
      </ButtonNext>
    </CarouselProvider>
  );
};

export default MobileSlider;
