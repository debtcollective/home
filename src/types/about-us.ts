import { ISanityHero } from './sanity';

export interface ISanityAboutUsItem {
  id: string;
  title: string;
  _rawContent: unknown[];
}

export type ISanityAboutUsHero = ISanityHero;

export interface ISanityAboutUsContent {
  items: ISanityAboutUsItem[];
}
