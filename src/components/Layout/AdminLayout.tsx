
import { PrivateRoute } from 'components/Common'

type AdminLayoutProps = {}

const AdminLayout = (props: AdminLayoutProps) => {
  return (
    <PrivateRoute>
      <div>AdminLayout</div>
    </PrivateRoute>
  )
}

export default AdminLayout;
