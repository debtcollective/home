// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document types
import aboutUsContent from './documents/aboutUsContent';
import aboutUsHero from './documents/aboutUsHero';
import debtorsUnion from './documents/debtorsUnion';
import debtRelief from './documents/debtRelief';
import donationHero from './documents/donationHero';
import donationPageFeatures from './documents/donationPageFeatures';
import homeHero from './documents/homeHero';
import homePageFeatures from './documents/homePageFeatures';
import membershipBenefits from './documents/membershipBenefits';
import ourTeamHero from './documents/ourTeamHero';
import popup from './documents/popup';
import teamMembers from './documents/teamMembers';
import unionHero from './documents/unionHero';

// Object types
import aboutUsItem from './objects/aboutUsItem';
import badge from './objects/badge';
import hero from './objects/hero';
import link from './objects/link';
import popupImage from './objects/popupImage';
import teamMember from './objects/teamMember';
import userAvatarImage from './objects/userAvatarImage';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    aboutUsContent,
    aboutUsHero,
    aboutUsItem,
    badge,
    debtorsUnion,
    debtRelief,
    donationHero,
    donationPageFeatures,
    hero,
    homeHero,
    homePageFeatures,
    link,
    membershipBenefits,
    ourTeamHero,
    popup,
    popupImage,
    teamMember,
    teamMembers,
    unionHero,
    userAvatarImage
  ])
});
