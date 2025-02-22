import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './features/admin/pages/Signup';
import Signin from './features/admin/pages/Signin';
import ResetPassword from './features/admin/pages/ResetPassword';
import ResetPasswordForm from './features/admin/pages/ResetPasswordForm';
import Otp from './features/admin/pages/Otp';
import Student from './features/admin/pages/Student';
import ProtectedRoute from './features/admin/routes/ProtectedRoute';
import Teachers from './features/admin/pages/Teachers';
import AdminProfile from './features/admin/pages/AdminProfile';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
     <ToastContainer />
    <Router>
      <Routes>
        <Route path="/signup" element={<ProtectedRoute isLogin={false}><Signup /></ProtectedRoute>} />
        <Route path="/signin" element={<ProtectedRoute isLogin={false}><Signin /></ProtectedRoute>} />
        <Route path="/signin/forgot" element={<ProtectedRoute isLogin={false}><ResetPassword /></ProtectedRoute>} />
        <Route path="/signin/reset-password" element={<ProtectedRoute isLogin={false}><ResetPasswordForm /></ProtectedRoute>} />
        {/* <Route path="/pricing" element={<ProtectedRoute isLogin={true}></ProtectedRoute><Pricing />} /> */}
        {/* <Route path="/school-info" element={<ProtectedRoute isLogin={true}></ProtectedRoute><SchoolInfoForm />} /> */}
        <Route path="/otp" element={<ProtectedRoute isLogin={false}><Otp /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute isLogin={true}><AdminProfile /></ProtectedRoute>} />

        <Route path="/students" element={<ProtectedRoute isLogin={true}><Student /></ProtectedRoute>} />
        <Route path="/teachers" element={<ProtectedRoute isLogin={true}><Teachers /></ProtectedRoute>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
