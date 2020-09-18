import React from 'react';
import faker from 'faker';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DonationMonthlyForm } from '../components';
import { Props as DonationMonthlyFormProps } from '../components/DonationMonthlyForm';

export default {
  title: 'Example/DonationWidget'
} as Meta;

/**
 * Donation monthly form
 */
const MonthlyFormTemplate: Story<DonationMonthlyFormProps> = (args) => (
  <DonationMonthlyForm {...args} />
);

export const MonthlyForm = MonthlyFormTemplate.bind({});

MonthlyForm.args = {
  defaultValues: { amount: faker.random.number(100) }
};
