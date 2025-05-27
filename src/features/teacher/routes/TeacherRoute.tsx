import { Route, Routes } from "react-router-dom";
import TeacherSignin from "../pages/TeacherSignin/TeacherSignin";
import ProtectedRoute from "./ProtectedRoute";
import TeacherHome from "../pages/Home/Home";
import Classes from "../pages/Classes/Classes";
import TeacherLayout from "../pages/TeacherLayout/TeacherLayout";
import ClassDetails from "../pages/ClassDetails/ClassDetails";
import TeacherStudents from "../pages/TeacherStudents/TeacherStudents";
import TeacherAssignments from "../pages/TeacherAssignments/TeacherAssignments";
import TeacherStudyMaterials from "../pages/TeacherStudyMaterials/TeacherStudyMaterials";
import AssignmentDetails from "../pages/AssignmentDetails/AssignmentDetails";
import StudyMaterialDetails from "../pages/StudyMaterialDetails/StudyMaterialDetails";
import TeacherAttendance from "../pages/TeacherAttendance/TeacherAttendance";
import AddAssignment from "../pages/AddAssignment/AddAssignment";
import AddStudyMaterial from "../pages/AddStudyMaterial/AddStudyMaterial";
import TeacherProfile from "../pages/TeacherProfile/TeacherProfile";
import AddAttendance from "../pages/AddAttendance/AddAttendance";
import Announcement from "../pages/Announcements/Announcements";
import ExamResult from "../pages/ExamResult/ExamResult";
import ChangePassword from "../pages/ChangePassword/ChangePassword";
import UpdateStudyMaterial from "../pages/UpdateStudyMaterial/UpdateStudyMaterial";
import UpdateAssignment from "../pages/UpdateAssignment/UpdateAssignment";
import AddAnnouncement from "../pages/AddAnnouncement/AddAnnouncement";
import UpdateAnnouncement from "../pages/UpdateAnnouncement/UpdateAnnouncement";
import Chat from "../pages/Chat/Chat";
import Notification from "../pages/Notification/Notification";
import Exam from "../pages/Exam/Exam";
import ExamDetails from "../pages/ExamDetails/ExamDetails";

const TeacherRoute = () => {
  return (
    <Routes>
        <Route path="/teacher/signin" element={<ProtectedRoute isLogin={false}><TeacherSignin /></ProtectedRoute>}/>

       <Route path="/teacher" element={<TeacherLayout />}>

       <Route path="profile" element={<ProtectedRoute isLogin={true}><TeacherProfile /></ProtectedRoute> } />
       <Route path="change-password" element={<ProtectedRoute isLogin={true}><ChangePassword /></ProtectedRoute> } />


      <Route path=""element={<ProtectedRoute isLogin={true}><Classes /></ProtectedRoute>}/>
<Route path="notification"element={<ProtectedRoute isLogin={true}><Notification /></ProtectedRoute>}/>
      <Route path="classes/:id"element={<ProtectedRoute isLogin={true}><ClassDetails /></ProtectedRoute>}>

        <Route path="students"element={<ProtectedRoute isLogin={true}><TeacherStudents /></ProtectedRoute>}/>
        <Route path="assignments"element={<ProtectedRoute isLogin={true}><TeacherAssignments /></ProtectedRoute>}/>
        <Route path="assignments/add"element={<ProtectedRoute isLogin={true}><AddAssignment /></ProtectedRoute>}/>
        <Route path="assignments/:id"element={<ProtectedRoute isLogin={true}><AssignmentDetails /></ProtectedRoute>}/>
        <Route path="assignments/:id/update"element={<ProtectedRoute isLogin={true}><UpdateAssignment /></ProtectedRoute>}/>

        <Route path="study-materials"element={<ProtectedRoute isLogin={true}><TeacherStudyMaterials /></ProtectedRoute>}/>
        <Route path="study-materials/add"element={<ProtectedRoute isLogin={true}><AddStudyMaterial /></ProtectedRoute>}/>
        <Route path="study-materials/:id"element={<ProtectedRoute isLogin={true}><StudyMaterialDetails /></ProtectedRoute>}/>
        <Route path="study-materials/:id/update"element={<ProtectedRoute isLogin={true}><UpdateStudyMaterial /></ProtectedRoute>}/>

        <Route path="announcements"element={<ProtectedRoute isLogin={true}><Announcement /></ProtectedRoute>}/>
        <Route path="announcements/add"element={<ProtectedRoute isLogin={true}><AddAnnouncement /></ProtectedRoute>}/>
        <Route path="announcements/:id/update"element={<ProtectedRoute isLogin={true}><UpdateAnnouncement /></ProtectedRoute>}/>

        <Route path="attendance"element={<ProtectedRoute isLogin={true}><TeacherAttendance /></ProtectedRoute>}/>
        <Route path="attendance/add"element={<ProtectedRoute isLogin={true}><AddAttendance /></ProtectedRoute>}/>

        <Route path="exams"element={<ProtectedRoute isLogin={true}><Exam /></ProtectedRoute>}/>
        <Route path="exams/:id"element={<ProtectedRoute isLogin={true}><ExamDetails /></ProtectedRoute>}/>

        <Route path="chat"element={<ProtectedRoute isLogin={true}><Chat /></ProtectedRoute>}/>

       
      </Route>

      </Route>
    </Routes>
  );
};

export default TeacherRoute;
