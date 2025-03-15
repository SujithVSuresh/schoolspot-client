import { Route, Routes } from 'react-router-dom'
import TeacherSignin from '../pages/TeacherSignin'
import ProtectedRoute from './ProtectedRoute'
import TeacherHome from '../pages/TeacherHome'


const TeacherRoute = () => {
  return (
    <Routes>
    <Route
     path="/teacher/signin"
     element={<TeacherSignin />}
   />

<Route
     path="/teacher"
     element={
        <ProtectedRoute isLogin={true}>
         <TeacherHome />
         </ProtectedRoute>
     }
   />
   </Routes>
  )
}

export default TeacherRoute