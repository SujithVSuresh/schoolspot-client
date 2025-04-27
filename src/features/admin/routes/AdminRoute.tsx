import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import ResetPassword from "../pages/ResetPassword";
import ResetPasswordForm from "../pages/ResetPasswordForm";
import Otp from "../pages/Otp";
import AdminProfile from "../pages/AdminProfile/AdminProfile";
import Pricing from "../pages/Pricing";
import SchoolInfoFormPage from "../pages/SchoolInfoFormPage";
import Home from "../pages/Home";
import Announcement from "../pages/Announcement/Announcement";
import Dashboard from "../pages/Dashboard";
import Overview from "../pages/Overview";
import Student from "../pages/Student/Student";
import Teacher from "../pages/Teacher";
import AddStudent from "../pages/AddStudent/AddStudent";
import AddTeacher from "../pages/AddTeacher";
import StudentProfile from "../pages/StudentProfile/StudentProfile";
import TeacherProfile from "../pages/TeacherProfile";
import Classes from "../pages/Classes/Classes";
import AddClass from "../pages/AddClass/AddClass";
import ClassProfile from "../pages/ClassProfile/ClassProfile";
import AddAttendance from "../pages/AddAttendance/AddAttendance";
import AddAnnouncement from "../pages/AddAnnouncement/AddAnnouncement";
import AddSubject from "../pages/AddSubject/AddSubject";
import Invoice from "../pages/Invoice/Invoice";
import UpdateStudentProfile from "../pages/UpdateStudentProfile/UpdateStudentProfile";
import SignupProfile from "../pages/SignupProfile/SignupProfile";
import ChangePassword from "../pages/ChangePassword/ChangePassword";
import UpdateAnnouncement from "../pages/UpdateAnnouncement/UpdateAnnouncement";


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
      <Route path="/signup/profile" element={
     <ProtectedRoute isLogin={true}>
        <SignupProfile />
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
            <ResetPassword />
        }
      />
      <Route
        path="/signin/reset-password"
        element={
            <ResetPasswordForm />
   
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
        path="/profile/change-password" 
        element={
          <ProtectedRoute isLogin={true}>
            <ChangePassword />
          </ProtectedRoute>
        } />

      <Route path="/dashboard" element={<ProtectedRoute isLogin={true}><Dashboard /></ProtectedRoute>}>
        <Route path="overview" element={<Overview />} />
        <Route path="students" element={<Student />} />
        <Route path="students/new/:classId" element={<AddStudent />} />
        <Route path="students/profile/:id" element={<StudentProfile />} />
        <Route
          path="students/profile/:id/update"
          element={<UpdateStudentProfile />}
        />
        <Route path="teachers" element={<Teacher />} />
        <Route path="teachers/new" element={<AddTeacher />} />
        <Route path="teachers/profile/:id" element={<TeacherProfile />} />
        <Route path="classes" element={<Classes />} />
        <Route path="classes/new" element={<AddClass />} />
        <Route path="classes/subject/new/:classId" element={<AddSubject />} />
        <Route path="classes/profile/:id" element={<ClassProfile />} />
        <Route path="announcement" element={<Announcement />} />
        <Route path="announcement/new" element={<AddAnnouncement />} />
        <Route path="announcement/:announcementId/update" element={< UpdateAnnouncement/>} />
        <Route path="attendance/new/:classId" element={<AddAttendance />} />
        <Route path="classes/invoice/:classId" element={<Invoice />} />
        
      </Route>
    </Routes>
  );
};

export default AdminRoute;
