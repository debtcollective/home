import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import becomeAMemberIcon from '@static/icons/become-a-member.svg';
import clsx from 'clsx';

type MenuSection = {
  label: string;
  path: string;
};

const MENU_SECTIONS: MenuSection[] = [
  {
    label: 'ABOUT US',
    path: '/about-us'
  },
  {
    label: 'OUR TEAM',
    path: '/our-team'
  }
];

const AboutUsMenu = () => {
  const pathname =
    typeof window !== 'undefined' ? window.location.pathname : '';

  const isActive = (path: string) => path === pathname;

  return (
    <div className="flex flex-col w-full mt-20 md:flex-row justify-evenly lg:block lg:mt-0 lg:ml-20">
      <ul>
        {MENU_SECTIONS.map((section) => (
          <li key={section.path} className="mb-16">
            <GatsbyLink
              to={section.path}
              className={clsx(
                'pb-2 text-4xl uppercase border-b-8 font-more-gothic border-black-100 hover:text-primary hover:border-primary',
                {
                  'text-primary': isActive(section.path),
                  'border-primary': isActive(section.path)
                }
              )}
            >
              {section.label}
            </GatsbyLink>
          </li>
        ))}
      </ul>
      <a
        aria-label="Become a member!"
        href="https://debtcollective.org/debt-union"
        rel="noreferrer"
        target="_blank"
      >
        <img
          src={becomeAMemberIcon}
          alt="Become a member!"
          className="relative block lg:mt-20 lg:-left-1"
        />
      </a>
    </div>
  );
};

export default AboutUsMenu;
