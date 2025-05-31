import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import ProtectedRoute from "./ProtectedRoute";
import Plans from "../pages/Plans/Plans";
import SuperAdminLayout from "../pages/SuperAdminLayout/SuperAdminLayout";
import AddPlan from "../pages/AddPlan/AddPlan";
import EditPlan from "../pages/EditPlan/EditPlan";
import Schools from "../pages/Schools/Schools";
import SchoolProfile from "../pages/SchoolProfile/SchoolProfile";

const SuperAdminRoute = () => {
  return (
    <Routes>
      <Route path="/superadmin" element={<SuperAdminLayout />}>
        <Route
          path="login"
          element={
            <ProtectedRoute isLogin={false}>
              <Login />
            </ProtectedRoute>
          }
        />

        <Route
          path="plans"
          element={
            <ProtectedRoute isLogin={true}>
              <Plans />
            </ProtectedRoute>
          }
        />

         <Route
          path="plans/add"
          element={
            <ProtectedRoute isLogin={true}>
              <AddPlan />
            </ProtectedRoute>
          }
        />

        <Route
          path="plans/edit/:planId"
          element={
            <ProtectedRoute isLogin={true}>
              <EditPlan />
            </ProtectedRoute>
          }
        />

        <Route
          path="schools"
          element={
            <ProtectedRoute isLogin={true}>
              <Schools />
            </ProtectedRoute>
          }
        />

        <Route
          path="schools/:schoolId"
          element={
            <ProtectedRoute isLogin={true}>
              <SchoolProfile />
            </ProtectedRoute>
          }
        />

        
      </Route>
    </Routes>
  );
};

export default SuperAdminRoute;
