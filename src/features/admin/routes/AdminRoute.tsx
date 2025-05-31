import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import ResetPassword from "../pages/ResetPassword";
import ResetPasswordForm from "../pages/ResetPasswordForm";
import Otp from "../pages/Otp";
import AdminProfile from "../pages/AdminProfile/AdminProfile";
import Pricing from "../pages/Pricing";
import SchoolInfoFormPage from "../pages/SchoolInfoFormPage/SchoolInfoFormPage";
import Home from "../pages/Home";
import Announcement from "../pages/Announcement/Announcement";
import Dashboard from "../pages/Dashboard";
import Overview from "../pages/Overview/Overview";
import Student from "../pages/Student/Student";
import Teacher from "../pages/Teacher/Teacher";
import AddStudent from "../pages/AddStudent/AddStudent";
import AddTeacher from "../pages/AddTeacher";
import StudentProfile from "../pages/StudentProfile/StudentProfile";
import TeacherProfile from "../pages/TeacherProfile/TeacherProfile";
import Classes from "../pages/Classes/Classes";
import AddClass from "../pages/AddClass/AddClass";
import ClassProfile from "../pages/ClassProfile/ClassProfile";
import AddAttendance from "../pages/AddAttendance/AddAttendance";
import AddAnnouncement from "../pages/AddAnnouncement/AddAnnouncement";
import AddSubject from "../pages/AddSubject/AddSubject";
import UpdateStudentProfile from "../pages/UpdateStudentProfile/UpdateStudentProfile";
import SignupProfile from "../pages/SignupProfile/SignupProfile";
import ChangePassword from "../pages/ChangePassword/ChangePassword";
import UpdateAnnouncement from "../pages/UpdateAnnouncement/UpdateAnnouncement";
import UpdateClass from "../pages/UpdateClass/UpdateClass";
import UpdateSubject from "../pages/UpdateSubject/UpdateSubject";
import CreateInvoice from "../pages/CreateInvoice/CreateInvoice";
import UpdateTeacherProfile from "../pages/UpdateTeacherProfile/UpdateTeacherProfile";
import Subscription from "../pages/Subscription/Subscription";
import CreateExam from "../pages/CreateExam/CreateExam";
import ExamDetails from "../pages/ExamDetails/ExamDetails";
import AddMarks from "../pages/AddMarks/AddMarks";
import AddTimetable from "../pages/AddTimetable/AddTimetable";
import ClassStudents from "../pages/ClassStudents/ClassStudents";
import ClassSubjects from "../pages/ClassSubjects/ClassSubjects";
import ClassAttendance from "../pages/ClassAttendance/ClassAttendance";
import ClassExams from "../pages/ClassExams/ClassExams";
import ClassInvoices from "../pages/ClassInvoices/ClassInvoices";
import ClassTimetable from "../pages/ClassTimetable/ClassTimetable";

const AdminRoute = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute isLogin={false}>
            {" "}
            <Home />{" "}
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
        path="/signup/profile"
        element={
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
      <Route path="/signin/forgot" element={<ResetPassword />} />
      <Route path="/signin/reset-password" element={<ResetPasswordForm />} />

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
        }
      />
      <Route
        path="/profile/subscription"
        element={
          <ProtectedRoute isLogin={true}>
            <Subscription />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute isLogin={true}>
            <Dashboard />
          </ProtectedRoute>
        }
      >
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
        <Route
          path="teachers/profile/:id/update"
          element={<UpdateTeacherProfile />}
        />
        <Route path="classes" element={<Classes />} />
        <Route path="classes/new" element={<AddClass />} />
        <Route path="classes/:classId/update" element={<UpdateClass />} />
        <Route path="classes/subject/new/:classId" element={<AddSubject />} />
        <Route
          path="classes/subject/:subjectId/update/:classId"
          element={<UpdateSubject />}
        />

        <Route path="classes/profile/:id" element={<ClassProfile />}>
          <Route path="students" element={<ClassStudents />} />
          <Route path="subjects" element={<ClassSubjects />} />
          <Route path="attendance" element={<ClassAttendance />} />
          <Route path="exams" element={<ClassExams />} />
          <Route path="invoices" element={<ClassInvoices />} />
          <Route path="timetable" element={<ClassTimetable />} />
        </Route>

        <Route path="announcement" element={<Announcement />} />
        <Route path="announcement/new" element={<AddAnnouncement />} />
        <Route
          path="announcement/:announcementId/update"
          element={<UpdateAnnouncement />}
        />
        <Route path="attendance/new/:classId" element={<AddAttendance />} />
        <Route
          path="classes/:classId/invoice/new"
          element={<CreateInvoice />}
        />
        <Route path="classes/:classId/exam/new" element={<CreateExam />} />
        <Route path="classes/:classId/exam/:examId" element={<ExamDetails />} />
        <Route
          path="classes/:classId/exam/:examId/marks/:subject"
          element={<AddMarks />}
        />

        <Route
          path="classes/:classId/timetable/new"
          element={<AddTimetable />}
        />
      </Route>
    </Routes>
  );
};

export default AdminRoute;
