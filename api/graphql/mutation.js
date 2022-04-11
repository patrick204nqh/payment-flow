const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString
} = require('graphql');
const userType = require('./types/user');

module.exports = new GraphQLObjectType({
  name: 'MutationRoot',
  fields: {
    signup: {
      type: userType,
      args: {
        username: {
          type: new GraphQLNonNull(GraphQLString)
        },
        email: {
          type: new GraphQLNonNull(GraphQLString)
        },
        password: {
          type: new GraphQLNonNull(GraphQLString)
        },
      },
      resolve(root, {username, email, password}) {
        return UserService.signup({username, email, password});
      }
    }
  }
})
