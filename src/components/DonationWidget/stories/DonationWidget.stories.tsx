import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import DonationWidget, { DonationWidgetProps } from '../';

export default {
  title: 'Example/DonationWidget',
  component: DonationWidget
} as Meta;

const Template: Story<DonationWidgetProps> = (args) => (
  <DonationWidget {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  id: 'donation-widget'
};
