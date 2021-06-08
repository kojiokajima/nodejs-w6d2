// console.log("Hello GrapgQL")
// import greeting, {message, name} from './myModule'
// console.log(message, name)
// console.log(greeting('Gandalf'));

import {GraphQLServer} from 'graphql-yoga'

// Type definitions (schema)
const typeDefs =`
  type Query {
    hello: String!,
    name: String!,
    location: String!,
    bio: String!
  }
`

// Resolvers
const resolvers = {
  Query: {
    hello() {
      return 'This is my first query'
    },
    name() {
      return 'Coach Koji'
    },
    location() {
      return 'Behind you'
    },
    bio() {
      return 'I live in front of the collage'
    }
  }
}

const server = new GraphQLServer({
  typeDefs, // --> same as typeDefs: typeDefs
  resolvers
})

server.start(() => console.log('The server is up!'))