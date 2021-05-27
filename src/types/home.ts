import { ISanityBadge, ISanityHero } from './sanity';

export type ISanityHomeHero = ISanityHero;

export interface ISanityHomePageFeatures {
  title: string;
  _rawBody: unknown[];
  badges: ISanityBadge[];
}

export interface ISanityDebtRelief {
  _rawTitle: unknown[];
  body: string;
  videoId: string;
}
