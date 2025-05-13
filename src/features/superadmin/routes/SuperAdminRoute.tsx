import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
import Plans from "../pages/Plans/Plans";
import SuperAdminLayout from "../pages/SuperAdminLayout/SuperAdminLayout";
import AddPlan from "../pages/AddPlan/AddPlan";
import EditPlan from "../pages/EditPlan/EditPlan";

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
          path="dashboard"
          element={
            <ProtectedRoute isLogin={true}>
              <Dashboard />
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
          path="plans/edit/:id"
          element={
            <ProtectedRoute isLogin={true}>
              <EditPlan />
            </ProtectedRoute>
          }
        />

        
      </Route>
    </Routes>
  );
};

export default SuperAdminRoute;
