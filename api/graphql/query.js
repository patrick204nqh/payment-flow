const {
  GraphQLObjectType,
  GraphQLList
} = require('graphql');
const userType = require('./types/user');

module.exports = new GraphQLObjectType({
  name: 'QueryRoot',
  fields: {
    // test: {
    //   type: GraphQLString,
    //   args: {
    //     who: {
    //       type: GraphQLString
    //     }
    //   },
    //   resolve: (root, { who }) => 'Hello ' + ((who: any) || 'World')
    // },
    users: {
      type: new GraphQLList(userType),
      resolve: (root, _) => []
    },
  }
});
