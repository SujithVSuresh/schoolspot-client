import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import ResetPassword from "../pages/ResetPassword";
import ResetPasswordForm from "../pages/ResetPasswordForm";
import Otp from "../pages/Otp";
import AdminProfile from "../pages/AdminProfile";
import Student from "../pages/Student";
import Teachers from "../pages/Teachers";
import Pricing from "../pages/Pricing";
import SchoolInfoFormPage from "../pages/SchoolInfoFormPage";
import Home from "../pages/Home";

const AdminRoute = () => {
  return (
    <Routes>
       <Route
        path="/"
        element={
          <ProtectedRoute isLogin={false}>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <ProtectedRoute isLogin={false}>
            <Signup />
          </ProtectedRoute>
        }
      />
      <Route
        path="/signin"
        element={
          <ProtectedRoute isLogin={false}>
            <Signin />
          </ProtectedRoute>
        }
      />
      <Route
        path="/signin/forgot"
        element={
          <ProtectedRoute isLogin={false}>
            <ResetPassword />
          </ProtectedRoute>
        }
      />
      <Route
        path="/signin/reset-password"
        element={
          <ProtectedRoute isLogin={false}>
            <ResetPasswordForm />
          </ProtectedRoute>
        }
      />
      <Route
        path="/pricing"
        element={
          <ProtectedRoute isLogin={true}>
            <Pricing />
          </ProtectedRoute>
        }
      />
      <Route
        path="/school-info"
        element={
          <ProtectedRoute isLogin={false}>
            <SchoolInfoFormPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/otp"
        element={
          <ProtectedRoute isLogin={false}>
            <Otp />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute isLogin={true}>
            <AdminProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/students"
        element={
          <ProtectedRoute isLogin={true}>
            <Student />
          </ProtectedRoute>
        }
      />
      <Route
        path="/teachers"
        element={
          <ProtectedRoute isLogin={true}>
            <Teachers />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AdminRoute;
