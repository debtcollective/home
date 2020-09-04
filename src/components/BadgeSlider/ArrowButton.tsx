import React from 'react';
import classnames from 'classnames';

interface Props {
  id: string;
  src: string;
  alt: string;
  onClick: () => void;
  hidden: boolean;
  className?: string;
}

const ArrowButton: React.FC<Props> = ({
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

export default ArrowButton;
