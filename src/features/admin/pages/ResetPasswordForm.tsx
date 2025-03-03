import logo from "../../../assets/images/logo.png";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { passwordReset } from "../api/api";
import { useNavigate } from "react-router-dom";
import { resetPasswordValidationSchema } from "../validation/formValidation";
import loadingGif from "../../../assets/images/loading.webp";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { resetPasswordValidationSchema } from "../validation/formValidation";


const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(resetPasswordValidationSchema),
    });

  // const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false)

  if (!token) {
    console.log("no token provided");
  }

  const onSubmit = async () => {

    if (token) {
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
        <form onSubmit={handleSubmit(onSubmit)} method="POST" className="w-[420px]">
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
                {...register("password")}
                type="password"
                id="password"
                className="w-full py-2 border-b-2 focus:ring-0 border-b-black outline-none"
              />
            </div>
            {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
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
                {...register("confirmPassword")}
                type="password"
                id="confirmPassword"
                className="w-full py-2 border-b-2 focus:ring-0 border-b-black outline-none"
              />
            </div>
            {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
          </div>

          <button
            disabled={loading}
              type="submit"
              className={`w-full mt-5 h-12 rounded-sm flex justify-center items-center text-base font-medium text-white bg-blue-700`}
            >
              {loading ? (
                <img className="w-10 h-10" src={loadingGif} alt="loading" />
              ) : (
                "Submit"
              )}
            </button>
        </form>
      </main>
    </>
  );
};

export default ResetPasswordForm;
