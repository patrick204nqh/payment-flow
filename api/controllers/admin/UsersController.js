module.exports = {
  index (req, res) {
    // Extract `params` which contains the `articleId` parsed from the URL path
    // and `query` parameters parsed as an object
    const { params, query } = req

    // Render the Next.js `pages/home.js` component passing the `query` and `params`
    // merged together so that the `query` can still get accessed by the `getInitialProps()` method.
    sails.config.next.app.render(req, res, '/admin/users', { ...params, ...query })
  },
  edit (req, res) {
    const { params, query } = req
    sails.config.next.app.render(req, res, '/admin/users', { ...params, ...query })
  }
};
