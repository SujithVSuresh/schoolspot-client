import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";
import loadingGif from "../../../../assets/images/loading.webp";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { changePasswordSchema } from "../../validation/formValidation";
import { useState } from "react";
import { ChangePasswordType } from "../../types/types";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../../api/api";


const ChangePassword = () => {
    const navigate = useNavigate()
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(changePasswordSchema),
  });

  const onSubmit = async (data: ChangePasswordType) => {
    setLoading(true);

    const response = await changePassword({
            oldPassword: data.oldPassword,
            newPassword: data.newPassword
    })

    if (response.success) {
      setTimeout(() => {
        setLoading(false);
        toast("Password changed successfully", {
            duration: 8000,
            position: "bottom-right",
            style: {
              backgroundColor: "#E7FEE2",
              border: "2px, solid, #16A34A",
              minWidth: "400px",
              color: "black"
            }
          });
        navigate("/profile");
      }, 1000);
    } else {
      setTimeout(() => {
        setLoading(false);
        toast(response.error.message, {
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
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Header */}
      <div className="flex-1">
        <DashboardHeader />

        <div className="flex justify-center items-center min-h-screen w-full bg-re">
          <form
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
            className="w-2/6 space-y-4 p-7 rounded-lg border border-gray-300"
          >
            <h1 className="text-xl font-medium text-gray-800 text-center mb-8">
              Change Password
            </h1>
            <div className="relative">
              <label
                htmlFor="nameInput"
                className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
              >
                Old Password
              </label>
              <input
                {...register("oldPassword")}
                id="nameInput"
                type="password"
                className={`w-full p-3 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 ${
                  errors.oldPassword
                    ? "focus:ring-red-500 focus:border-red-500"
                    : "focus:ring-blue-500 focus:border-blue-500"
                } outline-none transition-all duration-200 placeholder-gray-400`}
                aria-label="Name input field"
              />
              {errors.oldPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.oldPassword.message}
                </p>
              )}
            </div>

            <div className="relative">
              <label
                htmlFor="nameInput"
                className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
              >
                New Password
              </label>
              <input
                {...register("newPassword")}
                id="nameInput"
                type="password"
                className={`w-full p-3  text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 ${
                  errors.newPassword
                    ? "focus:ring-red-500 focus:border-red-500"
                    : "focus:ring-blue-500 focus:border-blue-500"
                } outline-none transition-all duration-200 placeholder-gray-400`}
                aria-label="Name input field"
              />
              {errors.newPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.newPassword.message}
                </p>
              )}
            </div>

            <div className="relative">
              <label
                htmlFor="nameInput"
                className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
              >
                Confirm Password
              </label>
              <input
                {...register("confirmPassword")}
                id="nameInput"
                type="password"
                className={`w-full p-3  text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 ${
                  errors.confirmPassword
                    ? "focus:ring-red-500 focus:border-red-500"
                    : "focus:ring-blue-500 focus:border-blue-500"
                } outline-none transition-all duration-200 placeholder-gray-400`}
                aria-label="Name input field"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="rounded-md mt-5 flex justify-center w-full h-12 items-center text-base font-medium text-white bg-blue-600"
            >
              {loading ? (
                <img className="w-10 h-10" src={loadingGif} alt="loading" />
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
