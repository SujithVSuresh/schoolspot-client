import { Route, Routes } from 'react-router-dom'
import StudentSignin from '../pages/StudentSignin'


const StudentRoute = () => {
  return (
    <Routes>
    <Route
     path="/student/signin"
     element={
         <StudentSignin />
     }
   />
   </Routes>
  )
}

export default StudentRoute
