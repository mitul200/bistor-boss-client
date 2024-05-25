import useAuth from "../useHooks/useAuth";
import useAdmin from "../useHooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
