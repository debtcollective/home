import React from 'react';
import { render } from '@testing-library/react';
import faker from 'faker';
/* 
import DonationWidget from '../';
*/
import { sendDonation } from '../service';
import { MINIMAL_DONATION } from '../machine';

jest.mock('../service');

test.skip('send a donation request with all provided information', () => {
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

  // render(<DonationWidget />);

  // Interact with widget until donation submit

  expect(sendDonation).toHaveBeenCalledWith({
    billingInformation,
    cardInformation,
    donation: {},
    donationType: 'once',
    donationOnceAmount: MINIMAL_DONATION,
    donationMonthlyAmount: MINIMAL_DONATION,
    error: null
  });
});
