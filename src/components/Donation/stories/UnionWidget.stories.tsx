import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { UnionWidget as Widget, UnionWidgetProps } from '../';

export default {
  title: 'Example/DonationWidget'
} as Meta;

/**
 * Showcase the widget composition with all forms
 */
const UnionWidgetTemplate: Story<UnionWidgetProps> = (args) => (
  <Widget {...args} />
);

export const UnionWidget = UnionWidgetTemplate.bind({});

UnionWidget.args = {
  id: 'union-widget'
};
