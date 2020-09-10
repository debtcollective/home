import React from 'react';
import powerInNumbersImage from '@static/power-in-numbers.svg';

const PowerInNumbers = () => {
  const renderContent = () => {
    return (
      <div className="max-w-8xl mx-auto">
        <h2 className="text-white text-left text-4xl font-black mb-4 mt-5 leading-9 lg:leading-20 lg:text-6xl w-full lg:w-1/2">
          Power in Numbers
        </h2>
        <p className="text-white text-left text-xl leading-7 font-bold mb-5 lg:text-2xl w-full lg:w-5/12">
          We believe there is power in numbers. As the old saying goes, if you
          owe the bank $100,000, the bank owns you.
        </p>
      </div>
    );
  };

  return (
    <>
      <section
        className="p-desktop-screen-spacing hidden bg-no-repeat bg-cover bg-center lg:block"
        style={{
          backgroundImage: `url(${powerInNumbersImage})`
        }}
      >
        {renderContent()}
      </section>
      <section className="lg:hidden bg-gray p-screen-spacing">
        {renderContent()}
      </section>
    </>
  );
};

export default PowerInNumbers;
