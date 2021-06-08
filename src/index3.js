import {GraphQLServer} from 'graphql-yoga'

// Scalar types - String, Boolean, Int, Float, ID

// Type definitions (schema)
const typeDefs =`
  type Query {
    title: String!,
    price: Float!,
    releaseYear: Int,
    rating: Float,
    isStock: Boolean!
    me: User
  }

  type User {
    id: ID,
    name: String!
    email: String!
    age: Int
  }
`

// Resolvers
const resolvers = {
  Query: {
    title() {
      return 'The art of war'
    },
    price() {
      return 12.99
    },
    releaseYear() {
      return null
    },
    rating() {
      return 5
    },
    isStock() {
      return true
    }
  }
}

const server = new GraphQLServer({
  typeDefs, // --> same as typeDefs: typeDefs
  resolvers
})

server.start(() => console.log('The server is up!'))