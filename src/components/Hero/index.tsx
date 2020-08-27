import React, { ReactNode } from 'react';
import classnames from 'classnames';
import Button from 'components/Button';

interface Props {
  backgroundSrc: string;
  className?: string;
  primaryAction: () => void;
  primaryActionLabel: string;
  secondaryAction: () => void;
  secondaryActionLabel: string;
  text: string | ReactNode;
  title: string | ReactNode;
}

const Hero: React.FC<Props> = ({
  backgroundSrc,
  className,
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
        'min-h-screen bg-no-repeat bg-cover bg-center flex flex-col justify-center p-screen-spacing lg:px-desktop-screen-spacing',
        className
      )}
    >
      <h1 className="text-5xl leading-13 font-black text-white mb-6 lg:leading-15 lg:text-6xl">
        {title}
      </h1>
      <p className="font-bold text-2xl text-white leading-6 mb-12">{text}</p>
      <div className="flex flex-col md:block">
        <Button
          className="w-full mb-6 md:w-1/3 lg:w-1/5 md:mr-6 lg:mb-0"
          onClick={primaryAction}
        >
          {primaryActionLabel}
        </Button>
        <Button
          className="w-full md:w-1/3 lg:w-1/5"
          onClick={secondaryAction}
          variant="secondary"
        >
          {secondaryActionLabel}
        </Button>
      </div>
    </section>
  );
};

export default Hero;
