import React from 'react';
import classnames from 'classnames';
import { Colors } from 'constants/colors';

type TBadgeSize = 'lg' | 'sm';

interface Props {
  backgroundColor: Colors;
  className?: string;
  imageAlt: string;
  imageSrc: string;
  size: TBadgeSize;
  text?: string;
  title: string;
}

const Badge: React.FC<Props> = ({
  backgroundColor,
  className,
  imageAlt,
  imageSrc,
  size,
  text,
  title
}) => {
  return (
    <div
      className={classnames(className, {
        'max-w-xs': 'lg'
        // @TODO: Add max-width for sm size
      })}
    >
      <img
        src={imageSrc}
        className={classnames(
          'rounded-full object-scale-down m-auto',
          `bg-${backgroundColor}`,
          {
            'w-64': size === 'lg',
            'h-64': size === 'lg',
            'w-32': size === 'sm',
            'h-32': size === 'sm'
          }
        )}
        alt={imageAlt}
      />
      <h6 className="text-3xl font-bold text-center text-black uppercase font-more-gothic mt-4 mb-2">
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
