import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivetRouts = ({ children }) => {
  const { user, loding } = useContext(AuthContext);
  const location = useLocation();
  if (loding) {
    return (
      <span className="loading loading-spinner text-warning text-center"></span>
    );
  }
  if (user) {
    return children;
  }
  return (
    <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
  );
  // return <div></div>;
};

export default PrivetRouts;
