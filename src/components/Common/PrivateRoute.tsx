
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: JSX.Element
}

export const PrivateRoute = (props: PrivateRouteProps) => {

  // See if you're signed in 
  const isLoggedIn = Boolean(localStorage.getItem("access_token"));

  if (!isLoggedIn) return <Navigate to="/login" />

  return props.children;
}
