import React from 'react';
import * as DonationWizard from './DonationWizard';

export interface Props {
  defaultValues: { amount: number };
  onSubmit: (data: { [string: string]: unknown }, formId: string) => void;
}

const DonationOnceForm: React.FC<Props> = ({ defaultValues, onSubmit }) => {
  const handleOnSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.persist();
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const value = Number(formData.get('amount'));

    onSubmit({ value }, e.currentTarget.id);
  };

  return (
    <DonationWizard.Container>
      <DonationWizard.Title>Choose an amount to give</DonationWizard.Title>
      <DonationWizard.Form id="once" onSubmit={handleOnSubmit}>
        <DonationWizard.Input
          defaultValue={defaultValues.amount}
          name="amount"
          required
          title="amount to donate"
        />
        <DonationWizard.Button type="submit">donate</DonationWizard.Button>
      </DonationWizard.Form>
    </DonationWizard.Container>
  );
};

export default DonationOnceForm;
