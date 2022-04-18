const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString
} = require('graphql');
const signupType = require('./types/signup');
const signinType = require('./types/signin');

module.exports = new GraphQLObjectType({
  name: 'MutationRoot',
  fields: {
    signup: {
      type: signupType,
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
      resolve(_object, {username, email, password}) {
        return AuthService.signup({username, email, password});
      }
    },
    signin: {
      type: signinType,
      args: {
        username: {
          type: GraphQLString
        },
        email: {
          type: GraphQLString
        },
        password: {
          type: new GraphQLNonNull(GraphQLString)
        },
      },
      resolve(_object, {username, email, password}) {
        return AuthService.signin({username, email, password});
      }
    }
  }
})
