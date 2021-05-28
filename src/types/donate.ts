import { ISanityBadge, ISanityHero } from './sanity';

export type ISanityDonationHero = ISanityHero;

export interface ISanityDonationPageFeatures {
  title?: string;
  badges: ISanityBadge[];
}
