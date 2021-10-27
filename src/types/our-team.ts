import { FluidObject } from 'gatsby-image';
import { ISanityHero } from './sanity';

export type ISanityOurTeamHero = ISanityHero;

export interface ISanityTeamMember {
  name: string;
  role: string;
  avatar: {
    caption?: string | undefined;
    className?: string;
    [x: string]: any;
    asset: any;
    hotspot: any;
    crop: any;
    width: any;
    height: any;
    options?: {} | undefined;
    config?: {} | undefined;
    __typename: any;
    _type: any;
    _key: any;
    sources: any;
  };
}
