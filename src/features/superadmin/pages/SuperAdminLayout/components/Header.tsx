import logo from "../../../../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeSuperAdmin } from "../../../redux/superadminSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(removeSuperAdmin());
  };
  return (
    <header className="container border-b flex items-center justify-between px-8 py-4">
      <img src={logo} alt="Logo" className="lg:h-10 md:h-8 h-8" />

      <div className="flex gap-6 text-sm font-medium">
        <NavLink
          to="/superadmin/plans"
          className={({ isActive }) =>
            isActive ? "underline text-blue-700" : "hover:text-blue-600"
          }
        >
          Plans
        </NavLink>
        <NavLink
          to="/superadmin/schools"
          className={({ isActive }) =>
            isActive ? "underline text-blue-700" : "hover:text-blue-600"
          }
        >
          Schools
        </NavLink>
        <span className="hover: cursor-pointer" onClick={() => handleLogout()}>
          Logout
        </span>
      </div>
    </header>
  );
};

export default Header;
