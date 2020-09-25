import { DonationMachineContext } from '../machines/donationType';

const DONATION_API_URL = `${process.env.GATSBY_DONATE_API_URL}`;

interface DonationResponse {
  status: 'failed' | 'succeeded';
  errors?: Array<string>;
  message?: string;
}

export const sendDonation = async (context: DonationMachineContext) => {
  const { cardInformation, billingInformation, paymentServices } = context;

  if (!paymentServices.stripeToken) {
    console.error('Unable to perform donation', context);
    throw new Error("Service not found check: 'sendDonation'");
  }

  const amount =
    context.donationType === 'monthly'
      ? context.donationMonthlyAmount
      : context.donationOnceAmount;

  const data = {
    charge: {
      address_city: billingInformation.city,
      address_country_code: billingInformation.country,
      address_line1: billingInformation.address,
      address_zip: billingInformation.zipCode,
      amount,
      phone_number: cardInformation.phoneNumber,
      email: cardInformation.email,
      name: `${cardInformation.firstName} ${cardInformation.lastName}`,
      stripe_token: paymentServices.stripeToken.id,
      stripe_card_id: paymentServices.stripeToken.card?.id
    }
  };

  const response: DonationResponse = await fetch(DONATION_API_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((res) => res.json());

  if (response.status === 'failed') {
    // TODO: update context to use errors object
    console.error(response.errors);
    throw new Error('server respond with donation failure');
  }

  return response;
};
