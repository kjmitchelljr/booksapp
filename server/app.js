const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Connect to mLab database
mongoose.connect(
  `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ds039037.mlab.com:39037/gql-booksapp`
);
mongoose.connection.once('open', () => {
  console.log('Connected to database');
});

app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log('Listening on port 4000');
});
