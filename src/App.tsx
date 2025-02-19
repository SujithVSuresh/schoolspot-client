import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './features/admin/pages/Signup';
import Signin from './features/admin/pages/Signin';
import ResetPassword from './features/admin/pages/ResetPassword';
import Pricing from './features/admin/pages/Pricing';
import SchoolInfoForm from './features/admin/pages/SchoolInfoForm';
import Otp from './features/admin/pages/Otp';

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
