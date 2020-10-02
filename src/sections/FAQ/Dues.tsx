import React from 'react';
import YouTube from 'react-youtube';

const Dues = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 max-w-8xl mx-auto">
        <YouTube
          videoId="lFQYBNQBA20"
          className="w-full mb-10 lg:mb-0 h-48 lg:h-full"
        />
        <div>
          <h3 className="text-xl leading-7 font-semibold lg:text-2xl">
            Dues ensures that the Debt Collective is by and for its members -{' '}
            <span className="text-primary">
              and not serving the interests of corporate philanthropy.
            </span>
          </h3>
          <p className="text-base leading-5 font-semibold mt-5">
            We use dues to directly support debtors and fight for economic
            justice.
          </p>
          <h6 className="text-base leading-5 font-semibold mt-5">Dues fund:</h6>
          <ul className="list-disc pl-8 mt-4 font-normal text-base">
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
      <p className="text-xl leading-7 font-semibold text-center mt-10 lg:mt-20 max-w-5xl mx-auto lg:text-2xl">
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
