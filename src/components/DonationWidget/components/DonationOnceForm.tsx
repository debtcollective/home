import React from 'react';
import * as DonationWizard from './DonationWizard';

interface Props {
  defaultValues: { amount: number };
  onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
}

const DonationOnceForm: React.FC<Props> = ({ defaultValues, onSubmit }) => {
  return (
    <DonationWizard.Container>
      <DonationWizard.Title>Choose an amount to give</DonationWizard.Title>
      <DonationWizard.Form onSubmit={onSubmit}>
        <DonationWizard.Input
          defaultValue={defaultValues.amount}
          name="amount"
        />
        <DonationWizard.Button type="submit">donate</DonationWizard.Button>
      </DonationWizard.Form>
    </DonationWizard.Container>
  );
};

export default DonationOnceForm;
