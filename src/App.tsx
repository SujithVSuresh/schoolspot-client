import { BrowserRouter as Router } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import AdminRoute from "./features/admin/routes/AdminRoute";
import StudentRoute from "./features/student/routes/StudentRoute";
import TeacherRoute from "./features/teacher/routes/TeacherRoute";
import SuperAdminRoute from "./features/superadmin/routes/SuperAdminRoute";



function App() {
  return (
    <div className="font-inter">
      <Toaster />
      <Router>
        <AdminRoute />
        <StudentRoute />
        <TeacherRoute />
        <SuperAdminRoute />
      </Router>
    </div>
  );
}

export default App;
