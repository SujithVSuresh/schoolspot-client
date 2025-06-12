import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    children: React.ReactNode;
    isLogin: boolean;
}


const ProtectedRoute = ({children, isLogin}: ProtectedRouteProps) => {
    const student = useSelector((state: RootState) => state.student)

    if (isLogin && !student.accessToken) {
        return <Navigate to="/student/signin" replace />;
      }
      
      if(!isLogin && student.accessToken && student.status == "active"){
        return <Navigate to="/student/home" replace />;
      }
  
      return (
      <>{children}</>
      );
}

export default ProtectedRoute