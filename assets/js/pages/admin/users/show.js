import App from '../../../components/App';
import AdminUser from '../../../components/admin/users/User';

export async function getServerSideProps({ query}) {
  return {
    props: {
      user: await User.findOne({id: query?.userId})
    },
  }
}

export default function UsersPage({ user }) {
  return (
    <App>
      <AdminUser user={user} />
    </App>
  )
}
