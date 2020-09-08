import React from 'react';
import YouTube from 'react-youtube';
import Button from '@components/Button';

interface Props {
  mainVictoriesImage: string;
}

const MainVictories: React.FC<Props> = ({ mainVictoriesImage }) => {
  return (
    <section
      className="lg:min-h-screen flex flex-col justify-center bg-no-repeat bg-cover bg-center p-screen-spacing lg:p-desktop-screen-spacing"
      style={{
        backgroundImage: `url(${mainVictoriesImage})`
      }}
    >
      <div className="lg:grid lg:grid-cols-2 lg:gap-16">
        <YouTube videoId="lDX6a9pCOw8" className="w-full mb-16 lg:mb-0" />
        <div>
          <h3 className="text-3xl leading-9 font-bold lg:leading-13 lg:text-5xl">
            Our movement has <span className="text-primary">abolished</span>{' '}
            more than
          </h3>
          <h2 className="text-6xl leading-20 text-primary font-bold font-more-gothic lg:text-9xl lg:leading-40">
            $1.8 Billion
          </h2>
          <p className="text-2xl leading-7 font-bold">
            in student debt, medical debt, payday loans, probation debt and
            credit card debt. Our student debt campaign put full student debt
            cancellation and free public college on the political map.
          </p>
        </div>
      </div>
      <Button className="mx-auto mt-12 block lg:mt-20">
        Learn More About Our Victories
      </Button>
    </section>
  );
};

export default MainVictories;
