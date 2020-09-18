import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import DonationWidget, { DonationWidgetProps } from '../';

export default {
  title: 'Example/DonationWidget'
} as Meta;

/**
 * Showcase the widget composition with all forms
 */
const WidgetTemplate: Story<DonationWidgetProps> = (args) => (
  <DonationWidget {...args} />
);

export const Widget = WidgetTemplate.bind({});

Widget.args = {
  id: 'donation-widget'
};
