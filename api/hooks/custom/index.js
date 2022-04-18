module.exports = function defineCustomHook() {

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
  const { graphqlSchema } = require('../../graphql/schema');

  sails.hooks.http.app.use('/graphql',
    graphqlHTTP((req, res) => {
      return {
        schema: graphqlSchema,
        context: GraphqlService.setGqlContext(req),
        graphiql: true
      }
    })
  );
}
