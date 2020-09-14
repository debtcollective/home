import React from 'react';

interface Props {
  defaultValues: {
    activeType: 'once' | 'monthly';
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DonationTypeControl: React.FC<Props> = ({ defaultValues, onChange }) => {
  return (
    <div>
      <div>
        <input
          checked={defaultValues.activeType === 'once'}
          id="donationOnce"
          name="donationType"
          onChange={onChange}
          type="radio"
          value="once"
        />
        <label htmlFor="donationOnce">Give once</label>
      </div>
      <div>
        <input
          checked={defaultValues.activeType === 'monthly'}
          id="donateMonthly"
          name="donationType"
          onChange={onChange}
          type="radio"
          value="monthly"
        />
        <label htmlFor="donateMonthly">Monthly</label>
      </div>
    </div>
  );
};

export default DonationTypeControl;
