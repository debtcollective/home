import donationWizardMachine from '../machine';

test('starts using one time donation with minimal amount', () => {
  expect(donationWizardMachine.initialState.context).toEqual({
    donationType: 'once',
    donationAmount: 5
  });
});

describe('when toggling donation type', () => {
  it('updates context with "monthly" and minimal amount', () => {
    const machineState = donationWizardMachine.transition(
      donationWizardMachine.initialState,
      'START.MONTHLY'
    );

    expect(machineState.context).toEqual({
      donationType: 'monthly',
      donationAmount: 5
    });
  });

  it('updates context with "once" and minimal amount', () => {
    let machineState = donationWizardMachine.transition(
      donationWizardMachine.initialState,
      'START.MONTHLY'
    );
    machineState = donationWizardMachine.transition(machineState, 'START.ONCE');

    expect(machineState.context).toEqual({
      donationType: 'once',
      donationAmount: 5
    });
  });
});
