import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import joinStudentDebtStrikeIcon from '@static/icons/join-student-debt-strike.svg';

type MenuSection = {
  label: string;
  path: string;
};

const MENU_SECTIONS: MenuSection[] = [
  {
    label: 'OUR TEAM',
    path: '/our-team'
  },
  {
    label: 'OUR BOARD',
    path: '/our-board'
  },
  {
    label: 'OUR MEMBERS',
    path: '/our-members'
  }
];

const AboutUsMenu = () => {
  return (
    <div className="ml-20">
      <ul>
        {MENU_SECTIONS.map((section) => (
          <li key={section.path} className="mb-16">
            <GatsbyLink
              to={section.path}
              className="pb-2 text-4xl uppercase border-b-8 font-more-gothic border-black-100 hover:text-primary hover:border-primary"
            >
              {section.label}
            </GatsbyLink>
          </li>
        ))}
      </ul>
      <a
        href="https://strike.debtcollective.org/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={joinStudentDebtStrikeIcon}
          alt="Join the student debt strike"
          className="relative block mt-20 -left-1"
        />
      </a>
    </div>
  );
};

export default AboutUsMenu;
