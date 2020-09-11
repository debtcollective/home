import React from 'react';

interface Props {
  defaultValues: { firstName: string; lastName: string; email: string };
  onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
}

const DonationPaymentForm: React.FC<Props> = ({ defaultValues, onSubmit }) => {
  return (
    <form className="grid grid-cols-1 gap-4" onSubmit={onSubmit}>
      <label>
        First name:
        <input defaultValue={defaultValues.firstName} name="first-name" />
      </label>
      <label>
        Last name:
        <input defaultValue={defaultValues.lastName} name="last-name" />
      </label>
      <label>
        Email:
        <input defaultValue={defaultValues.email} name="email" />
      </label>
      <label>
        Card:
        <input name="card" />
      </label>
      <button type="submit">Next</button>
    </form>
  );
};

export default DonationPaymentForm;
