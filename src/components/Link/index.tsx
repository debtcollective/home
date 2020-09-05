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
  const baseClassName = 'text-base font-semibold';

  const buttonVariantClassname = {
    'rounded-lg': variant === 'button',
    'px-12': variant === 'button',
    'py-3': variant === 'button',
    'bg-primary': variant === 'button',
    'text-white': variant === 'button'
  };

  return isLocal ? (
    <GatsbyLink
      to={href}
      activeClassName={classnames(
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
      className={classnames(baseClassName, buttonVariantClassname, className)}
    >
      {children}
    </a>
  );
};

export default Link;
