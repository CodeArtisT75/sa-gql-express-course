const { GraphQLObjectType, GraphQLString } = require('graphql');

const AddressType = new GraphQLObjectType({
  name: 'address',
  fields: {
    country: {
      type: GraphQLString,
    },
    city: {
      type: GraphQLString,
    },
  },
});

module.exports = AddressType;
