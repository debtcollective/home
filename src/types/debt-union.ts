import { ISanityBadge, ISanityHero } from './sanity';

export type ISanityUnionHero = ISanityHero;

export interface ISanityDebtorsUnion {
  title?: string;
  body?: string;
}

export interface ISanityMembershipBenefits {
  title?: string;
  body?: string;
  badges: ISanityBadge[];
}
