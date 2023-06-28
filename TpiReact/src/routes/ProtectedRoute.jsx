import Loader from "../components/shared/Loader/Loader";
import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <Loader />;

  if (!user) return <Navigate to={"/"} />;

  return <>{children}</>;
};
export default ProtectedRoute;
