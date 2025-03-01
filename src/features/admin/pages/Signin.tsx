import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AdminSigninFormType } from "../types/types";
import { emailRegex, passwordRegex } from "../../../app/validation/regex";
import google from "../../../assets/images/google.png";
import { signin } from "../api/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAdmin } from "../redux/adminSlice";
// import { toast } from "react-toastify";
import GoogleAuth from "../components/GoogleAuth";


const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  // const GOOGLE_CLIENT_ID='311853395320-tr7hshp5f1f0ldqik89iurhdrqffnkve.apps.googleusercontent.com'
  // const GOOGLE_CLIENT_SECRET='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'

  let isValid = true;

  const validate = () => {
    const error: AdminSigninFormType = {
      email: "",
      password: "",
    };

    if (!email.trim()) {
      error.email = "This field is required";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      error.email = "Enter a valid email";
      isValid = false;
    }

    if (!password.trim()) {
      error.password = "This field is required";
      isValid = false;
    } else if (!passwordRegex.test(password)) {
      error.password = "Password should be atleast 8 character long";
      isValid = false;
    }

    return error;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError(validate());

    if (isValid) {
      const response = await signin({ email, password });

      if (response.success) {
        console.log("signin success", response);
        dispatch(
          setAdmin({
            _id: response.data._id,
            email: response.data.email,
            role: response.data.role,
            status: response.data.status,
            accessToken: response.data.accessToken,
          })
        );
        navigate("/students");
      } else {
        console.log(response, "this is the error")
        // toast.error(response.error.message, {
        //   position: "bottom-right",
        //   autoClose: 3000,
        //   hideProgressBar: true,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });
      }
    }
  };
  return (
    <>
      <Header />
      <main className="h-screen flex justify-center items-center">
        <div className="w-[420px]">
          <h1 className="font-bold text-4xl mb-10 text-center">
            Sign in to your account
          </h1>
          {/* 
    <h5 className="text-base text-center mt-5 mb-6">
      Sign in fast and safe to your SchoolSpot account.
    </h5> */}

          <div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                id="email"
                className="w-full py-2 border-b-2 focus:ring-0 border-b-black outline-none"
              />
              <p className="text-red-500 text-xs mt-1">{error.email}</p>
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block text-sm font-medium mt-5 text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full py-2 border-b-2 focus:ring-0 border-b-black outline-none"
                />
                <div className="w-10 h-10 absolute right-0 top-0"></div>
              </div>
              <p className="text-red-500 text-xs mt-1">{error.password}</p>
            </div>

            <button
              onClick={(e) => handleFormSubmit(e)}
              disabled={password && email ? false : true}
              className={`${
                password && email ? "bg-blue-700" : "bg-blue-200"
              } w-full h-12 rounded-sm flex justify-center mt-6 items-center`}
            >
              <h1 className="text-base font-medium text-white">Sign in</h1>
            </button>

            <h5 className="font-medium mt-5">
              Forgot your password?{" "}
              <Link
                to={"/signin/forgot"}
                className="text-blue-500 cursor-pointer font-semibold"
              >
                Reset password
              </Link>
            </h5>
          </div>

          <div className="flex items-center w-full my-5">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* <div className="flex justify-center">
   
              <button className="flex items-center justify-center w-96 p-2 text-gray-600 bg-gray-200 rounded-sm hover:bg-gray-300">
                <img src={google} className="h-5 w-5 mr-5" alt="" />
                Continue with Google
              </button>
          </div> */}
          <GoogleAuth />
        </div>
      </main>
    </>
  );
};

export default Signin;
