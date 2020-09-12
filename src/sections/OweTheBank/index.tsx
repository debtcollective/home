import React from 'react';
import oweTheBankImage from '@static/owe-the-bank.svg';

const OweTheBank = () => {
  const renderContent = () => {
    return (
      <div className="order-2 w-full max-w-8xl mx-auto">
        <p className=" text-gray lg:text-white text-xl font-bold text-right lg:text-2xl">
          With over 33K members,
        </p>
        <p className=" text-gray lg:text-white text-xl font-bold text-right mb-5 lg:text-2xl">
          together, we own the bank!
        </p>
        <h2 className=" text-gray lg:text-white font-black leading-20 text-right text-6xl mb-4 mt-5 lg:text-7xl">
          33,021
        </h2>
      </div>
    );
  };

  return (
    <>
      <section
        className="p-desktop-screen-spacing hidden bg-no-repeat bg-cover bg-center lg:flex justify-end"
        style={{
          backgroundImage: `url(${oweTheBankImage})`
        }}
      >
        {renderContent()}
      </section>
      <section
        className="lg:hidden px-x-screen-spacing py-y-screen-spacing"
        style={{
          background:
            'linear-gradient(270deg, #95d5c7 0.70%, #c7e8e1 55%, #FCFBF7 80.89%)'
        }}
      >
        {renderContent()}
      </section>
    </>
  );
};

export default OweTheBank;
