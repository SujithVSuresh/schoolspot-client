import logo from "../../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header
      className={`container mx-auto ${
        location.pathname === "/school-info" ? "lg:px-44 md:px-5 px-5" : "lg:px-10 md:px-10 px-10"
      } py-4 flex items-center justify-between`}
    >
      <img src={logo} alt="" className="lg:h-10 md:h-8 h-8" />
      {(location.pathname === "/signup" || location.pathname === "/signin") &&
        (location.pathname === "/signup" ? (
          <h5 className="font-medium text-primaryText">
            Have an account?{" "}
            <span
              onClick={() => navigate("/signin")}
              className="text-primary cursor-pointer font-semibold"
            >
              Sign in
            </span>
          </h5>
        ) : (
          <h5 className="font-medium text-primaryText">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/school-info")}
              className="text-primary cursor-pointer font-semibold"
            >
              Sign up
            </span>
          </h5>
        ))}
    </header>
  );
};

export default Header;
