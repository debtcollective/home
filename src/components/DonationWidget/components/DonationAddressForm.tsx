import React from 'react';

const DonationAddressForm = ({
  defaultValues,
  onSubmit
}: {
  defaultValues: {
    address: string;
    city: string;
    zipCode: string;
    country: string;
  };
  onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
}) => {
  return (
    <form className="grid grid-cols-1 gap-4" onSubmit={onSubmit}>
      <label>
        Billing address
        <input defaultValue={defaultValues.address} name="address" />
      </label>
      <label>
        City
        <input defaultValue={defaultValues.city} name="city" />
      </label>
      <label>
        Zip code:
        <input defaultValue={defaultValues.zipCode} name="zipCode" />
      </label>
      <label>
        Country
        <input defaultValue={defaultValues.country} name="country" />
      </label>
      <button type="submit">Next</button>
    </form>
  );
};

export default DonationAddressForm;
