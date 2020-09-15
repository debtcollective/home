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

const MembershipBenefits = () => {
  return (
    <section
      className="min-h-section-size px-x-screen-spacing py-y-screen-spacing flex flex-col justify-center lg:p-desktop-screen-spacing bg-gradient-to-b from-blue via-white-200 to-blue lg:to-white-300"
      id="membership-benefits"
    >
      <h2 className="text-center mb-4 text-4xl leading-9 font-bold text-gray lg:text-5xl lg:leading-11">
        Membership Benefits
      </h2>
      <h3 className="text-center mb-16 font-semibold text-gray text-xl lg:text-2xl">
        In addition to becoming part of a community of debtors and helping to
        build the <br className="hidden lg:block" /> union, members also receive
        access to a host of benefits:
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
            src: disputeYourDebtsIcon,
            text:
              'Use our dispute tools to dispute your debts, win relief, and take the power back from creditors',
            title: 'Dispute your debts'
          },
          {
            alt: 'Local chapters',
            backgroundColor: Colors.green,
            src: localChaptersIcon,
            text:
              'Members are encouraged to form and join local chapters to build power, lead protests and design campaigns around the country!',
            title: 'Local chapters'
          },
          {
            alt: 'Community Platform',
            backgroundColor: Colors.blue,
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
