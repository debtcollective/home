import React from 'react';
import dcLogo from 'static/debt-collective-logo.svg';
import facebookIcon from 'static/icons/facebook.svg';
import instagramIcon from 'static/icons/instagram.svg';
import twitterIcon from 'static/icons/twitter.svg';
import envatoIcon from 'static/icons/envato.svg';
import FooterMenuSection from 'components/Footer/FooterMenuSection';
import NewsLetter from 'components/Footer/SubscribeNewsletter';

const Footer = () => {
  return (
    <footer className="bg-gray p-12 lg:p-24">
      <NewsLetter />
      <hr className="w-full border-gray-100 mb-16 lg:mb-20" />
      <section className="flex flex-col items-center mb-16 lg:flex-row lg:justify-between">
        <img src={dcLogo} alt="debt collective logo" />
        <ul className="flex mt-10 lg:mt-0">
          <li className="mr-10">
            <a href="">
              <img src={facebookIcon} alt="facebook" />
            </a>
          </li>
          <li className="mr-10">
            <a href="">
              <img src={instagramIcon} alt="instagram" />
            </a>
          </li>
          <li className="mr-10">
            <a href="">
              <img src={twitterIcon} alt="twitter" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={envatoIcon} alt="envato" />
            </a>
          </li>
        </ul>
      </section>
      <section className="flex flex-col mb-16 lg:flex-row lg:mb-32">
        <FooterMenuSection
          title="organize"
          items={[
            { label: 'Collectives', href: '' },
            { label: 'Campaings', href: '' },
            { label: 'Debt Map', href: '' }
          ]}
          className="mb-10"
        />
        <FooterMenuSection
          title="take action"
          items={[
            { label: 'Dispute your debt', href: '' },
            { label: 'Campaings', href: '' }
          ]}
          className="mb-10"
        />
        <FooterMenuSection
          title="learn more"
          items={[
            { label: 'Collectives', href: '' },
            { label: 'About us', href: '' },
            { label: 'Community Wiki', href: '' }
          ]}
          className="mb-10"
        />
        <FooterMenuSection
          title="more"
          items={[
            { label: 'Contact', href: '' },
            { label: 'Donate', href: '' },
            { label: 'Open source', href: '' }
          ]}
        />
      </section>
      <section className="flex flex-col lg:flex-row">
        <p className="mr-12 text-gray-200 font-extrabold text-base mb-6 ">
          Copyright 2018
        </p>
        <a className="text-white text-base font-light" href="">
          Terms and Conditions
        </a>
      </section>
    </footer>
  );
};

export default Footer;
