import React from 'react';
import Layout from '@components/Layout';
import WhatIsADebtorsUnion from '@sections/WhatIsADebtorsUnion';
import MembershipBenefits from '@sections/MembershipBenefits';
import FAQ from '@sections/FAQ';
import PowerInNumbers from '@sections/PowerInNumbers';
import OweTheBank from '@sections/OweTheBank';
import YouAreNotALoan from '@sections/YouAreNotALoan';

const metaTitle =
  'Alone our debts are a burden. Together they make us powerful';
const metaDescription =
  'Join a growing community of debtors organizing to cancel debts and build financial and political power.';

const DebtUnion: React.FC = () => {
  return (
    <Layout title={metaTitle} description={metaDescription}>
      <YouAreNotALoan />
      <WhatIsADebtorsUnion />
      <MembershipBenefits
        title="Membership Benefits"
        description="In addition to becoming part of a community of debtors and helping to
        build the union, members also receive
        access to a host of benefits:"
      />
      <PowerInNumbers />
      <OweTheBank />
      <FAQ />
    </Layout>
  );
};

export default DebtUnion;
