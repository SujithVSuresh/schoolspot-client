import Header from '../../components/Header'
import { Outlet } from 'react-router-dom'

const TeacherLayout = () => {
  return (
    <div className="bg-white">
    <Header />


    <div className="min-h-screen p-5">

        <Outlet />


    </div>
  </div>
  )
}

export default TeacherLayout
