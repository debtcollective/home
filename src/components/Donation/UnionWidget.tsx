import React, { useEffect } from 'react';
import { useMachine } from '@xstate/react';
import unionMachine from './machines/unionMachine';
import { DonationMachineStateValueMap } from './machines/donationType';
import {
  DonationMonthlyForm,
  DonationPaymentForm,
  DonationAddressForm,
  DonationThankYou,
  DonationLoading,
  DonationWizard
} from './components';
import { DonationPaymentProvider } from './components/StripeCardInput';
import { Link } from 'gatsby';

const getStripeTokenOptions = ({
  personalInformation,
  addressInformation
}: any) => {
  return {
    name: `${personalInformation.firstName} ${personalInformation.lastName}`,
    address_line1: addressInformation.address,
    address_city: addressInformation.city,
    address_zip: addressInformation.zipCode,
    address_country: addressInformation.country,
    currency: 'USD'
  };
};

export interface Props {
  /**
   * Optional identifier for the widget
   */
  id?: string;
  /**
   * Optional set of classes
   */
  className?: string;
}

const UnionWidget: React.FC<Props> = ({ id, className }) => {
  const [state, send] = useMachine(unionMachine);
  const { context: machineContext } = state;
  const { addressInformation, personalInformation } = machineContext;
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

    send({ type: 'NEXT', data });
  };

  const onZeroDollarClick = () => {
    const data = { value: 0, zeroMode: true };
    onSubmitAmountForm(data);
  };

  const onSubmitPersonalInfoForm = async (
    personalInformation: {
      [string: string]: unknown;
    },
    paymentProvider?: DonationPaymentProvider
  ) => {
    send([
      {
        type: 'NEXT',
        data: {
          ...personalInformation,
          ...paymentProvider
        }
      }
    ]);
  };

  const onSubmitAddressForm = (data: { [string: string]: unknown }) => {
    send({
      type: 'NEXT',
      data: {
        ...data,
        street: data.address
      }
    });
  };

  const onEditAmount = () => {
    send('EDIT.AMOUNT');
  };

  return (
    <div
      id={id}
      className={`m-auto w-full ${className}`}
      style={{ maxWidth: '24rem' }}
    >
      {machineState === 'processUnion' && <DonationLoading />}
      {machineState === 'success' && (
        <DonationThankYou>
          <p className="text-center mt-4 w-9/12 mb-0">
            {machineContext.api.donation?.message}
          </p>
          <p className="mt-0">
            Go to{' '}
            <Link className="text-primary underline" to="/hub">
              your member hub
            </Link>{' '}
            to continue the process
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
            membership option for those who can&apos;t contribute dues right
            now.
          </DonationWizard.BottomMessage>
        </DonationWizard.Container>
      )}
      {machineState.generalInformationForm === 'personalInformationForm' && (
        <DonationPaymentForm
          errors={machineContext.api.donation?.errors || null}
          amount={machineContext.donationMonthlyAmount}
          defaultValues={{
            email: personalInformation.email,
            firstName: personalInformation.firstName,
            lastName: personalInformation.lastName,
            phoneNumber: personalInformation.phoneNumber
          }}
          hasChapterSelection
          onEditAmount={onEditAmount}
          onSubmit={onSubmitPersonalInfoForm}
          tokenData={getStripeTokenOptions(machineContext)}
        />
      )}
      {machineState.generalInformationForm === 'addressInformationForm' && (
        <DonationAddressForm
          amount={machineContext.donationMonthlyAmount}
          defaultValues={{
            address: addressInformation.street,
            city: addressInformation.city,
            zipCode: addressInformation.zipCode,
            country: addressInformation.country
          }}
          onEditAmount={onEditAmount}
          onSubmit={onSubmitAddressForm}
        />
      )}
      <p className="text-white text-xss text-center mt-2 px-4">
        After processing your donation an account will be created for you
        providing access to all Debt Collective Union Member benefits.
      </p>
    </div>
  );
};

export default UnionWidget;
