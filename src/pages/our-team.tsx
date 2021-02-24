import React from 'react';
import Layout from '@components/Layout';
import OurTeamCover from '@sections/OurTeamCover';
import { graphql } from 'gatsby';
import OurTeamContent from '@sections/OurTeamContent';
import { FluidObject } from 'gatsby-image';

export interface ISanityTeamMember {
  name: string;
  role: string;
  avatar: {
    asset: {
      fluid: FluidObject;
    };
  };
}

export interface ISanityOurTeam {
  title: string;
  teamMembers: ISanityTeamMember[];
}

interface Props {
  data: {
    sanityOurTeam: ISanityOurTeam;
  };
}

const OurTeam: React.FC<Props> = ({ data }) => (
  <Layout>
    <OurTeamCover />
    <OurTeamContent items={data?.sanityOurTeam?.teamMembers} />
  </Layout>
);

export const query = graphql`
  {
    sanityOurTeam {
      title
      teamMembers {
        name
        role
        avatar {
          asset {
            fluid(maxWidth: 160) {
              ...GatsbySanityImageFluid_noBase64
            }
          }
        }
      }
    }
  }
`;

export default OurTeam;
