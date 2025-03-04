import logo from "../../../assets/images/logo.png";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { passwordReset } from "../api/api";
import { useNavigate } from "react-router-dom";
import loadingGif from "../../../assets/images/loading.webp";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { resetPasswordValidationSchema } from "../validation/formValidation";
import toast from "react-hot-toast";

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

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: {
    password: string;
    confirmPassword: string;
  }) => {
    setLoading(true);
    if (token) {
      const response = await passwordReset({ token, password: data.password });
      console.log("submit the reset form", response);

      if (response.success) {
        setTimeout(() => {
          toast(
            "Your password has been successfully reset! Log in with your new password.",
            {
              duration: 8000,
              position: "bottom-right",
              style: {
                backgroundColor: "#E7FEE2",
                border: "2px, solid, #16A34A",
                minWidth: "400px",
                color: "black",
              },
            }
          );
          setLoading(false);
          navigate("/signin");
        }, 1000);
      } else {
        setTimeout(() => {
          setLoading(false);
          console.log("resppp", response);
          toast(
            "Error occured while resetting your password. Please try again later.",
            {
              duration: 8000,
              position: "bottom-right",
              style: {
                backgroundColor: "#FEE2E2",
                border: "2px, solid, #DC2626",
                minWidth: "400px",
                color: "black",
              },
            }
          );
        }, 1000);
      }
    }
  };

  return (
    <>
      <header className="h-20 flex items-center justify-between p-10">
        <img src={logo} alt="" className="h-10" />
      </header>
      <main className="h-screen flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
          className="w-[420px]"
        >
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
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                {...register("confirmPassword")}
                type={showPassword ? "text" : "password"}
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
      </main>
    </>
  );
};

export default ResetPasswordForm;
