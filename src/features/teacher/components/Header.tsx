import logo from "../../../assets/images/dotlogo.png";
import { Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation()

  const pathName = location.pathname.split("/")

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <img src={logo} alt="" className="w-10 h-10"/>
          </div>
        </div>
        <div className="flex space-x-8">
          <Link to={'/teacher'} className={`font-medium ${location.pathname == "/teacher" ? "text-gray-900 border-b-2 border-gray-900 pb-1" : "text-gray-500 hover:text-gray-900 transition-colors"}`}>Home</Link>
          <Link to={'/teacher/classes'} className={`font-medium ${pathName[2] == "classes" ? "text-gray-900 border-b-2 border-gray-900 pb-1" : "text-gray-500 hover:text-gray-900 transition-colors"}`}>Classes</Link>
         
        </div>
        <div className="flex items-center space-x-6">
          <button className="text-gray-500 hover:text-gray-900 transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          
          {/* <Avatar className="w-8 h-8 ring-2 ring-offset-2 ring-gray-200 cursor-pointer transition-all hover:ring-gray-300" /> */}
        </div>
      </nav>
  );
};

export default Header;
