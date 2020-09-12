import React from 'react';
import oweTheBankImage from '@static/owe-the-bank.svg';
import oweTheBankImageMobile from '@static/owe-the-bank-mobile.svg';

const OweTheBank = () => {
  const renderContent = () => {
    return (
      <div className="order-2 w-full max-w-8xl mx-auto">
        <p className=" text-white text-xl font-bold text-right lg:text-2xl">
          With over 33K members,
        </p>
        <p className=" text-white text-xl font-bold text-right lg:text-2xl">
          together, we own the bank!
        </p>
        <h2 className=" text-white font-black leading-20 text-right text-6xl mt-2 lg:mt-5 lg:text-7xl">
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
        className="min-h-80 bg-no-repeat bg-cover bg-center px-x-screen-spacing py-y-screen-spacing lg:hidden "
        style={{
          backgroundImage: `url(${oweTheBankImageMobile})`
        }}
      >
        {renderContent()}
      </section>
    </>
  );
};

export default OweTheBank;
