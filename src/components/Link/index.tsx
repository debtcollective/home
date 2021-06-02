import React, { ReactNode } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import classnames from 'clsx';

interface Props {
  children: ReactNode;
  className?: string;
  href: string;
  isLocal?: boolean;
  onClick?: () => void;
  variant?: string;
}

const Link: React.FC<Props> = ({
  children,
  className,
  href,
  isLocal,
  onClick,
  variant
}) => {
  const baseClassName = 'transition-colors duration-300';

  const buttonVariantClassname = {
    'text-center': variant === 'button',
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
      className={classnames(baseClassName, buttonVariantClassname, className)}
    >
      {children}
    </a>
  );
};

export default Link;
