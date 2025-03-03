import logo from "../../../assets/images/logo.png";
import React, { useState } from "react";
// import { passwordRegex } from "../../../app/validation/regex";
import { useSearchParams } from "react-router-dom";
import { passwordReset } from "../api/api";
import { useNavigate } from "react-router-dom";

const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  if (!token) {
    console.log("no token provided");
  }

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState<{
    password: string;
    confirmPassword: string;
  }>({
    password: "",
    confirmPassword: "",
  });

  let isValid = true;

  const validate = () => {
    const error: { password: string; confirmPassword: string } = {
      password: "",
      confirmPassword: "",
    };

    // if (!password) {
    //   error.password = "This field is required";
    //   isValid = false;
    // } else if (!passwordRegex.test(password)) {
    //   error.password = "Password should be atleast 8 character long";
    //   isValid = false;
    // }

    if (!confirmPassword) {
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

    if (isValid && token) {
      const response = await passwordReset({ token, password });
      console.log("submit the reset form", response);

      if (response.success) {
        // toast.success("Password reset successfully", {
        //   position: "bottom-right",
        //   autoClose: 3000,
        //   hideProgressBar: true,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });
        navigate("/signin");
      } else {
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
      <header className="h-20 flex items-center justify-between p-10">
        <img src={logo} alt="" className="h-10" />
      </header>
      <main className="h-screen flex justify-center items-center">
        <div className="w-[420px]">
          <h1 className="font-bold text-center text-4xl">Enter new password</h1>

          <h5 className="text-base text-center mt-5 mb-6">
            Please enter your new password to reset your old one.
          </h5>

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
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                className="w-full py-2 border-b-2 focus:ring-0 border-b-black outline-none"
              />
            </div>
            <p className="text-red-500 text-xs mt-1">{error.confirmPassword}</p>
          </div>

          <button
            disabled={password && confirmPassword ? false : true}
            onClick={(e) => handleSubmit(e)}
            className={`w-full mt-5 h-12 rounded-sm flex justify-center items-center ${
              password && confirmPassword ? "bg-blue-700" : "bg-blue-200"
            }`}
          >
            <h1 className="text-base font-medium text-white">Submit</h1>
          </button>
        </div>
      </main>
    </>
  );
};

export default ResetPasswordForm;
