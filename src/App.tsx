import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/admin/Signup';
import Signin from './pages/admin/Signin';
import ResetPassword from './pages/admin/ResetPassword';
import Pricing from './pages/admin/Pricing';
import SchoolInfoForm from './pages/admin/SchoolInfoForm';
import Otp from './pages/admin/Otp';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signin/forgot" element={<ResetPassword />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/school-info" element={<SchoolInfoForm />} />
        <Route path="/otp" element={<Otp />} />
      </Routes>
    </Router>
  )
}

export default App
