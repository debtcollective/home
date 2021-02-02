import React from 'react';
import dcLogo from '@static/debt-collective-logo.svg';
import facebookIcon from '@static/icons/facebook.svg';
import instagramIcon from '@static/icons/instagram.svg';
import twitterIcon from '@static/icons/twitter.svg';
import FooterMenuSection from '@components/Footer/FooterMenuSection';
import NewsLetter from '@components/Footer/SubscribeNewsletter';

interface Props {
  hideNewsletter?: boolean;
}

const CURRENT_YEAR = process.env.CURRENT_YEAR || new Date().getFullYear();

const Footer: React.FC<Props> = ({ hideNewsletter }) => {
  return (
    <footer className="bg-gray px-x-screen-spacing py-y-screen-spacing lg:px-desktop-screen-spacing lg:py-12">
      <div className="mx-auto max-w-8xl">
        {!hideNewsletter && (
          <>
            <NewsLetter />
            <hr className="w-full mb-12 border-gray-100" />
          </>
        )}
        <section className="flex flex-col items-center mb-12 lg:flex-row lg:justify-between">
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
        <section className="flex flex-col mb-12 lg:flex-row">
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
                label: 'Biden Jubilee 100',
                href: 'https://biden100.debtcollective.org/'
              },
              {
                label: 'Student Debt Strike',
                href: 'https://strike.debtcollective.org/'
              },
              {
                label: 'Events',
                href: 'https://community.debtcollective.org/calendar'
              },
              {
                label: 'Dispute Your Debt',
                href: 'https://tools.debtcollective.org/'
              }
            ]}
            className="mb-10"
          />
          <FooterMenuSection
            title="learn more"
            items={[
              {
                label: 'Debt Collective YouTube',
                href: 'https://www.youtube.com/c/DebtCollective'
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
            ]}
          />
        </section>
        <section className="flex flex-col lg:flex-row">
          <p className="mb-6 text-base font-bold text-center text-gray-200 lg:mr-12 lg:text-left lg:mb-0">
            Copyright {CURRENT_YEAR}
          </p>
          <a
            className="text-base font-normal text-center text-white lg:text-left"
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
