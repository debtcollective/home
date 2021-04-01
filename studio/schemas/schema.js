// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document types
import popup from './documents/popup';
import aboutUs from './documents/aboutUs';
import ourTeam from './documents/ourTeam';

// Object types
import popupImage from './objects/popupImage';
import link from './objects/link';
import aboutUsItem from './objects/aboutUsItem';
import aboutUsContent from './objects/aboutUsContent';
import teamMember from './objects/teamMember';
import userAvatarImage from './objects/userAvatarImage';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    popup,
    popupImage,
    link,
    aboutUs,
    aboutUsItem,
    aboutUsContent,
    ourTeam,
    teamMember,
    userAvatarImage
  ])
});
