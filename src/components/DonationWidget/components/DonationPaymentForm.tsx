import React from 'react';
import * as DonationWizard from './DonationWizard';

interface Props {
  defaultValues: { firstName: string; lastName: string; email: string };
  onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
}

const DonationPaymentForm: React.FC<Props> = ({ defaultValues, onSubmit }) => {
  return (
    <DonationWizard.Container>
      <DonationWizard.Title>Choose an amount to give</DonationWizard.Title>
      <DonationWizard.Form onSubmit={onSubmit}>
        <DonationWizard.Input
          defaultValue={defaultValues.firstName}
          name="first-name"
          placeholder="Jane"
        />
        <DonationWizard.Input
          defaultValue={defaultValues.lastName}
          name="last-name"
          placeholder="Doe"
        />
        <DonationWizard.Input
          defaultValue={defaultValues.email}
          name="email"
          placeholder="jane.doe@debtcollective.org"
        />
        <DonationWizard.Input name="card" placeholder="4035 5010 0000 0008" />
        <DonationWizard.Button type="submit">next step</DonationWizard.Button>
      </DonationWizard.Form>
    </DonationWizard.Container>
  );
};

export default DonationPaymentForm;
