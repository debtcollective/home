import React from 'react';
import YouTube from 'react-youtube';

const Dues = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="mx-auto lg:grid lg:grid-cols-2 lg:gap-16 max-w-8xl">
        <YouTube
          videoId="lFQYBNQBA20"
          className="w-full h-48 mb-10 lg:mb-0 lg:h-full"
        />
        <div>
          <h3 className="text-xl font-semibold leading-7 lg:text-2xl">
            Dues ensure that the Debt Collective is by and for its members -{' '}
            <span className="text-primary">
              and not serving the interests of corporate philanthropy.
            </span>
          </h3>
          <p className="mt-5 text-base font-semibold leading-5">
            We use dues to directly support debtors and fight for economic
            justice.
          </p>
          <h6 className="mt-5 text-base font-semibold leading-5">Dues fund:</h6>
          <ul className="pl-8 mt-4 text-base font-normal list-disc">
            <li>Actions, protests and campaigns</li>
            <li>Debt disputes, debt clinics and other administrative costs</li>
            <li>Training and education for members</li>
            <li>Development of non-corporate technology</li>
            <li>
              Hiring staff (organizers, web developers, researchers, trainers,
              lawyers & debtor support staff, etc).
            </li>
          </ul>
        </div>
      </div>
      <p className="max-w-5xl mx-auto mt-10 text-xl font-semibold leading-7 text-center lg:mt-20 lg:text-2xl">
        For those involved in local Debt Collective chapters,{' '}
        <span className="text-primary">
          40% of your dues will be provided directly to the chapter for local
          organizing and support.
        </span>
      </p>
    </div>
  );
};

export default Dues;
