const ContactType = require('../types/contact');
const Contact = require('../../models/contact');
const { GraphQLNonNull, GraphQLString } = require('graphql');

const DeleteContactMutation = {
  type: ContactType,
  args: {
    contactId: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
  resolve(parent, args) {
    return Contact.deleteById(args.contactId);
  },
};

module.exports = DeleteContactMutation;
