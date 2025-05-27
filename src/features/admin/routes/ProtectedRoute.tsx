import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { Navigate } from "react-router-dom";


interface ProtectedRouteProps {
    children: React.ReactNode;
    isLogin: boolean;
}


const ProtectedRoute = ({ children, isLogin }: ProtectedRouteProps) => {
    const user = useSelector((state: RootState) => state.admin)

    if (isLogin===true && !user?.accessToken) {
      return <Navigate to="/signin" replace />;
    }


    if(isLogin===false && user?.accessToken && user?.status === "active"){
      return <Navigate to="/dashboard/students" replace />;
    }

    if(user?.accessToken && user?.status === "inactive" && window.location.pathname !== "/signup/profile"){
      return <Navigate to="/signup/profile" replace />
    }
  
    return (
    <>{children}</>
    );
  };
  
  export default ProtectedRoute;