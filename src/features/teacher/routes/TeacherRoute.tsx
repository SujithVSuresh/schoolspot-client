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

const TeacherRoute = () => {
  return (
    <Routes>
       <Route path="/teacher" element={<TeacherLayout />}>
    
      <Route path="" element={<ProtectedRoute isLogin={true}><TeacherHome /></ProtectedRoute>}/>

      <Route path="signin" element={<ProtectedRoute isLogin={false}><TeacherSignin /></ProtectedRoute>}/>

      <Route path="classes"element={<ProtectedRoute isLogin={true}><Classes /></ProtectedRoute>}/>

      <Route path="classes/:id"element={<ProtectedRoute isLogin={true}><ClassDetails /></ProtectedRoute>}>

        <Route path="students"element={<ProtectedRoute isLogin={true}><TeacherStudents /></ProtectedRoute>}/>
        <Route path="assignments"element={<ProtectedRoute isLogin={true}><TeacherAssignments /></ProtectedRoute>}/>
        <Route path="assignments/:id"element={<ProtectedRoute isLogin={true}><AssignmentDetails /></ProtectedRoute>}/>
        <Route path="study-materials"element={<ProtectedRoute isLogin={true}><TeacherStudyMaterials /></ProtectedRoute>}/>
        <Route path="study-materials/:id"element={<ProtectedRoute isLogin={true}><StudyMaterialDetails /></ProtectedRoute>}/>

      </Route>

      </Route>
    </Routes>
  );
};

export default TeacherRoute;
