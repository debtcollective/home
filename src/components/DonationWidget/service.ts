import { DonationMachineContext } from './machine/types';

export const sendDonation = async (context: DonationMachineContext) => {
  console.log('sendDonation', context);

  return fetch('path/to/stripe').then((response) => response.json());
};
