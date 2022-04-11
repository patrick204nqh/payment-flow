const {
  GraphQLSchema,
  // GraphQLObjectType,
  // GraphQLNonNull,
  GraphQLString,
  // GraphQLError,
  BREAK
} = require('graphql');

const QueryRoot = require('./query');
const MutationRoot = require('./mutations');

module.exports = {
  graphqlSchema: new GraphQLSchema({
    query: QueryRoot,
    // mutation: MutationRoot
  })
};
