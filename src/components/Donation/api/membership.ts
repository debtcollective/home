import { MembershipMachineContext } from '../machines/membershipMachine';

const DONATION_API_URL = `${process.env.GATSBY_MEMBERSHIP_API_URL}`;

interface DonationResponse {
  status: 'failed' | 'succeeded';
  errors?: Array<string>;
  message?: string;
}

export const sendMembershipDonation = async (
  context: MembershipMachineContext
) => {
  const { personalInformation, addressInformation, paymentServices } = context;

  const grecaptcha = (window as any).grecaptcha;

  if (!grecaptcha) {
    throw new Error('Unable to verify with recaptcha');
  }

  const recaptchaToken = await grecaptcha.execute(
    process.env.GATSBY_RECAPTCHA_V3_SITE_KEY,
    {
      action: 'membership'
    }
  );

  const amount = context.donationMonthlyAmount;

  const data = {
    'g-recaptcha-response-data': recaptchaToken,
    subscription: {
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
    credentials: 'include',
    headers: {
      Accept: 'application/json',
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
