import donationWizardMachine, { MINIMAL_DONATION } from '../machine';
import faker from 'faker';

// Convenient alias for better suite reading
const machine = donationWizardMachine;

test('starts using one time donation with minimal amount', () => {
  expect(machine.initialState.context).toEqual(
    expect.objectContaining({
      donationType: 'once',
      donationOnceAmount: MINIMAL_DONATION,
      donationMonthlyAmount: MINIMAL_DONATION
    })
  );
});

describe('when triggering "UPDATE.AMOUNT"', () => {
  it('updates donation amount within "one time donation" amount form', () => {
    const newAmount = faker.random.number(20);
    let machineState = machine.initialState;
    machineState = machine.transition(machineState, {
      type: 'UPDATE.AMOUNT',
      value: newAmount
    });

    expect(machineState.value).toEqual({ amountForm: 'donateOnce' });
    expect(machineState.context).toEqual(
      expect.objectContaining({
        donationAmount: newAmount
      })
    );
  });

  it('updates donation amount within "monthly donation" amount form', () => {
    const newAmount = faker.random.number(20);
    let machineState = machine.initialState;
    machineState = machine.transition(machineState, 'START.MONTHLY');
    machineState = machine.transition(machineState, {
      type: 'UPDATE.AMOUNT',
      value: newAmount
    });

    expect(machineState.value).toEqual({ amountForm: 'donateMonthly' });
    expect(machineState.context).toEqual(
      expect.objectContaining({
        donationAmount: newAmount
      })
    );
  });
});

describe('when toggling donation type', () => {
  it('updates context with "monthly" and minimal amount', () => {
    let machineState = machine.initialState;
    machineState = machine.transition(machineState, 'START.MONTHLY');

    expect(machineState.context).toEqual(
      expect.objectContaining({
        donationType: 'monthly',
        donationOnceAmount: MINIMAL_DONATION,
        donationMonthlyAmount: MINIMAL_DONATION
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
        donationOnceAmount: MINIMAL_DONATION,
        donationMonthlyAmount: MINIMAL_DONATION
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
    donationOnceAmount: MINIMAL_DONATION,
    donationMonthlyAmount: MINIMAL_DONATION,
    cardInformation,
    billingInformation
  });
});
