import React from 'react';
import * as DonationWizard from './DonationWizard';

interface Props {
  defaultValues: {
    address: string;
    city: string;
    zipCode: string;
    country: string;
  };
  onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
}

const DonationAddressForm: React.FC<Props> = ({ defaultValues, onSubmit }) => {
  return (
    <DonationWizard.Container>
      <DonationWizard.Title>Choose an amount to give</DonationWizard.Title>
      <DonationWizard.Form onSubmit={onSubmit}>
        <DonationWizard.Input
          defaultValue={defaultValues.address}
          name="adddress"
          placeholder="Full street address"
        />
        <DonationWizard.Input
          defaultValue={defaultValues.city}
          name="city"
          placeholder="Maturin"
        />
        <DonationWizard.Input
          defaultValue={defaultValues.zipCode}
          name="zipCode"
          placeholder="06002"
        />
        <DonationWizard.Input
          defaultValue={defaultValues.country}
          name="country"
          placeholder="Venezuela"
        />
        <DonationWizard.Button type="submit">donate</DonationWizard.Button>
      </DonationWizard.Form>
    </DonationWizard.Container>
  );
};

export default DonationAddressForm;
