import { Route, Routes } from 'react-router-dom'
import TeacherSignin from '../pages/TeacherSignin'


const TeacherRoute = () => {
  return (
    <Routes>
    <Route
     path="/teacher/signin"
     element={<TeacherSignin />}
   />
   </Routes>
  )
}

export default TeacherRoute