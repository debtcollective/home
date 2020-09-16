import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import faker from 'faker';
import DonationWidget from '../';
import { sendDonation } from '../service';
import { MINIMAL_DONATION } from '../machine';
import * as StripeJS from '@stripe/stripe-js';

jest.mock('../service');
jest.mock('../components/StripeCardInput');

// Fake representation of a Stripe interface
const stripeCard = { id: 'stripe-element-card' };
const stripeInstance = {
  createToken: jest.fn().mockResolvedValue({ token: 'test-token' }),
  elements: jest.fn().mockReturnValue({
    create: jest.fn().mockReturnValue(stripeCard)
  })
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore No need to define all the stripe properties
jest.spyOn(StripeJS, 'loadStripe').mockResolvedValue(stripeInstance);

const cardInformation = {
  firstName: faker.name.findName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email('bot', '', 'debtcollective.org')
};

const billingInformation = {
  address: faker.address.streetAddress(),
  city: faker.address.city(),
  zipCode: faker.address.zipCode(),
  country: faker.address.country()
};
const donationAmount = faker.random.number(100);

test('send a donation request with all provided information', async () => {
  const regexAmount = new RegExp(`Giving ${donationAmount}`, 'i');

  render(<DonationWidget />);

  await waitFor(() =>
    expect(screen.queryByText(/stripe being loaded/i)).not.toBeInTheDocument()
  );

  // Give the amount to donate
  expect(screen.getByText(/choose an amount/i)).toBeInTheDocument();
  const amountInput = screen.getByRole('textbox', { name: /amount/ });
  userEvent.clear(amountInput);
  userEvent.type(amountInput, `${donationAmount}`);
  userEvent.click(screen.getByRole('button', { name: /donate/i }));

  // Give the payment details
  expect(screen.getByText(regexAmount)).toBeInTheDocument();
  userEvent.type(
    screen.getByRole('textbox', { name: /first name/i }),
    cardInformation.firstName
  );
  userEvent.type(
    screen.getByRole('textbox', { name: /last name/i }),
    cardInformation.lastName
  );
  userEvent.type(
    screen.getByRole('textbox', { name: /email/i }),
    cardInformation.email
  );
  userEvent.type(
    screen.getByRole('textbox', { name: 'stripe-mocked-input-element' }),
    faker.finance.creditCardNumber()
  );
  userEvent.click(screen.getByRole('button', { name: /next/i }));

  // Give the billing address
  expect(screen.getByText(regexAmount)).toBeInTheDocument();

  userEvent.type(
    screen.getByRole('textbox', { name: /billing address/i }),
    billingInformation.address
  );
  userEvent.type(
    screen.getByRole('textbox', { name: /city/i }),
    billingInformation.city
  );
  userEvent.type(
    screen.getByRole('textbox', { name: /zip code/i }),
    billingInformation.zipCode
  );
  userEvent.type(
    screen.getByRole('textbox', { name: /country/i }),
    billingInformation.country
  );
  userEvent.click(screen.getByRole('button', { name: /donate/i }));

  expect(sendDonation).toHaveBeenCalledWith({
    billingInformation,
    cardInformation: {
      ...cardInformation,
      card: stripeCard
    },
    donation: {},
    donationType: 'once',
    donationOnceAmount: donationAmount,
    donationMonthlyAmount: MINIMAL_DONATION,
    error: null
  });
});

test('allows to go back to edit amount', async () => {
  render(<DonationWidget />);

  await waitFor(() =>
    expect(screen.queryByText(/stripe being loaded/i)).not.toBeInTheDocument()
  );

  const amountInput = screen.getByRole('textbox', { name: /amount/ });
  userEvent.clear(amountInput);
  userEvent.type(amountInput, `${donationAmount}`);
  userEvent.click(screen.getByRole('button', { name: /donate/i }));

  const goBackBtn = screen.getByText(/edit amount/i);

  expect(screen.queryByText(/choose an amount/i)).not.toBeInTheDocument();

  userEvent.click(goBackBtn);

  expect(screen.getByText(/choose an amount/i)).toBeInTheDocument();
});

test('allows to switch between donation "once" and "monthly" to update donation type', async () => {
  render(<DonationWidget />);

  await waitFor(() =>
    expect(screen.queryByText(/stripe being loaded/i)).not.toBeInTheDocument()
  );

  expect(screen.getByText(/give once/i)).toBeInTheDocument();
  expect(screen.getByText(/monthly/i)).toBeInTheDocument();

  userEvent.click(screen.getByRole('radio', { name: /monthly/i }));

  expect(screen.getByText(/give per month/i)).toBeInTheDocument();

  userEvent.click(screen.getByRole('radio', { name: /once/i }));

  expect(screen.queryByText(/give per month/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/donate/i)).toBeInTheDocument();
});
