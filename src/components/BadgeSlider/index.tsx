import React from 'react';
import chunk from 'lodash.chunk';
import { CarouselProvider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Colors } from '@constants/colors';
import Slides from './Slides';

export interface IBadge {
  alt: string;
  backgroundColor: Colors;
  src: string;
  text: string;
  title: string;
  href?: string;
}

const ITEMS_PER_PAGE = 3;

interface Props {
  items: IBadge[];
}

const BadgeSlider: React.FC<Props> = ({ items }) => {
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const slides = chunk(items, ITEMS_PER_PAGE);
  const hideControls = items.length === 0 || items.length === ITEMS_PER_PAGE;

  return (
    <CarouselProvider
      naturalSlideWidth={500}
      naturalSlideHeight={200}
      isIntrinsicHeight
      totalSlides={totalPages}
      className="relative max-w-8xl mx-auto"
    >
      <Slides slides={slides} hideControls={hideControls} />
    </CarouselProvider>
  );
};

export default BadgeSlider;
