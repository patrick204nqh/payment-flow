module.exports = function defineCustomHook() {

  return {

    initialize: async function () {
      setupAssetPipeline();
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

function setupAssetPipeline() {
  const express = require('express');
  sails.hooks.http.app.use(express.static(require('path').join(sails.config.appPath, 'public')));
}

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
