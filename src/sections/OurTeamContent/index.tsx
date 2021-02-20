import React from 'react';
import { ISanityAboutUsItem } from 'src/pages/about-us';
import AboutUsLayout from '@sections/AboutUsLayout';
import TeamMemberAvatar from './TeamMemberAvatar';

interface Props {
  items?: ISanityAboutUsItem[];
}

const OurTeamContent: React.FC<Props> = () => (
  <AboutUsLayout headingText="We are a membership-powered movement. Some supporting copy reenforcing the message and sentiment we’re looking to convey.">
    <ul className="grid items-center grid-cols-2 gap-10 lg:grid-cols-3">
      {[1, 2, 3, 4].map((item) => (
        <li key={item}>
          <TeamMemberAvatar
            member={{
              name: 'Arath Jimenez',
              title: 'Software Engineer'
            }}
          />
        </li>
      ))}
    </ul>
  </AboutUsLayout>
);

export default OurTeamContent;
