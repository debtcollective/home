import donationWizardMachine from '../machine';

// Convenient alias for better suite reading
const machine = donationWizardMachine;

test('starts using one time donation with minimal amount', () => {
  expect(machine.initialState.context).toEqual({
    donationType: 'once',
    donationAmount: 5
  });
});

describe('when toggling donation type', () => {
  it('updates context with "monthly" and minimal amount', () => {
    let machineState = machine.initialState;
    machineState = machine.transition(machineState, 'START.MONTHLY');

    expect(machineState.context).toEqual({
      donationType: 'monthly',
      donationAmount: 5
    });
  });

  it('updates context with "once" and minimal amount', () => {
    let machineState = machine.initialState;
    machineState = machine.transition(machineState, 'START.MONTHLY');
    machineState = machine.transition(machineState, 'START.ONCE');

    expect(machineState.context).toEqual({
      donationType: 'once',
      donationAmount: 5
    });
  });
});
