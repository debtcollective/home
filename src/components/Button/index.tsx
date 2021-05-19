import React, { ReactNode } from 'react';
import classnames from 'clsx';
import { Colors } from '@constants/colors';

type TButton = 'submit' | 'reset' | 'button';
type TButtonVariant = 'primary' | 'secondary';

interface Props {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  id?: string;
  onClick?: () => void;
  type?: TButton;
  variant?: TButtonVariant;
}

const Button: React.FC<Props> = ({
  children,
  className,
  disabled,
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
        'px-12 py-3 rounded-lg font-bold text-base transition-colors duration-300',
        className,
        {
          [`bg-${Colors.primary}`]: buttonVariant === 'primary' && !disabled,
          [`text-${Colors.white}`]: buttonVariant === 'primary' && !disabled,
          [`bg-${Colors.white}`]: buttonVariant === 'secondary' && !disabled,
          [`text-${Colors.gray}`]: buttonVariant === 'primary',
          'hover:bg-primary-darker': buttonVariant === 'primary' && !disabled,
          'hover:bg-beige-600': buttonVariant === 'secondary' && !disabled,
          'bg-gray-100 text-white-100': disabled
        }
      )}
      type={type || 'button'}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
