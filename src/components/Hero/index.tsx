import React, { ReactNode } from 'react';
import classnames from 'classnames';
import Button from 'components/Button';

interface Props {
  backgroundSrc: string;
  children?: ReactNode;
  className?: string;
  hasActions?: boolean;
  primaryAction?: () => void;
  primaryActionLabel?: string;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
  text: string | ReactNode;
  title: string | ReactNode;
}

const Hero: React.FC<Props> = ({
  backgroundSrc,
  children,
  className,
  hasActions,
  primaryAction,
  primaryActionLabel,
  secondaryAction,
  secondaryActionLabel,
  text,
  title
}) => {
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundSrc})`
      }}
      className={classnames(
        'min-h-screen bg-no-repeat bg-cover bg-center flex items-center justify-between flex-wrap p-screen-spacing lg:px-desktop-screen-spacing',
        className
      )}
    >
      <div>
        <h1 className="text-4xl leading-10 font-black text-white mb-6 lg:leading-15 lg:text-6xl">
          {title}
        </h1>
        <p className="font-bold text-2xl text-white leading-6">{text}</p>
        {hasActions && (
          <div className="flex flex-col mt-12 md:block">
            {primaryAction && primaryActionLabel && (
              <Button
                className="w-full mb-6 lg:w-1/3 md:mr-6 lg:mb-0"
                onClick={primaryAction}
              >
                {primaryActionLabel}
              </Button>
            )}
            {secondaryAction && secondaryActionLabel && (
              <Button
                className="w-full lg:w-1/3"
                onClick={secondaryAction}
                variant="secondary"
              >
                {secondaryActionLabel}
              </Button>
            )}
          </div>
        )}
      </div>
      {children && <div>{children}</div>}
    </section>
  );
};

export default Hero;
