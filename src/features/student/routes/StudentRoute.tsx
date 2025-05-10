import { Route, Routes } from "react-router-dom";
import StudentSignin from "../pages/StudentSignin";
import StudentLayout from "../pages/StudentLayout/StudentLayout";
import ProtectedRoute from "./ProtectedRoute";
import Subjects from "../pages/Subjects/Subjects";
import Home from "../pages/Home/Home";
import Attendance from "../pages/Attendance/Attendance";
import Invoices from "../pages/Invoices/Invoices";
import ExamResults from "../pages/ExamResults/ExamResults";
import SubjectDetails from "../pages/SubjectDetails/SubjectDetails";
import Assignments from "../pages/Assignments/Assignments";
import StudyMaterials from "../pages/StudyMaterials/StudyMaterials";
import Chapters from "../pages/Chapters/Chapters";
import AssignmentDetails from "../pages/AssignmentDetails/AssignmentDetails";
import StudyMaterialDetails from "../pages/StudyMaterialDetails/StudyMaterialDetails";
import StudentProfile from "../pages/StudentProfile/StudentProfile";
import Announcements from "../pages/Announcements/Announcements";
import ChangePassword from "../pages/ChangePassword/ChangePassword";
import InvoiceDetailsPage from "../pages/InvoiceDetails/InvoiceDetails";
import AttendanceList from "../pages/AttendanceList/AttendanceList";
import LeaveLetters from "../pages/LeaveLetters/LeaveLetters";
import Chat from "../pages/Chat/Chat";
import Notifications from "../pages/Notifications/Notifications";
import CreateLeaveLetter from "../pages/CreateLeaveLetter/CreateLeaveLetter";

const StudentRoute = () => {
  return (
    <Routes>
      <Route
        path="/student/signin"
        element={
          <ProtectedRoute isLogin={false}>
            <StudentSignin />
          </ProtectedRoute>
        }
      />


      <Route path="/student" element={<ProtectedRoute isLogin={true}><StudentLayout /></ProtectedRoute>}>
        <Route path="home" element={<Home />} />
        <Route path="subjects" element={<Subjects />} />

        <Route path="subjects/:id" element={<SubjectDetails />} >
            <Route path="assignments" element={<Assignments />} />
            <Route path="assignments/:id" element={<AssignmentDetails />} />
            <Route path="study-materials" element={<StudyMaterials />} />
            <Route path="study-materials/:id" element={<StudyMaterialDetails />} />
            <Route path="chapters" element={<Chapters />} />
        </Route>
        
        <Route path="attendance/leave-letter/add" element={<CreateLeaveLetter />} />

        <Route path="attendance" element={<Attendance />} >
            <Route path="" element={<AttendanceList />} />
            <Route path="leave-letter" element={<LeaveLetters />} />
            
        </Route>
        <Route
        path="notification"
        element={
          <ProtectedRoute isLogin={true}>
            <Notifications />
          </ProtectedRoute>
        }
      />

        <Route path="invoices" element={<Invoices />} />
        <Route path="invoices/:invoiceId" element={<InvoiceDetailsPage />} />
        <Route path="exam-results" element={<ExamResults />} />
        <Route path="announcements" element={<Announcements />} />
        <Route path="chat" element={<Chat />} />
        <Route path="profile" element={<StudentProfile />} />
        <Route path="change-password" element={<ChangePassword />} />
      </Route>
    </Routes>
  );
};

export default StudentRoute;
