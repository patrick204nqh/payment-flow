import App from '../../components/App';
import AdminUsers from '../../components/admin/users/Users';
import AdminUser from '../../components/admin/users/User';

export async function getStaticProps({ params }) {
  var user = null;
  if(params?.user_id) {
    user = await User.findOne({id: params.user_id})
  }
  return { props: { user } }
}

export default function UsersPage({ user }) {
  console.log(user)
  return (
    <App>
      {user ? (<AdminUser />) : (<AdminUsers />)}
    </App>
  )
}
