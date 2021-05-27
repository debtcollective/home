// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document types
import aboutUs from './documents/aboutUs';
import debtRelief from './documents/debtRelief';
import homeHero from './documents/homeHero';
import homePageFeatures from './documents/homePageFeatures';
import ourTeam from './documents/ourTeam';
import popup from './documents/popup';

// Object types
import aboutUsContent from './objects/aboutUsContent';
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
    aboutUs,
    aboutUsContent,
    aboutUsItem,
    badge,
    debtRelief,
    hero,
    homeHero,
    homePageFeatures,
    link,
    ourTeam,
    popup,
    popupImage,
    teamMember,
    userAvatarImage
  ])
});
