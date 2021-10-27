import React from 'react';
//import Img from 'gatsby-image';
import { ISanityTeamMember } from 'src/types/our-team';
import Img from 'gatsby-plugin-sanity-image';

interface Props {
  member: ISanityTeamMember;
}

const TeamMemberAvatar: React.FC<Props> = ({ member }) => (
  <div>
    <div className="w-32 h-32 m-2 mx-auto overflow-hidden transition duration-150 rounded-full shadow-md md:m-4 md:w-64 md:h-64 bg-white-100 hover:bg-yellow">
      <Img {...member.avatar} className="object-cover w-full h-full" />
    </div>
    <h3 className="mt-3 mb-0 text-base font-bold text-center text-black md:text-lg">
      {member.name}
    </h3>
    <p className="text-xs font-bold text-center md:text-lg">{member.role}</p>
  </div>
);

export default TeamMemberAvatar;
