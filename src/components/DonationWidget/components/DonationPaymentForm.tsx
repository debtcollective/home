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
          title="Card owner first name"
          name="first-name"
          placeholder="Jane"
        />
        <DonationWizard.Input
          defaultValue={defaultValues.lastName}
          title="Card owner last name"
          name="last-name"
          placeholder="Doe"
        />
        <DonationWizard.Input
          defaultValue={defaultValues.email}
          title="Contact email"
          name="email"
          placeholder="jane.doe@debtcollective.org"
        />
        <DonationWizard.Input
          title="Credit or debit card number"
          name="card"
          placeholder="4035 5010 0000 0008"
        />
        <DonationWizard.Button type="submit">next step</DonationWizard.Button>
      </DonationWizard.Form>
    </DonationWizard.Container>
  );
};

export default DonationPaymentForm;
