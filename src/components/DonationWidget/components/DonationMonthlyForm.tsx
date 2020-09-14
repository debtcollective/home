import React from 'react';
import * as DonationWizard from './DonationWizard';

interface Props {
  defaultValues: { amount: number };
  onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
}

const DonationMonthlyForm: React.FC<Props> = ({ defaultValues, onSubmit }) => {
  return (
    <DonationWizard.Container>
      <DonationWizard.Title>
        Choose an amount to give per month
      </DonationWizard.Title>
      <DonationWizard.Form id="monthly" onSubmit={onSubmit}>
        <DonationWizard.Input
          defaultValue={defaultValues.amount}
          name="amount"
          required
          title="amount to donate"
        />
        <DonationWizard.Button type="submit">
          donate monthly
        </DonationWizard.Button>
      </DonationWizard.Form>
    </DonationWizard.Container>
  );
};

export default DonationMonthlyForm;
