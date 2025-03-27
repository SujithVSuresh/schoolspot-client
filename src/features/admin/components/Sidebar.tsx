
import dotlogo from "../../../assets/images/dotlogo.png";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { SiGoogleclassroom } from "react-icons/si";
import { TfiAnnouncement } from "react-icons/tfi";
import { PiStudentBold } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";






import {
  LayoutDashboard,
  Settings,
  HelpCircle,
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div
      className={`fixed min-h-screen inset-y-0 left-0 z-30 w-20 h-full bg-blue-800 text-white transform transition duration-300 md:translate-x-0`}
    >
      <div className="flex items-center justify-center border-b h-16 border-indigo-800">
        <div className="flex items-center">
          <img src={dotlogo} alt="" className="h-10" />
        </div>

      </div>

      <nav className="mt-5 px-2">
        <div className="space-y-1">
          <a
          onClick={() => navigate('/dashboard/overview')}
            className={`flex hover: cursor-pointer items-center justify-center p-5 ${location.pathname == '/dashboard/overview' && 'bg-blue-600'} hover:bg-blue-700 rounded-md group`}
          >
            <LayoutDashboard className="h-5 w-5" />
          </a>
          <a
            onClick={() => navigate('/dashboard/students')}
            className={`flex hover: cursor-pointer items-center justify-center p-5 ${location.pathname == '/dashboard/students' && 'bg-blue-600'} hover:bg-blue-700 rounded-md group`}
          >
            <PiStudentBold className="h-5 w-7" />
          </a>
          <a
            onClick={() => navigate('/dashboard/teachers')}
            className={`flex hover: cursor-pointer items-center justify-center p-5 ${location.pathname == '/dashboard/teachers' && 'bg-blue-600'} hover:bg-blue-700 rounded-md group`}
          >
            <FaChalkboardTeacher className="h-5 w-5" />
          </a>
          <a
            onClick={() => navigate('/dashboard/classes')}
            className={`flex hover: cursor-pointer items-center justify-center p-5 ${location.pathname == '/dashboard/classes' && 'bg-blue-600'} hover:bg-blue-700 rounded-md group`}
          >
            <SiGoogleclassroom className="h-5 w-5" />
          </a>

          <a
            onClick={() => navigate('/dashboard/announcement')}
            className={`flex hover: cursor-pointer items-center justify-center p-5 ${location.pathname == '/dashboard/announcement' && 'bg-blue-600'} hover:bg-blue-700 rounded-md group`}
          >
            <TfiAnnouncement className="h-5 w-5" />
          </a>
   
        </div>

        <div className="mt-10 pt-6 border-t border-indigo-800">
          <div className="space-y-1">
            <a
              href="#"
              className="flex items-center justify-center p-5 text-indigo-100 hover:bg-indigo-800 rounded-md group"
            >
              <Settings className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center p-5 text-indigo-100 hover:bg-indigo-800 rounded-md group"
            >
              <HelpCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
