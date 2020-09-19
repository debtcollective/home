import React from 'react';
import dcLogo from '@static/debt-collective-logo.svg';
import facebookIcon from '@static/icons/facebook.svg';
import instagramIcon from '@static/icons/instagram.svg';
import twitterIcon from '@static/icons/twitter.svg';
import FooterMenuSection from '@components/Footer/FooterMenuSection';
import NewsLetter from '@components/Footer/SubscribeNewsletter';

const Footer = () => {
  return (
    <footer className="bg-gray px-x-screen-spacing py-y-screen-spacing lg:p-desktop-screen-spacing">
      <div className="max-w-8xl mx-auto">
        <NewsLetter />
        <hr className="w-full border-gray-100 mb-16 lg:mb-20" />
        <section className="flex flex-col items-center mb-16 lg:flex-row lg:justify-between">
          <img src={dcLogo} alt="debt collective logo" />
          <ul className="flex mt-10 lg:mt-0">
            <li className="mr-10">
              <a
                href="https://twitter.com/0debtzone"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={twitterIcon} alt="twitter" />
              </a>
            </li>
            <li className="mr-10">
              <a
                href="https://www.facebook.com/DebtCollective"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={facebookIcon} alt="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/thedebtcollective/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={instagramIcon} alt="instagram" />
              </a>
            </li>
          </ul>
        </section>
        <section className="flex flex-col mb-16 lg:flex-row lg:mb-32">
          <FooterMenuSection
            title="organize"
            items={[
              {
                label: 'Debt Collective Chapters',
                href: 'http://chapters.debtcollective.org/'
              },
              {
                label: 'Community Forum',
                href: 'https://community.debtcollective.org/'
              }
            ]}
            className="mb-10"
          />
          <FooterMenuSection
            title="take action"
            items={[
              {
                label: 'Events',
                href: 'https://community.debtcollective.org/calendar'
              },
              {
                label: 'Dispute Your Debt',
                href: 'https://tools.debtcollective.org/'
              },
              {
                label: 'Student Debt Strike',
                href: 'https://strike.debtcollective.org/'
              }
            ]}
            className="mb-10"
          />
          <FooterMenuSection
            title="learn more"
            items={[
              {
                label: 'About Us',
                href: 'https://www.youtube.com/channel/UC1zKHjs8w8Nf_8krYJrbIDQ'
              },
              {
                label: 'Debt Collective YouTube',
                href: 'https://www.youtube.com/channel/UC1zKHjs8w8Nf_8krYJrbIDQ'
              },
              {
                label: 'Community Voice: The Power Report',
                href: 'https://powerreport.debtcollective.org/'
              }
            ]}
            className="mb-10"
          />
          <FooterMenuSection
            title="more"
            items={[
              {
                label: 'Contact',
                href: 'https://tools.debtcollective.org/contact'
              },
              {
                label: 'Donate',
                href: '/donate'
              }
              // { label: 'Debt Collective and Open Source Technology', href: '' }
            ]}
          />
        </section>
        <section className="flex flex-col lg:flex-row">
          <p className="text-gray-200 font-bold text-center text-base mb-6 lg:mr-12 lg:text-left">
            Copyright 2018
          </p>
          <a
            className="text-white text-center text-base font-normal lg:text-left"
            href="https://community.debtcollective.org/tos"
            target="_blank"
            rel="noreferrer noopener"
          >
            Terms and Conditions
          </a>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
