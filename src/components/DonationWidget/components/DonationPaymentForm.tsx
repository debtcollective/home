import React from 'react';
import * as DonationWizard from './DonationWizard';

export interface Props {
  amount: number;
  defaultValues: { firstName: string; lastName: string; email: string };
  onEditAmount: () => void;
  onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
}

const DonationPaymentForm: React.FC<Props> = ({
  amount,
  defaultValues,
  onEditAmount,
  onSubmit
}) => {
  return (
    <DonationWizard.Container>
      <DonationWizard.Title>
        {`Giving ${amount}$`}{' '}
        <DonationWizard.Button variant="transparent" onClick={onEditAmount}>
          (edit amount)
        </DonationWizard.Button>
      </DonationWizard.Title>
      <DonationWizard.Form onSubmit={onSubmit}>
        <DonationWizard.Input
          defaultValue={defaultValues.firstName}
          name="first-name"
          placeholder="Jane"
          required
          title="Card owner first name"
        />
        <DonationWizard.Input
          defaultValue={defaultValues.lastName}
          name="last-name"
          placeholder="Doe"
          required
          title="Card owner last name"
        />
        <DonationWizard.Input
          defaultValue={defaultValues.email}
          name="email"
          placeholder="jane.doe@debtcollective.org"
          required
          title="Contact email"
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
