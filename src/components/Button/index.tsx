import React, { ReactChild } from 'react';
import classnames from 'classnames';
import { Colors } from 'constants/colors';

type ButtonType = 'submit' | 'reset' | 'button';

interface Props {
  children: ReactChild;
  className?: string;
  color?: Colors;
  id?: string;
  onClick?: () => void;
  textColor?: Colors;
  type?: ButtonType;
}

const Button: React.FC<Props> = ({
  children,
  className,
  color,
  id,
  onClick,
  textColor,
  type
}) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className={classnames(
        `bg-${color || Colors.primary}`,
        `text-${textColor || Colors.white}`,
        'px-12 py-3 rounded-lg font-semibold text-base',
        className
      )}
      type={type || 'button'}
    >
      {children}
    </button>
  );
};

export default Button;
