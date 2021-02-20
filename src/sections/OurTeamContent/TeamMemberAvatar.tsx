import React from 'react';

export interface IMember {
  name?: string;
  title?: string;
}

interface Props {
  member: IMember;
}

const TeamMemberAvatar: React.FC<Props> = ({ member }) => (
  <div>
    <img
      src="https://media-exp1.licdn.com/dms/image/C4E03AQFb0z_Y67nX7w/profile-displayphoto-shrink_800_800/0/1582220552313?e=1619049600&v=beta&t=Wi_An5q6QYiR745uPnsujigrXPqYmLYHszOlU6tYc7U"
      alt={`${member.name} Photo`}
      className="p-2 mx-auto transition duration-150 rounded-full shadow-md w-28 h-28 md:p-4 md:w-64 md:h-64 bg-white-100 hover:bg-yellow"
    />
    <h3 className="mt-3 mb-0 text-base font-bold text-center text-black md:text-lg">
      {member.name}
    </h3>
    <p className="text-xs font-bold text-center md:text-lg">{member.title}</p>
  </div>
);

export default TeamMemberAvatar;
