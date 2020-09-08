import React, { ReactChild } from 'react';
import classnames from 'classnames';
import { Colors } from '@constants/colors';

type TButton = 'submit' | 'reset' | 'button';
type TButtonVariant = 'primary' | 'secondary';

interface Props {
  children: ReactChild;
  className?: string;
  id?: string;
  onClick?: () => void;
  type?: TButton;
  variant?: TButtonVariant;
}

const Button: React.FC<Props> = ({
  children,
  className,
  id,
  onClick,
  type,
  variant
}) => {
  const buttonVariant = variant || 'primary';

  return (
    <button
      id={id}
      onClick={onClick}
      className={classnames(
        'px-12 py-3 rounded-lg font-semibold text-base',
        className,
        {
          [`bg-${Colors.primary}`]: buttonVariant === 'primary',
          [`text-${Colors.white}`]: buttonVariant === 'primary',
          [`bg-${Colors.white}`]: buttonVariant === 'secondary',
          [`text-${Colors.gray}`]: buttonVariant === 'primary'
        }
      )}
      type={type || 'button'}
    >
      {children}
    </button>
  );
};

export default Button;
