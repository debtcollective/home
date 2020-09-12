import React from 'react';
import * as DonationWizard from './DonationWizard';

interface Props {
  amount: number;
  defaultValues: {
    address: string;
    city: string;
    zipCode: string;
    country: string;
  };
  onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
}

const DonationAddressForm: React.FC<Props> = ({
  amount,
  defaultValues,
  onSubmit
}) => {
  return (
    <DonationWizard.Container>
      <DonationWizard.Title>{`Giving ${amount}$`}</DonationWizard.Title>
      <DonationWizard.Form onSubmit={onSubmit}>
        <DonationWizard.Input
          defaultValue={defaultValues.address}
          name="address"
          placeholder="Full street billing address"
          required
          title="Full street billing address"
        />
        <DonationWizard.Input
          defaultValue={defaultValues.city}
          name="city"
          placeholder="Maturin"
          required
          title="City address"
        />
        <DonationWizard.Input
          defaultValue={defaultValues.zipCode}
          name="zipCode"
          placeholder="06002"
          required
          title="Zip code address"
        />
        <DonationWizard.Input
          defaultValue={defaultValues.country}
          name="country"
          placeholder="Venezuela"
          required
          title="Country address"
        />
        <DonationWizard.Button type="submit">donate</DonationWizard.Button>
      </DonationWizard.Form>
    </DonationWizard.Container>
  );
};

export default DonationAddressForm;
