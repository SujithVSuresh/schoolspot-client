import Header from "../components/AuthHeader";
// import { useState } from "react";
import { AdminSignupFormType } from "../types/types";
import { signup } from "../api/api";
import { useNavigate } from "react-router-dom";
import GoogleAuth from "../components/GoogleAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signupValidationSchema } from "../validation/formValidation";

const Signup = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupValidationSchema),
  });

  const onSubmit = async (data: AdminSignupFormType) => {
    

    const response = await signup(data);
    console.log(response, "this is the response")

    if (response.success) {
      navigate("/otp", { state: response.data });
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
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  {...register("confirmPassword")}
                  type="password"
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

            <button
              type="submit"
              className={`w-full mt-5 h-12 rounded-sm flex justify-center items-center bg-blue-700`}
            >
              <h1 className="text-base font-medium text-white">Submit</h1>
            </button>
          </form>

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

export default Signup;
