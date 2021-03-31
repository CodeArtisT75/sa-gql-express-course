const { graphqlHTTP } = require('express-graphql');
const Schema = require('../graphql/schema');

module.exports = graphqlHTTP({
  schema: Schema,
  graphiql: true,
});
