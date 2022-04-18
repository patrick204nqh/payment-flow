const {
  GraphQLObjectType,
  GraphQLString
} = require('graphql');
const userType = require('./user');

module.exports = new GraphQLObjectType({
  name: 'Signup',
  fields: {
    user: { type: userType },
    jwt: { type: GraphQLString }
  }
});
