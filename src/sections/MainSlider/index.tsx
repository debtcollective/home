import React from 'react';
import BadgeSlider from '@components/BadgeSlider';
import { Colors } from '@constants/colors';
import aboutCampaignIcon from '@static/icons/about-campaign.svg';
import joinStudentDebtIcon from '@static/icons/join-student-debt.svg';
import thingsToDoIcon from '@static/icons/things-to-do.svg';

const MainSlider = () => {
  return (
    <section className="flex flex-col justify-center px-x-screen-spacing py-y-screen-spacing lg:p-desktop-screen-spacing bg-gradient-to-b from-blue-200 via-white-200 to-blue-200 lg:to-white-300">
      <h2 className="max-w-full mx-auto mb-10 text-4xl font-semibold leading-9 text-center text-gray lg:text-5xl lg:leading-14 w-6xl">
        1 million new people default on their student loans every year!
      </h2>
      <h3 className="max-w-full mx-auto mb-12 text-xl font-semibold text-center text-gray lg:text-2xl w-5xl">
        No one should be forced into debt for an education. Join us in the fight
        to <span className="text-primary">#CancelStudentDebt</span> and win{' '}
        <span className="text-primary">#CollegeForAll</span>
      </h3>
      <BadgeSlider
        items={[
          {
            alt: 'About the campaign',
            backgroundColor: Colors.purple,
            href: 'https://biden100.debtcollective.org/',
            src: aboutCampaignIcon,
            text: 'Learn more about our Biden Jubilee 100 campaign.',
            title: 'About the campaign'
          },
          {
            alt: 'Show Your Support',
            backgroundColor: Colors.yellow,
            href: 'https://actionnetwork.org/petitions/bidenjubilee100/',
            src: joinStudentDebtIcon,
            text:
              'Sign our petition calling on Joe Biden to cancel ALL student debt.',
            title: 'Show Your Support'
          },
          {
            alt: 'Take Action',
            backgroundColor: Colors.green,
            href: 'https://bit.ly/help-cancel-student-debt',
            src: thingsToDoIcon,
            text:
              'Take action to support the campaign and help build the movement.',
            title: 'Take Action'
          }
        ]}
      />
    </section>
  );
};

export default MainSlider;
