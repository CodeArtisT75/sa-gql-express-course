const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');
const AddressType = require('./address');

const ContactType = new GraphQLObjectType({
  name: 'Contact',
  fields: {
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    phone: {
      type: GraphQLString,
    },
    address: {
      type: AddressType,
    },
  },
});

module.exports = ContactType;
