const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const HelloQuery = require('./queries/Hello');
const ContactsQuery = require('./queries/Contacts');
const ContactQuery = require('./queries/Contact');
const StoreContactMutation = require('./mutations/StoreContact');
const DeleteContactMutation = require('./mutations/deleteContact');

const Schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      hello: HelloQuery,
      contacts: ContactsQuery,
      contact: ContactQuery,
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutation',
    fields: {
      addContact: StoreContactMutation,
      deleteContact: DeleteContactMutation,
    },
  }),
});

module.exports = Schema;
