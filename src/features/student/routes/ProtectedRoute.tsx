import React from "react";

interface ProtectedRouteProps {
    children: React.ReactNode;
    isLogin: boolean;
}