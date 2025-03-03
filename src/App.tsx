import { BrowserRouter as Router } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import AdminRoute from "./features/admin/routes/AdminRoute";

function App() {
  return (
    <div className="font-inter">
      <Toaster />
      <Router>
        <AdminRoute />
      </Router>
    </div>
  );
}

export default App;
