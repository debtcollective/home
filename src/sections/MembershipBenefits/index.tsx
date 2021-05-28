import React from 'react';
import BadgeSlider from '@components/BadgeSlider';
import { ISanityBadge } from 'src/types/sanity';
import { convertISanityBadgeToIBadge } from '@utils/badges';

interface Props {
  title?: string;
  description?: string;
  badges?: ISanityBadge[];
}

const MembershipBenefits: React.FC<Props> = ({
  title,
  description,
  badges = []
}) => {
  return (
    <section
      className="flex flex-col justify-center px-x-screen-spacing py-y-screen-spacing lg:p-desktop-screen-spacing bg-gradient-to-b from-blue-200 via-white-200 to-blue-200 lg:to-white-300"
      id="membership-benefits"
    >
      <h2 className="mb-4 text-4xl font-bold leading-9 text-center text-gray lg:text-5xl lg:leading-11">
        {title}
      </h2>
      <h3 className="max-w-full mx-auto mt-4 mb-16 text-xl font-semibold text-center text-gray lg:text-2xl w-6xl">
        {description}
      </h3>
      <BadgeSlider items={badges.map(convertISanityBadgeToIBadge)} />
    </section>
  );
};

export default MembershipBenefits;
