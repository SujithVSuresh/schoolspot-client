import { BrowserRouter as Router } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import AdminRoute from "./features/admin/routes/AdminRoute";

function App() {
  return (
    <div className="font-inter">
      <ToastContainer />
      <Router>
        <AdminRoute />
      </Router>
    </div>
  );
}

export default App;
