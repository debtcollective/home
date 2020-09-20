import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import faker from 'faker';
import UnionWidget from '../UnionWidget';
import * as HTTPService from '../api/service';
import { MINIMAL_DONATION } from '../machines/donationMachine';

const billingInformation = {
  address: faker.address.streetAddress(),
  city: faker.address.city(),
  zipCode: faker.address.zipCode(),
  country: faker.address.countryCode()
};
const donationAmount = 5;
const donationResponse = {
  status: 'succeeded',
  message: `Your ${donationAmount} donation has been successfully processed`
};
const sendDonationSpy = jest.spyOn(HTTPService, 'sendDonation');

beforeAll(() => {
  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(donationResponse)
  });
});

afterEach(() => {
  jest.clearAllMocks();
});

test.skip('allows to skip the payment form and complete flow', async () => {
  const regexAmount = new RegExp(`Giving ${donationAmount}`, 'i');
  render(<UnionWidget />);

  const zeroOptionBtn = screen.getByRole('button', { name: /zero/i });
  userEvent.click(zeroOptionBtn);

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
  userEvent.selectOptions(
    screen.getByRole('combobox', { name: /country/i }),
    billingInformation.country
  );
  userEvent.click(screen.getByRole('button', { name: /donate/i }));

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
