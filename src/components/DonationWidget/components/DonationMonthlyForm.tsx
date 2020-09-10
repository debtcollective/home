import React from 'react';

const DonationMonthlyForm = ({
  defaultValues,
  onSubmit
}: {
  defaultValues: { amount: number };
  onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
}) => {
  return (
    <form className="grid grid-cols-1 gap-4" onSubmit={onSubmit}>
      <label>
        Donation value:
        <input defaultValue={defaultValues.amount} name="amount" />
      </label>
      <button type="submit">Next</button>
    </form>
  );
};

export default DonationMonthlyForm;
