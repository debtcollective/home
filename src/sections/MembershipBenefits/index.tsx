import React from 'react';
import BadgeSlider from '@components/BadgeSlider';
import { Colors } from '@constants/colors';
import educationIcon from '@static/icons/education.svg';
import disputeYourDebtsIcon from '@static/icons/dispute-your-debts.svg';
import localChaptersIcon from '@static/icons/local-chapters.svg';
import communityPlatformIcon from '@static/icons/community-platform.svg';
import pathToRealChangeIcon from '@static/icons/path-to-real-change.svg';
import knowYourRightsIcon from '@static/icons/know-your-rights.svg';
import getActiveIcon from '@static/icons/get-active.svg';

interface Props {
  title: string;
  description?: string;
}

const MembershipBenefits: React.FC<Props> = ({ title, description }) => {
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
      <BadgeSlider
        items={[
          {
            alt: 'Education',
            backgroundColor: Colors.purple,
            src: educationIcon,
            text:
              'Find webinars, trainings, videos, book & article lists and other educational resources to learn more about debt resistance',
            title: 'Education'
          },
          {
            alt: 'Dispute your debts',
            backgroundColor: Colors.yellow,
            href: 'https://tools.debtcollective.org/',
            src: disputeYourDebtsIcon,
            text:
              'Use our dispute tools to dispute your debts, win relief, and take the power back from creditors',
            title: 'Dispute your debts'
          },
          {
            alt: 'Local organizing',
            backgroundColor: Colors.green100,
            src: localChaptersIcon,
            text:
              'Members are encouraged to lead and take part in local actions and activities around the country!',
            title: 'Local organizing'
          },
          {
            alt: 'Community Platform',
            backgroundColor: Colors.blue,
            href: 'https://community.debtcollective.org/',
            src: communityPlatformIcon,
            text:
              'Connect with other members from around the country: share your story, discuss strategies, find information and resources',
            title: 'Community Platform'
          },
          {
            alt: 'a path to real change',
            backgroundColor: Colors.yellow,
            src: pathToRealChangeIcon,
            text:
              'The debtors union offers a real path to change: people-powered organizing for debt cancellation and debtor power',
            title: 'a path to real change'
          },
          {
            alt: 'Know your rights',
            backgroundColor: Colors.purple,
            src: knowYourRightsIcon,
            text:
              'Our online debt clinics inform debtors of their rights, walk them through the dispute process, and offer continuous online chat support',
            title: 'Know your rights'
          },
          {
            alt: 'Get Active',
            backgroundColor: Colors.pink,
            src: getActiveIcon,
            text:
              'Members can join new membership orientations, vote in meetings, receive newsletters and get involved in ongoing campaigns and debt strikes',
            title: 'Get Active'
          }
        ]}
      />
    </section>
  );
};

export default MembershipBenefits;
