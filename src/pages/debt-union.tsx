import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@components/Layout';
import WhatIsADebtorsUnion from '@sections/WhatIsADebtorsUnion';
import MembershipBenefits from '@sections/MembershipBenefits';
import FAQ from '@sections/FAQ';
import PowerInNumbers from '@sections/PowerInNumbers';
import OweTheBank from '@sections/OweTheBank';
import DebtUnionCover from '@sections/DebtUnionCover';
import {
  ISanityDebtorsUnion,
  ISanityUnionHero,
  ISanityMembershipBenefits
} from 'src/types/debt-union';

interface Props {
  data: {
    sanityUnionHero: {
      hero: ISanityUnionHero;
    };
    sanityDebtorsUnion: ISanityDebtorsUnion;
    sanityMembershipBenefits: ISanityMembershipBenefits;
  };
}

const metaTitle =
  'Alone our debts are a burden. Together they make us powerful';
const metaDescription =
  'Join a growing community of debtors organizing to cancel debts and build financial and political power.';

const DebtUnion: React.FC<Props> = ({ data }) => {
  return (
    <Layout title={metaTitle} description={metaDescription}>
      <DebtUnionCover
        title={data?.sanityUnionHero?.hero?._rawTitle}
        body={data?.sanityUnionHero?.hero?.body}
      />
      <WhatIsADebtorsUnion
        title={data?.sanityDebtorsUnion?.title}
        body={data?.sanityDebtorsUnion?.body}
      />
      <MembershipBenefits
        title={data?.sanityMembershipBenefits?.title}
        description={data?.sanityMembershipBenefits?.body}
        badges={data?.sanityMembershipBenefits?.badges}
      />
      <PowerInNumbers />
      <OweTheBank />
      <FAQ />
    </Layout>
  );
};

export const query = graphql`
  {
    sanityUnionHero {
      hero {
        _rawTitle
        body
      }
    }
    sanityDebtorsUnion {
      title
      body
    }
    sanityMembershipBenefits {
      title
      body
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

export default DebtUnion;
