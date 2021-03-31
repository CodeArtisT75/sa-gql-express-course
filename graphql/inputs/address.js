const { GraphQLString, GraphQLInputObjectType } = require('graphql');

const AddressInput = new GraphQLInputObjectType({
  name: 'AddressInput',
  fields: {
    country: {
      type: GraphQLString,
    },
    city: {
      type: GraphQLString,
    },
  },
});

module.exports = AddressInput;
