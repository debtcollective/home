import React from 'react';
import YouTube from 'react-youtube';

const Dues = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 max-w-8xl mx-auto">
        <YouTube videoId="lDX6a9pCOw8" className="w-full mb-10 lg:mb-0" />
        <div>
          <h3 className="text-xl leading-7 font-bold lg:text-2xl">
            Dues ensures that the Debt Collective is by and for its members -{' '}
            <span className="text-primary">
              and not serving the interests of corporate philanthropy.
            </span>
          </h3>
          <p className="text-base leading-5 font-bold mt-5">
            We use dues to directly support debtors and fight for economic
            justice.
          </p>
          <p className="text-base leading-5 font-bold mt-5">
            Dues fund: <br />
            Actions, protests and campaigns <br />
            Debt disputes, debt <br />
            clinics and other administrative costs <br />
            Training and education to <br />
            members <br />
            Development of non-corporate technology <br />
            Hiring staff <br />
            (organizers, web developers, researchers, trainers, lawyers & debtor{' '}
            <br />
            support staff, etc).
          </p>
        </div>
      </div>
      <p className="text-xl leading-7 font-bold text-center mt-10 lg:mt-20 max-w-5xl mx-auto lg:text-2xl">
        For those involved in local Debt Collective chapters,{' '}
        <span className="text-primary">
          50% of your dues will be provided directly to the chapter for local
          organizing and support.
        </span>
      </p>
    </div>
  );
};

export default Dues;
