const express = require('express');
const graphqlHTTPHandler = require('./graphql');

const app = express();

app.use('/graphql', graphqlHTTPHandler);

app.listen(3000, () => {
  console.log('App Started on Port 3000');
});
