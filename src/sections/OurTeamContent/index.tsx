import React from 'react';
import AboutUsLayout from '@sections/AboutUsLayout';
import TeamMemberAvatar from './TeamMemberAvatar';
import { ISanityTeamMember } from 'src/types/our-team';

interface Props {
  body?: string;
  items?: ISanityTeamMember[];
}

const OurTeamContent: React.FC<Props> = ({ items, body }) => (
  <AboutUsLayout headingText={body}>
    <ul className="grid items-start grid-cols-2 gap-10 lg:grid-cols-3">
      {items?.map((item) => (
        <li key={item.name}>
          <TeamMemberAvatar member={item} />
        </li>
      ))}
    </ul>
  </AboutUsLayout>
);

export default OurTeamContent;
