// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
// import blockContent from './blockContent'
import clients from './clients'
import homepageFigures from './homepageFigures'
import teamMembers from "./teamMembers";
import portfolioProjects from './portfolioProjects';
import services from './services'
import formSubmission from './formSubmission';
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    homepageFigures,
    clients,
    teamMembers,
    portfolioProjects,
    services,
    formSubmission
  ]),
})
