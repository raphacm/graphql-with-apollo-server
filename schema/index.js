const { gql } = require('apollo-server-express')

const userSchema = require('./users');
const messageSchema = require('./message');

const rootSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`

module.exports = [rootSchema, userSchema, messageSchema];