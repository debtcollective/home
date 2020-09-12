import React from 'react';
import BadgeSlider from '@components/BadgeSlider';
import { Colors } from '@constants/colors';
import aboutCampaignIcon from '@static/icons/about-campaign.svg';
import joinStudentDebtIcon from '@static/icons/join-student-debt.svg';
import thingsToDoIcon from '@static/icons/things-to-do.svg';

const MainSlider = () => {
  return (
    <section className="px-x-screen-spacing py-y-screen-spacing flex flex-col justify-center lg:p-desktop-screen-spacing bg-gradient-to-b from-blue via-white-200 to-blue lg:to-white-300">
      <h2 className="text-center mb-10 text-4xl leading-9 font-semibold text-gray lg:text-5xl lg:leading-14 lg:w-2/3 mx-auto">
        1 million new people default on their student loans every year!
      </h2>
      <h3 className="text-center mb-12 font-semibold text-gray text-xl lg:text-2xl">
        No one should be forced into debt for an education. Join us in the fight
        to <span className="text-primary">#CancelStudentDebt</span> and win{' '}
        <span className="text-primary">#CollegeForAll</span>
      </h3>
      <BadgeSlider
        items={[
          {
            alt: 'About the campaign',
            backgroundColor: Colors.purple,
            src: aboutCampaignIcon,
            text:
              'Learn more about our fight to end student debt and win college for all.',
            title: 'About the campaign'
          },
          {
            alt: 'Join the student debt strike',
            backgroundColor: Colors.yellow,
            src: joinStudentDebtIcon,
            text:
              'Can’t Pay? Won’t Pay! Join a community of debtors refusing to pay our student loans!',
            title: 'Join the student debt strike'
          },
          {
            alt: '5 things you can do',
            backgroundColor: Colors.green,
            src: thingsToDoIcon,
            text:
              'We need your help! Here are simple ways you can join the movement.',
            title: '5 things you can do'
          }
        ]}
      />
    </section>
  );
};

export default MainSlider;
