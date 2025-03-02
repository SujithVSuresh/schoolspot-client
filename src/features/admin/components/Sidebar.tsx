
import dotlogo from "../../../assets/images/dotlogo.png";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


import {
  Users,
  LayoutDashboard,
  Settings,
  HelpCircle,
  BarChart3,
  FileText,
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
            className={`flex hover: cursor-pointer items-center justify-center p-5 ${location.pathname == '/dashboard' && 'bg-blue-600'} hover:bg-blue-700 rounded-md group`}
          >
            <LayoutDashboard className="h-5 w-5" />
          </a>
          <a
            onClick={() => navigate('/students')}
            className={`flex hover: cursor-pointer items-center justify-center p-5 ${location.pathname == '/students' && 'bg-blue-600'} hover:bg-blue-700 rounded-md group`}
          >
            <Users className="h-5 w-5" />
          </a>
          <a
            onClick={() => navigate('/teachers')}
            className={`flex hover: cursor-pointer items-center justify-center p-5 ${location.pathname == '/teachers' && 'bg-blue-600'} hover:bg-blue-700 rounded-md group`}
          >
            <BarChart3 className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="flex items-center justify-center p-5 text-indigo-100 hover:bg-indigo-800 rounded-md group"
          >
            <FileText className="h-5 w-5" />
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
