const ContactType = require('../types/contact');
const Contact = require('../../models/contact');
const { GraphQLNonNull, GraphQLString } = require('graphql');
const AddressInput = require('../inputs/Address');

const StoreContactMutation = {
  type: ContactType,
  args: {
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    phone: {
      type: GraphQLNonNull(GraphQLString),
    },
    address: {
      type: GraphQLNonNull(AddressInput),
    },
  },
  resolve(parent, args) {
    const newCotact = {
      name: args.name,
      phone: args.phone,
      address: args.address
    };

    return Contact.store(newCotact);
  },
};

module.exports = StoreContactMutation;
