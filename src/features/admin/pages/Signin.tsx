import Header from "../components/AuthHeader";
import { Link } from "react-router-dom";
import { AdminSigninFormType } from "../types/types";
import { signin } from "../api/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAdmin } from "../redux/adminSlice";
import GoogleAuth from "../components/GoogleAuth";
import { signinValidationSchema } from "../validation/formValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";
import loadingGif from "../../../assets/images/loading.gif";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signinValidationSchema),
  });

  const onSubmit = async (data: AdminSigninFormType) => {
    setLoading(true);

    const response = await signin(data);

    if (response.success) {
      dispatch(
        setAdmin({
          _id: response.data._id,
          email: response.data.email,
          role: response.data.role,
          status: response.data.status,
          accessToken: response.data.accessToken,
        })
      );
      setTimeout(() => {
        setLoading(false);
        navigate("/dashboard/students");
      }, 1000);
    } else {
      setTimeout(() => {
        setLoading(false);
        toast(response?.error?.message, {
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
        <div className="w-[420px]">
          <h1 className="font-bold text-4xl mb-10 text-center">
            Sign in to your account
          </h1>
        
          <form onSubmit={handleSubmit(onSubmit)}>
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
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium mt-5 text-gray-700"
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
                <div className="w-10 h-10 absolute right-0 top-0"></div>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
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
              className={`bg-primary w-full h-12 rounded-sm flex justify-center text-base font-medium text-white mt-6 items-center`}
            >
              {loading ? (
                <img className="w-10 h-10" src={loadingGif} alt="loading" />
              ) : (
                "Sign in"
              )}
            </button>

            <h5 className="font-medium mt-5 text-primaryText">
              Forgot your password?{" "}
              <Link
                to={"/signin/forgot"}
                className="text-primary cursor-pointer font-semibold"
              >
                Reset password
              </Link>
            </h5>
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

export default Signin;
