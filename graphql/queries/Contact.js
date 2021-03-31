const { GraphQLString, GraphQLNonNull } = require('graphql');
const ContactType = require('../types/contact');
const Contact = require('../../models/contact');

const ContactQuery = {
  type: ContactType,
  args: {
    contactId: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
  resolve(parent, args) {
    return Contact.getById(args.contactId);
  },
};

module.exports = ContactQuery;
