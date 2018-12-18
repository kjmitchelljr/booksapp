const graphql = require('graphql');
const _ = require('lodash');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt } = graphql;

// Define object types
const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
});

// Root Query to interact w/ Front-End
const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    book: {
      type: BookType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        // code to get data from db/other source
      }
    },
    author: {
      type: AuthorType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        // code to get data from db
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
