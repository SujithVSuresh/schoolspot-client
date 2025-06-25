import Header from "../../components/AuthHeader";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { adminProfileValidationSchema } from "../../validation/formValidation";
import { AdminProfileType } from "../../types/types";
import { createAdminProfile } from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setAdmin } from "../../redux/adminSlice";
import { RootState } from "../../../../app/store";
import loadingGif from "../../../../assets/images/loading.gif";
import toast from "react-hot-toast";

const SignupProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const adminProfile = useSelector((state: RootState) => state.admin);

  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(adminProfileValidationSchema),
  });

  const onSubmit = async (data: AdminProfileType) => {
    setLoading(true)
    const response = await createAdminProfile(data);

    if (response.success) {
      dispatch(
        setAdmin({
          ...adminProfile,
          status: "active",
        })
      );
      setTimeout(() => {
        setLoading(false);
        navigate('/dashboard/students')
      }, 500);
    }else{
      setTimeout(() => {
        setLoading(false);
        toast(
         response.error.message,
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
  };
  return (
    <>
      <Header />
      <main className="h-screen flex justify-center items-center">
        <div className="w-[440px]">
          <h1 className="font-bold text-4xl text-center">
            Complete your profile
          </h1>

          <h5 className="text-base text-center mt-5 mb-6">
            Complete your profile to activate your account
          </h5>
          <form
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
            className="bg-white"
          >
            <div className="mb-5">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full name
              </label>
              <input
                {...register("fullName")}
                type="text"
                id="fullName"
                className="w-full py-2 border-b-2 focus:ring-0 border-b-black outline-none"
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="mb-5">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Contact number
              </label>
              <input
                {...register("phoneNumber")}
                type="text"
                id="phoneNumber"
                className="w-full py-2 border-b-2 focus:ring-0 border-b-black outline-none"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phoneNumber.message}
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
        </div>
      </main>
    </>
  );
};

export default SignupProfile;
