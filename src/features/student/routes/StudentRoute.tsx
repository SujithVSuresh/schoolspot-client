import { Route, Routes } from "react-router-dom";
import StudentSignin from "../pages/StudentSignin";
import StudentLayout from "../pages/StudentLayout/StudentLayout";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
import Attendance from "../pages/Attendance/Attendance";

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

      <Route path="/student" element={<StudentLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="attendance" element={<Attendance />} />
      </Route>
    </Routes>
  );
};

export default StudentRoute;
