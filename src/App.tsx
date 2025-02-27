import { BrowserRouter as Router } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import AdminRoute from './features/admin/routes/AdminRoute';


function App() {
  return (
    <>
     <ToastContainer />
    <Router>
        <AdminRoute />

    </Router>
    </>
  )
}

export default App
