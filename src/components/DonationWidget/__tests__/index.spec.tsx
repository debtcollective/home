import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import faker from 'faker';
import DonationWidget from '../';
import { sendDonation } from '../service';
import { MINIMAL_DONATION } from '../machine';

jest.mock('../service');

test('send a donation request with all provided information', () => {
  const cardInformation = {
    firstName: faker.name.findName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email('bot', '', 'debtcollective.org'),
    cardNumber: faker.finance.creditCardNumber()
  };

  const billingInformation = {
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    zipCode: faker.address.zipCode(),
    country: faker.address.country()
  };
  const donationAmount = faker.random.number(100);
  const regexAmount = new RegExp(`Giving ${donationAmount}`, 'i');

  render(<DonationWidget />);

  // Give the amount to donate
  expect(screen.getByText(/choose an amount/i)).toBeInTheDocument();
  const amountInput = screen.getByRole('textbox', { name: /amount/ });
  userEvent.clear(amountInput);
  userEvent.type(amountInput, `${donationAmount}`);
  userEvent.click(screen.getByRole('button'));

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
    screen.getByRole('textbox', { name: /card number/i }),
    cardInformation.cardNumber
  );
  userEvent.click(screen.getByRole('button'));

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
  userEvent.click(screen.getByRole('button'));

  expect(sendDonation).toHaveBeenCalledWith({
    billingInformation,
    cardInformation,
    donation: {},
    donationType: 'once',
    donationOnceAmount: donationAmount,
    donationMonthlyAmount: MINIMAL_DONATION,
    error: null
  });
});
