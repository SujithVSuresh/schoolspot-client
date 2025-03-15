import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    children: React.ReactNode;
    isLogin: boolean;
}


const ProtectedRoute = ({children, isLogin}: ProtectedRouteProps) => {
    const teacher = useSelector((state: RootState) => state.teacher)

    if (isLogin && !teacher.accessToken) {
        return <Navigate to="/teacher/signin" replace />;
      }
      
      if(!isLogin && teacher.accessToken && teacher.status == "active"){
        return <Navigate to="/teacher" replace />;
      }
  
    
      return (
      <>{children}</>
      );
}

export default ProtectedRoute