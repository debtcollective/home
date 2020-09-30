import React, { ReactNode } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import classnames from 'classnames';

type TLink = 'button' | 'regular';

interface Props {
  className: string;
  href: string;
  isLocal?: boolean;
  children: ReactNode;
  variant: TLink;
}

const Link: React.FC<Props> = ({
  className,
  href,
  isLocal,
  children,
  variant
}) => {
  const baseClassName = 'font-semibold transition-colors duration-300';

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
