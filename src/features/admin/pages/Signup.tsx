import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import { AdminSignupFormType } from "../types/types";
import google from "../../../assets/images/google.png";
import { emailRegex, passwordRegex } from "../../../app/validation/regex";
import { signup } from "../api/api";
import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../../../app/store";
// import { signup } from "../redux/adminAuthSlice";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch<AppDispatch>()
  // const {user, loading} = useSelector((state: RootState) => state.adminAuth)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState<AdminSignupFormType>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  let isValid = true;

  const validate = () => {
    const error: AdminSignupFormType = {
      email: "",
      password: "",
      confirmPassword: "",
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

    if (!confirmPassword.trim()) {
      error.confirmPassword = "This field is required";
      isValid = false;
    } else if (confirmPassword != password) {
      error.confirmPassword = "Password doesn't match";
      isValid = false;
    }
    return error;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError(validate());

    if (isValid) {
      const response = await signup({ email, password });

      if (response.success) {
        navigate("/otp", { state: response.data });
      } else {
        toast.error(response.error.message, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  return (
    <>
      <Header />
      <main className="h-screen flex justify-center items-center">
        <div className="w-[420px]">
          <h1 className="font-bold text-4xl">Create your free account</h1>

          <h5 className="text-base text-center mt-5 mb-6">
            100% free. No credit card needed.
          </h5>
          <div className="bg-white">
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
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="w-full py-2 border-b-2 focus:ring-0 border-b-black outline-none"
                />
              </div>
              <p className="text-red-500 text-xs mt-1">{error.password}</p>
            </div>

            <div className="mb-5">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  className="w-full py-2 border-b-2 focus:ring-0 border-b-black outline-none"
                />
              </div>
              <p className="text-red-500 text-xs mt-1">
                {error.confirmPassword}
              </p>
            </div>

            <button
            disabled={email && password && confirmPassword ? false : true}
            onClick={(e) => handleSubmit(e)}
            className={`w-full mt-5 h-12 rounded-sm flex justify-center items-center ${
              email && password && confirmPassword
                ? "bg-blue-700"
                : "bg-blue-200"
            }`}
          >
            <h1 className="text-base font-medium text-white">Submit</h1>
          </button>
          </div>



          <div className="flex items-center w-full my-5">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex justify-center">
            <button className="flex items-center justify-center w-96 p-2 text-gray-600 bg-gray-200 rounded-sm hover:bg-gray-300">
              <img src={google} className="h-5 w-5 mr-5" alt="" />
              Continue with Google
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Signup;
