import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { Navigate } from "react-router-dom";


interface ProtectedRouteProps {
    children: React.ReactNode;
    isLogin: boolean;
}


const ProtectedRoute = ({ children, isLogin }: ProtectedRouteProps) => {
    const user = useSelector((state: RootState) => state.admin)

    if (isLogin && !user.accessToken) {
      return <Navigate to="/signin" replace />;
    }
    
    if(!isLogin && user.accessToken && user.status == "active"){
      return <Navigate to="/students" replace />;
    }

  
    return (
    <>{children}</>
    );
  };
  
  export default ProtectedRoute;