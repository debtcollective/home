import { DonationMachineContext } from './machine/types';

export const sendDonation = async (context: DonationMachineContext) => {
  const { cardInformation, paymentServices, billingInformation } = context;

  if (!paymentServices.stripe || !cardInformation.token) {
    console.error(
      'Unable to perform donation',
      paymentServices,
      cardInformation
    );
    throw new Error("Service not found check: 'sendDonation'");
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
    stripe_token: cardInformation.token.card?.id
  };

  return fetch('path/to/stripe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((response) => response.json());
};
