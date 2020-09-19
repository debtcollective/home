import React from 'react';
import DonationQuickOption from './DonationQuickOption';
import * as DonationWizard from './DonationWizard';

export interface Props {
  defaultValues: { amount: number };
  onSubmit: (data: { [string: string]: unknown }, formId: string) => void;
}

const DonationMonthlyForm: React.FC<Props> = ({ defaultValues, onSubmit }) => {
  const handleOnSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.persist();
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const value = Number(formData.get('amount'));

    onSubmit(
      { value: isNaN(value) ? formData.get('other') : value },
      e.currentTarget.id
    );
  };

  return (
    <DonationWizard.Container>
      <DonationWizard.Title>
        Choose an amount to give per month
      </DonationWizard.Title>
      <DonationWizard.Form id="monthly" onSubmit={handleOnSubmit}>
        <DonationQuickOption
          options={[5, 20, 40, 60, 'other']}
          name="amount"
          defaultChecked={defaultValues.amount || 20}
          suffix="USD/mo"
        />
        <DonationWizard.Button type="submit">
          donate monthly
        </DonationWizard.Button>
      </DonationWizard.Form>
    </DonationWizard.Container>
  );
};

export default DonationMonthlyForm;
