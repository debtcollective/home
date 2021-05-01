import React from 'react';
import AboutUsLayout from '@sections/AboutUsLayout';
import { ISanityTeamMember } from 'src/pages/our-team';
import TeamMemberAvatar from './TeamMemberAvatar';

interface Props {
  items?: ISanityTeamMember[];
}

const OurTeamContent: React.FC<Props> = ({ items }) => (
  <AboutUsLayout headingText="The Debt Collective’s core team is a mix of staff, volunteers, and advisors that coordinate nationally to advance our work. Local branches are primarily run by members.">
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
