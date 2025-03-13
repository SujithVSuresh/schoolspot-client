import { Route, Routes } from 'react-router-dom'
import StudentSignin from '../pages/StudentSignin'
import StudentHome from '../pages/StudentHome'
import ProtectedRoute from './ProtectedRoute'



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
       <Route
     path="/student"
     element={
        <ProtectedRoute isLogin={true}>
         <StudentHome />
         </ProtectedRoute>
     }
   />
   </Routes>
  )
}

export default StudentRoute
