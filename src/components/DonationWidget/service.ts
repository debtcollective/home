import { DonationMachineContext } from './machine/types';
import { getStripeTokenOptions } from './stripe';

export const sendDonation = async (context: DonationMachineContext) => {
  const { cardInformation, paymentServices, billingInformation } = context;
  const options = getStripeTokenOptions(context);

  if (!paymentServices.stripe || !cardInformation.card) {
    console.error(
      'Unable to perform donation',
      paymentServices,
      cardInformation
    );
    throw new Error("Service not found check: 'sendDonation'");
  }

  const { token, error } = await paymentServices.stripe.createToken(
    cardInformation.card,
    options
  );

  if (error) {
    console.error('Unable to perform donation', error);
    throw new Error("Error connecting with stripe check: 'sendDonation'");
  }

  const amount =
    context.donationType === 'monthly'
      ? context.donationMonthlyAmount
      : context.donationOnceAmount;

  const data = {
    address_city: billingInformation.city,
    address_country_code: billingInformation.country,
    address_line1: billingInformation.address,
    address_zip: billingInformation.zipCode,
    amount,
    email: cardInformation.email,
    name: `${cardInformation.firstName} ${cardInformation.lastName}`,
    stripe_token: token?.id
  };

  return fetch('path/to/stripe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((response) => response.json());
};
