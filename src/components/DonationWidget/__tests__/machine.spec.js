import donationWizardMachine from '../machine';
import faker from 'faker';

jest.mock('../service', () => ({
  sendDonation: () => {
    console.log('call me maybe');
  }
}));

// Convenient alias for better suite reading
const machine = donationWizardMachine;

test('starts using one time donation with minimal amount', () => {
  expect(machine.initialState.context).toEqual(
    expect.objectContaining({
      donationType: 'once',
      donationAmount: 5
    })
  );
});

describe('when toggling donation type', () => {
  it('updates context with "monthly" and minimal amount', () => {
    let machineState = machine.initialState;
    machineState = machine.transition(machineState, 'START.MONTHLY');

    expect(machineState.context).toEqual(
      expect.objectContaining({
        donationType: 'monthly',
        donationAmount: 5
      })
    );
  });

  it('updates context with "once" and minimal amount', () => {
    let machineState = machine.initialState;
    machineState = machine.transition(machineState, 'START.MONTHLY');
    machineState = machine.transition(machineState, 'START.ONCE');

    expect(machineState.context).toEqual(
      expect.objectContaining({
        donationType: 'once',
        donationAmount: 5
      })
    );
  });
});

test('goes into process donation after filling all information', () => {
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

  let machineState = machine.initialState;
  // Enter to the card information form
  machineState = machine.transition(machineState, 'NEXT');
  // Enter to the billing information form with payment info
  machineState = machine.transition(machineState, {
    type: 'NEXT',
    ...cardInformation
  });
  // Request donation to happen after NEXT with billing info
  machineState = machine.transition(machineState, {
    type: 'NEXT',
    ...billingInformation
  });

  expect(machineState.value).toEqual('processDonation');

  expect(machineState.context).toEqual({
    donationType: 'once',
    donationAmount: 5,
    cardInformation,
    billingInformation
  });
});
