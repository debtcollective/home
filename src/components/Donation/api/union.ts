import { UnionMachineContext } from '../machines/unionMachine';

const DONATION_API_URL = `${process.env.GATSBY_MEMBERSHIP_API_URL}`;

interface DonationResponse {
  status: 'failed' | 'succeeded';
  errors?: Array<string>;
  message?: string;
}

export const sendUnionDonation = async (context: UnionMachineContext) => {
  const { personalInformation, addressInformation, paymentServices } = context;

  const amount = context.donationMonthlyAmount;

  const data = {
    charge: {
      address_city: addressInformation.city,
      address_country_code: addressInformation.country,
      address_line1: addressInformation.street,
      address_zip: addressInformation.zipCode,
      amount,
      chapter: personalInformation.chapter,
      phone_number: personalInformation.phoneNumber,
      email: personalInformation.email,
      name: `${personalInformation.firstName} ${personalInformation.lastName}`,
      stripe_token: paymentServices.stripeToken?.id,
      stripe_card_id: paymentServices.stripeToken?.card?.id
    }
  };

  const response: DonationResponse = await fetch(DONATION_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((res) => res.json());

  if (response.status === 'failed') {
    console.error(response.errors);
    throw new Error('server respond with donation failure');
  }

  return response;
};
