import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import ResetPassword from "../pages/ResetPassword";
import ResetPasswordForm from "../pages/ResetPasswordForm";
import Otp from "../pages/Otp";
import AdminProfile from "../pages/AdminProfile";
import Pricing from "../pages/Pricing";
import SchoolInfoFormPage from "../pages/SchoolInfoFormPage";
import Home from "../pages/Home";
import Announcement from "../pages/Announcement";

import Dashboard from "../pages/Dashboard";
import Overview from "../pages/Overview";
import Student from "../pages/Student/Student";
import Teacher from "../pages/Teacher";
import AddStudent from "../pages/AddStudent";
import AddTeacher from "../pages/AddTeacher";
import StudentProfile from "../pages/StudentProfile";
import TeacherProfile from "../pages/TeacherProfile";
import Classes from "../pages/Classes";
import AddClass from "../pages/AddClass";
import ClassProfile from "../pages/ClassProfile";

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

      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="overview" element={<Overview />} />
        <Route path="students" element={<Student />} />
        <Route path="students/new" element={<AddStudent />} />
        <Route path="students/profile/:id" element={<StudentProfile />} />
        <Route path="teachers" element={<Teacher />} />
        <Route path="teachers/new" element={<AddTeacher />} />
        <Route path="teachers/profile/:id" element={<TeacherProfile />} />
        <Route path="classes" element={<Classes />} />
        <Route path="classes/new" element={<AddClass />} />
        <Route path="classes/profile/:id" element={<ClassProfile />} />
        <Route path="announcement" element={<Announcement />}/>
      </Route>
    </Routes>
  );
};

export default AdminRoute;
