import Header from "../components/AuthHeader";
import { AdminSignupFormType } from "../types/types";
import { signup } from "../api/api";
import { useNavigate } from "react-router-dom";
import GoogleAuth from "../components/GoogleAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signupValidationSchema } from "../validation/formValidation";
import { useState } from "react";
import loadingGif from "../../../assets/images/loading.webp";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupValidationSchema),
  });

  const onSubmit = async (data: AdminSignupFormType) => {
    setLoading(true);

    const response = await signup(data);

    if (response.success) {
      setTimeout(() => {
        setLoading(false);
        localStorage.setItem("otpTimer", JSON.stringify(Math.floor((new Date().getTime() + 60000)  / 1000)))
        navigate("/otp", { state: response.data });
      }, 1000);
    } else {

      setTimeout(() => {
        setLoading(false);
        toast("An account with this email address already exist", {
          duration: 8000,
          position: "bottom-right",
          style: {
            backgroundColor: "#FEE2E2",
            border: "2px, solid, #DC2626",
            minWidth: "400px",
            color: "black",
          },
        });
      }, 1000);
    }
  };

  return (
    <>
      <Header />
      <main className="h-screen flex justify-center items-center">
        <div className="w-[440px]">
          <h1 className="font-bold text-4xl">Create your free account</h1>

          <h5 className="text-base text-center mt-5 mb-6">
            100% free. No credit card needed.
          </h5>
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white">
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                {...register("email")}
                type="email"
                id="email"
                className="w-full py-2 border-b-2 focus:ring-0 border-b-black outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
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
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
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

            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  {...register("confirmPassword")}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full py-2 border-b-2 focus:ring-0 border-b-black outline-none"
                />
              </div>
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </p>
            </div>

            <label className="flex items-center hover:cursor-pointer">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword((prev) => !prev)}
              />
              <span className="text-sm font-normal text-gray-500 ml-1">
                Show password
              </span>
            </label>
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

          <div className="flex items-center w-full my-5">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <GoogleAuth />
        </div>
      </main>
    </>
  );
};

export default Signup;
