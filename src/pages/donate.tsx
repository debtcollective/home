import React from 'react';
import Layout from '@components/Layout';
import MembershipBenefits from '@sections/MembershipBenefits';
import FAQ from '@sections/FAQ';
import PowerInNumbers from '@sections/PowerInNumbers';
import OweTheBank from '@sections/OweTheBank';
import DonateCover from '@sections/DonateCover';
import { graphql } from 'gatsby';
import {
  ISanityDonationHero,
  ISanityDonationPageFeatures
} from 'src/types/donate';

interface Props {
  data: {
    sanityDonationHero: {
      hero: ISanityDonationHero;
    };
    sanityDonationPageFeatures: ISanityDonationPageFeatures;
  };
}

const Donate: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <DonateCover
        title={data?.sanityDonationHero?.hero?._rawTitle}
        body={data?.sanityDonationHero?.hero?.body}
      />
      <MembershipBenefits
        title={data?.sanityDonationPageFeatures?.title}
        badges={data?.sanityDonationPageFeatures?.badges}
      />
      <PowerInNumbers />
      <OweTheBank />
      <FAQ />
    </Layout>
  );
};

export const query = graphql`
  {
    sanityDonationHero {
      hero {
        _rawTitle
        body
      }
    }
    sanityDonationPageFeatures {
      title
      badges {
        icon {
          asset {
            url
          }
        }
        title
        body
        color
        href
        caption
      }
    }
  }
`;

export default Donate;
