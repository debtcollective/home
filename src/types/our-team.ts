import { FluidObject } from 'gatsby-image';
import { ISanityHero } from './sanity';

export type ISanityOurTeamHero = ISanityHero;

export interface ISanityTeamMember {
  name: string;
  role: string;
  avatar: {
    asset: {
      fluid: FluidObject;
    };
    caption?: string;
  };
}
