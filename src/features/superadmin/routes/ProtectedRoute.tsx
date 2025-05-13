import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    children: React.ReactNode;
    isLogin: boolean;
}


const ProtectedRoute = ({children, isLogin}: ProtectedRouteProps) => {
    const superadmin = useSelector((state: RootState) => state.superAdmin)

    if (isLogin && !superadmin.accessToken) {
        return <Navigate to="/superadmin/login" replace />;
      }
      
      if(!isLogin && superadmin.accessToken){
        return <Navigate to="/superadmin/dashboard" replace />;
      }
  
      return (
      <>{children}</>
      );
}

export default ProtectedRoute