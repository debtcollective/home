import React from 'react';
import faker from 'faker';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import {
  DonationAddressForm,
  DonationMonthlyForm,
  DonationOnceForm,
  DonationPaymentForm,
  DonationTypeControl
} from '../components';

import DonationWidget, { DonationWidgetProps } from '../';
import { Props as DonationAddressFormProps } from '../components/DonationAddressForm';
import { Props as DonationMonthlyFormProps } from '../components/DonationMonthlyForm';
import { Props as DonationOnceFormProps } from '../components/DonationOnceForm';
import { Props as DonationPaymentFormProps } from '../components/DonationPaymentForm';
import { Props as DonationTypeControlProps } from '../components/DonationTypeControl';
import { Elements } from '@stripe/react-stripe-js';
import { STRIPE_API_KEY } from '../stripe';
import { loadStripe } from '@stripe/stripe-js';

export default {
  title: 'Example/DonationWidget'
} as Meta;

/**
 * Showcase the widget composition with all forms
 */
const CompositionTemplate: Story<DonationWidgetProps> = (args) => (
  <DonationWidget {...args} />
);

export const Composition = CompositionTemplate.bind({});

Composition.args = {
  id: 'donation-widget'
};

/**
 * Donation type control component
 */
const TypeControlTemplate: Story<DonationTypeControlProps> = (args) => (
  <DonationTypeControl {...args} />
);

export const TypeControl = TypeControlTemplate.bind({});

TypeControl.args = {
  defaultValues: { activeType: 'once' }
};

/**
 * Donation once form
 */
const OnceFormTemplate: Story<DonationOnceFormProps> = (args) => (
  <DonationOnceForm {...args} />
);

export const OnceForm = OnceFormTemplate.bind({});

OnceForm.args = {
  defaultValues: { amount: faker.random.number(100) }
};

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

/**
 * Address form
 */
const AddressFormTemplate: Story<DonationAddressFormProps> = (args) => (
  <DonationAddressForm {...args} />
);

export const AddressForm = AddressFormTemplate.bind({});

AddressForm.args = {
  amount: faker.random.number(100),
  defaultValues: { address: '', city: '', zipCode: '', country: '' }
};

/**
 * Payment form
 */
const PaymentFormTemplate: Story<DonationPaymentFormProps> = (args) => (
  <Elements stripe={loadStripe(STRIPE_API_KEY)}>
    <DonationPaymentForm {...args} />
  </Elements>
);

export const PaymentForm = PaymentFormTemplate.bind({});

PaymentForm.args = {
  amount: faker.random.number(100),
  defaultValues: { firstName: '', lastName: '', email: '' },
  onSubmit: (data) => {
    alert('Check your console to see submitted data');
    console.log('PaymentForm submit', data);
  },
  tokenData: {
    address_country: 'US',
    address_zip: '32829',
    name: 'Jane Doe'
  }
};
