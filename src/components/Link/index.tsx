import React, { ReactNode } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import classnames from 'clsx';

type TLink = 'button' | 'regular';

interface Props {
  children: ReactNode;
  className?: string;
  href: string;
  isLocal?: boolean;
  onClick?: () => void;
  variant: TLink;
}

const Link: React.FC<Props> = ({
  children,
  className,
  href,
  isLocal,
  onClick,
  variant
}) => {
  const baseClassName = 'font-bold transition-colors duration-300';

  const buttonVariantClassname = {
    'rounded-lg': variant === 'button',
    'px-12': variant === 'button',
    'py-3': variant === 'button',
    'bg-primary': variant === 'button',
    'text-white': variant === 'button',
    'hover:bg-primary-darker': variant === 'button'
  };

  return isLocal ? (
    <GatsbyLink
      to={href}
      activeClassName={classnames(
        'text-center',
        baseClassName,
        buttonVariantClassname,
        className
      )}
    >
      {children}
    </GatsbyLink>
  ) : (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={onClick}
      className={classnames(
        'text-center',
        baseClassName,
        buttonVariantClassname,
        className
      )}
    >
      {children}
    </a>
  );
};

export default Link;
