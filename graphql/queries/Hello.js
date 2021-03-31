const { GraphQLString } = require("graphql");

const HelloQuery = {
  type: GraphQLString,
  resolve() {
    return 'hello world';
  },
};

module.exports = HelloQuery;
