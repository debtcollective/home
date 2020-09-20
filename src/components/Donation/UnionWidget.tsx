import React, { useEffect } from 'react';
import { useMachine } from '@xstate/react';
import donationMachine from './machines/donationMachine';
import {
  DonationMachineContext,
  DonationMachineStateValueMap
} from './machines/donationType';
import {
  DonationMonthlyForm,
  DonationPaymentForm,
  DonationAddressForm,
  DonationThankYou,
  DonationLoading,
  DonationWizard
} from './components';
import { getStripeTokenOptions } from './utils/stripe';
import { DonationPaymentProvider } from './components/StripeCardInput';

export interface Props {
  /**
   * Optional identifier for the widget
   */
  id?: string;
}

const UnionWidget: React.FC<Props> = ({ id }) => {
  const [state, send] = useMachine<DonationMachineContext, any>(
    donationMachine
  );
  const { context: machineContext } = state;
  const { billingInformation, cardInformation } = machineContext;
  const machineState: DonationMachineStateValueMap = state.value;

  useEffect(() => {
    /**
     * Initialize the UnionWidget to render on
     * monthly subscription state.
     */
    send('START.MONTHLY');
  }, [send]);

  /**
   * whenever the machine enter into failure
   * status trigger an effect to retry the process
   */
  useEffect(() => {
    if (machineState === 'failure') {
      console.error('Machine falls on failure status', machineContext);
      send('RETRY');
    }
  }, [machineContext, machineState, send]);

  const onSubmitAmountForm = (data: { [string: string]: unknown }) => {
    const { value, zeroMode } = data;

    if (!value && !zeroMode) {
      console.error('error trying to update amount', value, zeroMode);
      return;
    }

    send([{ type: 'UPDATE.AMOUNT.MONTHLY', value }, { type: 'NEXT' }]);
  };

  const onZeroDollarClick = () => {
    const data = { value: 0, zeroMode: true };
    onSubmitAmountForm(data);
  };

  const onSubmitPaymentInfoForm = async (
    data: {
      [string: string]: unknown;
    },
    paymentProvider: DonationPaymentProvider
  ) => {
    send({ type: 'UPDATE.PAYMENT.SERVICE', stripe: paymentProvider.stripe });
    // TODO: adapt all data and use the machine guard to provide feedback when necessary
    send({ type: 'NEXT', ...data });
  };

  const onSubmitAddressForm = (data: { [string: string]: unknown }) => {
    send({ type: 'NEXT', ...data });
  };

  const onEditAmount = () => {
    send('START.MONTHLY');
  };

  return (
    <div id={id} className="m-auto w-full" style={{ maxWidth: '24rem' }}>
      {machineState === 'processDonation' && <DonationLoading />}
      {machineState === 'success' && (
        <DonationThankYou>
          <p className="text-center mb-4 mt-4 w-9/12">
            {machineContext.donation.message}
          </p>
        </DonationThankYou>
      )}
      {machineState.amountForm === 'donateMonthly' && (
        <DonationWizard.Container>
          <DonationWizard.Title>
            Choose an amount to give per month
          </DonationWizard.Title>
          <DonationMonthlyForm
            defaultValues={{ amount: machineContext.donationMonthlyAmount }}
            onSubmit={onSubmitAmountForm}
          />
          <DonationWizard.BottomMessage>
            We offer a{' '}
            <DonationWizard.Button variant="text" onClick={onZeroDollarClick}>
              zero-dollar
            </DonationWizard.Button>{' '}
            membership option for those who can&apos;t afford to contribute
            right now.
          </DonationWizard.BottomMessage>
        </DonationWizard.Container>
      )}
      {machineState.paymentForm === 'cardForm' && (
        <DonationPaymentForm
          amount={machineContext.donationOnceAmount}
          defaultValues={{
            email: cardInformation.email,
            firstName: cardInformation.firstName,
            lastName: cardInformation.lastName,
            phoneNumber: cardInformation.phoneNumber
          }}
          onEditAmount={onEditAmount}
          onSubmit={onSubmitPaymentInfoForm}
          tokenData={getStripeTokenOptions(machineContext)}
        />
      )}
      {machineState.paymentForm === 'addressForm' && (
        <DonationAddressForm
          amount={machineContext.donationOnceAmount}
          defaultValues={{
            address: billingInformation.address,
            city: billingInformation.city,
            zipCode: billingInformation.zipCode,
            country: billingInformation.country
          }}
          onEditAmount={onEditAmount}
          onSubmit={onSubmitAddressForm}
        />
      )}
    </div>
  );
};

export default UnionWidget;
