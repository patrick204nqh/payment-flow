const {
  GraphQLObjectType,
  GraphQLString
} = require('graphql');
const userType = require('./user');

module.exports = new GraphQLObjectType({
  name: 'Signin',
  fields: {
    user: { type: userType },
    jwt: { type: GraphQLString }
  }
});
