const HomePage = () => (
  <div>
    <h1>Home page</h1>
  </div>
)

// Next.js `getInitialProps` receiving the `articleId` through the `query` parameters
// and returning it for the component to get it through the `props`
// HomePage.getInitialProps = ({ query: { articleId } }) => {
//   return { articleId }
// }

export default HomePage
