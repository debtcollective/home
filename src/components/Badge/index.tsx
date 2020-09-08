import React from 'react';
import classnames from 'classnames';
import { Colors } from '@constants/colors';

interface Props {
  backgroundColor: Colors;
  className?: string;
  imageAlt: string;
  imageSrc: string;
  text?: string;
  title: string;
}

const Badge: React.FC<Props> = ({
  backgroundColor,
  className,
  imageAlt,
  imageSrc,
  text,
  title
}) => {
  return (
    <div className={classnames('max-w-xs select-none', className)}>
      <img
        src={imageSrc}
        className={classnames(
          'rounded-full object-scale-down m-auto w-40 h-40 lg:w-64 lg:h-64',
          `bg-${backgroundColor}`
        )}
        alt={imageAlt}
      />
      <h6 className="text-3xl leading-8 font-bold text-center text-black uppercase font-more-gothic mt-4 mb-2">
        {title}
      </h6>
      {text && (
        <p className="text-lg leading-5 font-semibold text-center text-gray">
          {text}
        </p>
      )}
    </div>
  );
};

export default Badge;
