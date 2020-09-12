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
          title="Full street billing address"
          name="address"
          placeholder="Full street billing address"
        />
        <DonationWizard.Input
          defaultValue={defaultValues.city}
          title="City address"
          name="city"
          placeholder="Maturin"
        />
        <DonationWizard.Input
          defaultValue={defaultValues.zipCode}
          title="Zip code address"
          name="zipCode"
          placeholder="06002"
        />
        <DonationWizard.Input
          defaultValue={defaultValues.country}
          title="Country address"
          name="country"
          placeholder="Venezuela"
        />
        <DonationWizard.Button type="submit">donate</DonationWizard.Button>
      </DonationWizard.Form>
    </DonationWizard.Container>
  );
};

export default DonationAddressForm;
