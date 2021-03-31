const { GraphQLList } = require('graphql');
const ContactType = require('../types/contact');
const Contact = require('../../models/contact');

const ContactsQuery = {
  type: GraphQLList(ContactType),
  resolve() {
    return Contact.index();
  },
};

module.exports = ContactsQuery;
