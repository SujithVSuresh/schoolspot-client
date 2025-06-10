import logo from "../../../assets/images/dotlogo.png";
import { Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <img src={logo} alt="" className="w-10 h-10" />
        </div>
      </div>
      {/* <div className="flex space-x-8">
          <Link to={'/teacher'} className={`font-medium ${location.pathname == "/teacher" ? "text-gray-900 border-b-2 border-gray-900 pb-1" : "text-gray-500 hover:text-gray-900 transition-colors"}`}>Home</Link>
          <Link to={'/teacher/classes'} className={`font-medium ${pathName[2] == "classes" ? "text-gray-900 border-b-2 border-gray-900 pb-1" : "text-gray-500 hover:text-gray-900 transition-colors"}`}>Classes</Link>
        </div> */}
      <div className="flex items-center space-x-6">
        <button
          onClick={() => navigate("/teacher/notification")}
          className="text-gray-500 bg-gray-50 p-3 rounded-full hover:text-gray-900 transition-colors"
        >
          <Bell className="w-5 h-5" />
        </button>

        <img
          onClick={() => navigate("/teacher/profile")}
          className="w-8 h-8 ring-2 ring-offset-2 rounded-full ring-gray-200 cursor-pointer transition-all hover:ring-gray-300 object-cover"
          src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      </div>
    </nav>
  );
};

export default Header;
