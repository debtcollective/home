import React from 'react';
import plans from '../constants/plans';
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
    <DonationWizard.Form id="monthly" onSubmit={handleOnSubmit}>
      <DonationQuickOption
        options={[...plans, 'other']}
        name="amount"
        defaultChecked={defaultValues.amount || 20}
        suffix="USD/mo"
      />
      <DonationWizard.Button
        aria-label="confirm monthly due amount"
        id="dues-amount-btn"
        type="submit"
      >
        pay monthly dues
      </DonationWizard.Button>
    </DonationWizard.Form>
  );
};

export default DonationMonthlyForm;
