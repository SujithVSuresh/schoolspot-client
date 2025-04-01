import logo from "../../../assets/images/dotlogo.png";
import { Bell } from "lucide-react";

const TeacherHome = () => {


  return (
    <div className="bg-white">

    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <img src={logo} alt="" className="w-10 h-10"/>
          </div>
        </div>
        <div className="flex space-x-8">
          <a href="#" className="font-medium text-gray-900 border-b-2 border-gray-900 pb-1">Dashboard</a>
          <a href="#" className="font-medium text-gray-500 hover:text-gray-900 transition-colors">Prepare</a>
          <a href="#" className="font-medium text-gray-500 hover:text-gray-900 transition-colors">Teach</a>
          <a href="#" className="font-medium text-gray-500 hover:text-gray-900 transition-colors">Assess</a>
          <a href="#" className="font-medium text-gray-500 hover:text-gray-900 transition-colors">Monitor</a>
        </div>
        <div className="flex items-center space-x-6">
          <button className="text-gray-500 hover:text-gray-900 transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          
          {/* <Avatar className="w-8 h-8 ring-2 ring-offset-2 ring-gray-200 cursor-pointer transition-all hover:ring-gray-300" /> */}
        </div>
      </nav>
      <div className="min-h-screen">
      </div>
    </div>
  )
}

export default TeacherHome
