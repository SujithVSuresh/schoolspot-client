import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { Navigate } from "react-router-dom";


interface ProtectedRouteProps {
    children: React.ReactNode;
}


const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const user = useSelector((state: RootState) => state.admin)

    if (user.accessToken) {
      return <Navigate to="/students" replace />;
    }
  
    return (
    <>{children}</>
    );
  };
  
  export default ProtectedRoute;