import React from 'react';
import Layout from '@components/Layout';
import MembershipBenefits from '@sections/MembershipBenefits';
import FAQ from '@sections/FAQ';
import PowerInNumbers from '@sections/PowerInNumbers';
import OweTheBank from '@sections/OweTheBank';
import DonateCover from '@sections/DonateCover';

const Donate: React.FC = () => {
  return (
    <Layout>
      <DonateCover />
      <MembershipBenefits title="How we will use the money?" />
      <PowerInNumbers />
      <OweTheBank />
      <FAQ />
    </Layout>
  );
};

export default Donate;
