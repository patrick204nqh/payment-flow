const {
  GraphQLObjectType,
  GraphQLList
} = require('graphql');
const userType = require('./types/user');

module.exports = new GraphQLObjectType({
  name: 'QueryRoot',
  fields: {
    user: {
      type: userType,
      resolve: (_object, _args, { currentUser }) => currentUser
    }
    // users: {
    //   type: new GraphQLList(userType),
    //   resolve: (root, _) => []
    // },
  }
});
