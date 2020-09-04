import React from 'react';
import BadgeSlider from 'components/BadgeSlider';
import { Colors } from 'constants/colors';
import aboutCampaignIcon from 'static/icons/about-campaign.svg';
import joinStudentDebtIcon from 'static/icons/join-student-debt.svg';
import thingsToDoIcon from 'static/icons/things-to-do.svg';

const MembershipBenefits = () => {
  return (
    <section
      className="lg:min-h-screen p-screen-spacing flex flex-col justify-center lg:p-desktop-screen-spacing"
      style={{
        background:
          'linear-gradient(180deg, #DBF8FF 0.85%, #F6FAF8 61.2%, #FCFBF7 80.89%)'
      }}
    >
      <h2 className="text-center mb-4 text-4xl leading-9 font-black text-gray lg:text-5xl lg:leading-11">
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
            src: aboutCampaignIcon,
            text:
              'Find webinars, trainings, videos, book & article lists and other educational resources to learn more about debt resistance',
            title: 'Education'
          },
          {
            alt: 'Dispute your debts',
            backgroundColor: Colors.yellow,
            src: joinStudentDebtIcon,
            text:
              'Use our dispute tools to dispute your debts, win relief, and take the power back from creditors',
            title: 'Dispute your debts'
          },
          {
            alt: 'Local chapters',
            backgroundColor: Colors.green,
            src: thingsToDoIcon,
            text:
              'We need your help! Here are simple ways you can join the movement',
            title: 'Local chapters'
          },
          {
            alt: 'Community Platform',
            backgroundColor: Colors.blue,
            src: thingsToDoIcon,
            text:
              'Connect with other members from around the country: share your story, discuss strategies, find information and resources',
            title: 'Community Platform'
          },
          {
            alt: 'a path to real change',
            backgroundColor: Colors.yellow,
            src: thingsToDoIcon,
            text:
              'The debtors union offers a real path to change: people-powered organizing for debt cancellation and debtor power',
            title: 'a path to real change'
          },
          {
            alt: 'Know your rights',
            backgroundColor: Colors.purple,
            src: thingsToDoIcon,
            text:
              'Our online debt clinics inform debtors of their rights, walk them through the dispute process, and offer continuous online chat support',
            title: 'Know your rights'
          },
          {
            alt: 'Get Active',
            backgroundColor: Colors.pink,
            src: thingsToDoIcon,
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
