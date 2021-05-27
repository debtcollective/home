import { ISanityHero } from './sanity';

export type ISanityHomeHero = ISanityHero;

export interface ISanityBadge {
  body: string;
  caption: string;
  color:
    | 'blue'
    | 'gray'
    | 'green'
    | 'pink'
    | 'primary'
    | 'purple'
    | 'white'
    | 'yellow';
  href: string;
  icon: {
    asset: {
      url: string;
    };
  };
  title: string;
}

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
