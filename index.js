const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors')
const app = express();
const schemas = require('./schema')
const resolvers = require('./resolvers')
const models = require('./models/model')

app.use(cors());

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers,
  context: {
    models,
    me: models.users[0]
  }
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen(8000, () => console.log('running on http://localhost:8000/graphql'))