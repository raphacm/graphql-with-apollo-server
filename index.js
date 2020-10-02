const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors')
const app = express();

app.use(cors());

const schema = gql `
  type Query {
    me: User! 
  }

  type User {
    username: String!,
  }
`;

const resolvers = {
  Query: {
    me: () => ({ username: 'Raphael Machado' })
  }
}

const server = new ApolloServer({
  typeDefs: schema,
  resolvers
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen(8000, () => console.log('running on http://localhost:8000/graphql'))