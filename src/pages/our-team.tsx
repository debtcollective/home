import React from 'react';
import Layout from '@components/Layout';
import OurTeamCover from '@sections/OurTeamCover';
import { graphql } from 'gatsby';
import OurTeamContent from '@sections/OurTeamContent';
import { ISanityOurTeamHero, ISanityTeamMember } from 'src/types/our-team';

interface Props {
  data: {
    sanityOurTeamHero: {
      hero: ISanityOurTeamHero;
    };
    sanityTeamMembers: {
      teamMembers: ISanityTeamMember[];
    };
  };
}

const OurTeam: React.FC<Props> = ({ data }) => (
  <Layout>
    <OurTeamCover title={data?.sanityOurTeamHero?.hero?._rawTitle} />
    <OurTeamContent
      items={data?.sanityTeamMembers?.teamMembers}
      body={data?.sanityOurTeamHero?.hero?.body}
    />
  </Layout>
);

export const query = graphql`
  {
    sanityOurTeamHero {
      hero {
        _rawTitle
        body
      }
    }
    sanityTeamMembers {
      teamMembers {
        name
        role
        avatar {
          asset {
            fluid(maxWidth: 160) {
              ...GatsbySanityImageFluid_noBase64
            }
          }
          caption
        }
      }
    }
  }
`;

export default OurTeam;
