import React, { useState, useEffect } from 'react';
import Badge from 'components/Badge';
import rightArrowIcon from 'static/icons/right-arrow.svg';
import leftArrowIcon from 'static/icons/left-arrow.svg';
import { IBadge } from '.';
import ArrowButton from './ArrowButton';
import { chunkArray } from 'utils/array';

const ITEMS_PER_PAGE = 3;

interface Props {
  items: IBadge[];
}

const DesktopSlider: React.FC<Props> = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleItems, setVisibleItems] = useState<IBadge[]>([]);
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  useEffect(() => {
    setVisibleItems(chunkArray(items, ITEMS_PER_PAGE)[currentPage - 1]);
    items.length === 0 && setCurrentPage(0);
  }, [items, currentPage]);

  return (
    <div className="hidden lg:flex justify-between items-stretch w-full">
      <ArrowButton
        id="previous-item-mobile"
        alt="Previous item"
        src={leftArrowIcon}
        onClick={() => setCurrentPage((page) => page - 1)}
        hidden={currentPage === 1 || items.length === 0}
        className="flex-shrink-0"
      />
      {visibleItems?.map((item) => (
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
      <ArrowButton
        id="next-item-mobile"
        alt="Next item"
        src={rightArrowIcon}
        onClick={() => setCurrentPage((page) => page + 1)}
        hidden={currentPage === totalPages || items.length === 0}
        className="flex-shrink-0"
      />
    </div>
  );
};

export default DesktopSlider;
