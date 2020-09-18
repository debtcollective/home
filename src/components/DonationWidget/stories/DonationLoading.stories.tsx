import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DonationLoading } from '../components';
import { Props as DonationThankYouProps } from '../components/DonationLoading';

export default {
  title: 'Example/DonationWidget'
} as Meta;

/**
 * Donation once form
 */
const LoadingTemplate: Story<DonationThankYouProps> = (args) => (
  <DonationLoading {...args} />
);

export const Loading = LoadingTemplate.bind({});

Loading.args = {};
