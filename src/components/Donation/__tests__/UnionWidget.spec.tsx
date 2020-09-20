import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import faker from 'faker';
import UnionWidget from '../UnionWidget';
import * as HTTPService from '../api/union';
import { MINIMAL_DONATION } from '../machines/donationMachine';

jest.mock('../components/StripeCardInput');
jest.mock('../components/DonationCountryDropdown');

const personalInformation = {
  firstName: faker.name.findName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email('bot', '', 'debtcollective.org'),
  phoneNumber: faker.phone.phoneNumber()
};
const billingInformation = {
  address: faker.address.streetAddress(),
  city: faker.address.city(),
  zipCode: faker.address.zipCode(),
  country: 'VE'
};
const donationResponse = {
  status: 'succeeded',
  message: `Your donation has been successfully processed`
};
const sendDonationSpy = jest.spyOn(HTTPService, 'sendUnionDonation');

beforeAll(() => {
  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(donationResponse)
  });
});

afterEach(() => {
  jest.clearAllMocks();
});

test('allows to skip the payment form and complete flow using zero donation selection', async () => {
  const donationAmount = 0;
  const regexAmount = new RegExp(`Giving ${donationAmount}`, 'i');
  render(<UnionWidget />);

  const zeroOptionBtn = screen.getByRole('button', { name: /zero/i });
  userEvent.click(zeroOptionBtn);

  // Give address information
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
  userEvent.selectOptions(
    screen.getByRole('combobox', { name: /country/i }),
    billingInformation.country
  );
  userEvent.click(screen.getByRole('button', { name: /donate/i }));

  // Give address payment information
  expect(screen.getByText(regexAmount)).toBeInTheDocument();
  userEvent.type(
    screen.getByRole('textbox', { name: /first name/i }),
    personalInformation.firstName
  );
  userEvent.type(
    screen.getByRole('textbox', { name: /last name/i }),
    personalInformation.lastName
  );
  userEvent.type(
    screen.getByRole('textbox', { name: /email/i }),
    personalInformation.email
  );
  userEvent.type(
    screen.getByRole('textbox', { name: /phone/i }),
    personalInformation.phoneNumber
  );
  userEvent.type(
    screen.getByRole('textbox', { name: 'stripe-mocked-input-element' }),
    faker.finance.creditCardNumber()
  );

  const submitBtn = screen.getByRole('button', { name: /next/i });
  expect(submitBtn).not.toBeDisabled();
  userEvent.click(submitBtn);

  await waitFor(() =>
    expect(sendDonationSpy).toHaveBeenCalledWith({
      billingInformation,
      donation: {},
      donationType: 'once',
      donationOnceAmount: MINIMAL_DONATION,
      donationMonthlyAmount: donationAmount,
      error: null,
      paymentServices: {
        stripe: null
      }
    })
  );

  expect(screen.getByText(donationResponse.message)).toBeInTheDocument();
});
