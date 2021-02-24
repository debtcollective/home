import React from 'react';
import AboutUsLayout from '@sections/AboutUsLayout';
import { ISanityTeamMember } from 'src/pages/our-team';
import TeamMemberAvatar from './TeamMemberAvatar';

interface Props {
  items?: ISanityTeamMember[];
}

const OurTeamContent: React.FC<Props> = ({ items }) => (
  <AboutUsLayout headingText="We are a membership-powered movement. Some supporting copy reenforcing the message and sentiment we’re looking to convey.">
    <ul className="grid items-center grid-cols-2 gap-10 lg:grid-cols-3">
      {items?.map((item) => (
        <li key={item.name}>
          <TeamMemberAvatar member={item} />
        </li>
      ))}
    </ul>
  </AboutUsLayout>
);

export default OurTeamContent;
