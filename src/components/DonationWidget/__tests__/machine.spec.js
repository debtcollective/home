import donationWizardMachine from '../machine';

test('starts using one time donation with minimal amount', () => {
  expect(donationWizardMachine.initialState.context).toEqual({
    donationType: 'once',
    donationAmount: 5
  });
});

describe('toggling once or monthly donation', () => {
  it('changes donation type context to monthly', () => {
    const nextState = donationWizardMachine.transition(
      donationWizardMachine.initialState,
      'START.MONTHLY'
    );

    expect(nextState.context).toEqual({
      donationType: 'monthly',
      donationAmount: 5
    });
  });

  it('changes donation type context to once', () => {
    let nextState = donationWizardMachine.transition(
      donationWizardMachine.initialState,
      'START.MONTHLY'
    );
    nextState = donationWizardMachine.transition(nextState, 'START.ONCE');

    expect(nextState.context).toEqual({
      donationType: 'once',
      donationAmount: 5
    });
  });
});
