module.exports = function defineCustomHook(sails) {

  return {

    initialize: async function () {
      setupGraphql();
    },


    routes: {
      before: {
        '/*': {
          skipAssets: true,
          fn: async function(req, res, next){
            res.setHeader('Cache-Control', 'no-cache, no-store');
            return next();
          }
        }
      }
    }


  };

};

function setupGraphql() {
  const { graphqlHTTP } = require('express-graphql');
  const { buildSchema } = require('graphql');

  var schema = buildSchema(`
    type Query {
      hello: String
    }
  `);

  var root = {
    hello: () => {
      return 'Hello world!';
    },
  };

  sails.hooks.http.app.use('/graphql',
    graphqlHTTP((req, res) => ({
      schema: schema,
      rootValue: root,
      context: { req },
      graphiql: true
    }))
  );
}
