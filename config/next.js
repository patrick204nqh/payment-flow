module.exports.next = {
  // Sails integration options
  api: {
    // Prefix for all Sails API routes
    prefix: '/api'
  },

  // Next.js instance options. Passed to `next()`.
  server: {
    // Next.js root directory
    dir: './assets/js',
    // Dev mode. Is overridden by `process.env.NODE_ENV !== 'production'`
    dev: false,
    // Hide error messages
    quiet: false,
    // Equivalent to a `next.config.js` file
    conf: {
      webpack: (config, options) => {
        config.module.rules.push({
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: '@graphql-tools/webpack-loader'
        })

        return config
      },
    }
  },
}
