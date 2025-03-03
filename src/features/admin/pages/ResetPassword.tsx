import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { passwordResetRequest } from "../api/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { resetPasswordValidationSchema } from "../validation/formValidation";
import { useState } from "react";
import toast from "react-hot-toast";
import loadingGif from "../../../assets/images/loading.webp";


const ResetPassword = () => {
  const [loading, setLoading] = useState(false)

  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(resetPasswordValidationSchema),
    });



  const onSubmit = async (data: {email: string}) => {
       setLoading(true)

       const response = await passwordResetRequest(data);

      if (response.success) {
        setTimeout(() => {
          setLoading(false);
          toast("Password reset link send successfully. Please check your email to access the password reset link.", {
            duration: 8000,
            position: "bottom-right",
            style: {
              backgroundColor: "#E7FEE2",
              border: "2px, solid, #16A34A",
              minWidth: "400px",
              color: "black",
            },
          });
        }, 1000);
        console.log("password reset link send successfully", response.data);
      }else{
        setTimeout(() => {
          setLoading(false);
          toast("Error sending password reset link.", {
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
      <header className="h-20 flex items-center justify-between p-10">
        <img src={logo} alt="" className="h-10" />
      </header>
      <main className="h-screen flex justify-center items-center">
        <div className="w-[420px]">
          <h1 className="font-bold text-center text-4xl">
            Reset your password
          </h1>

          <h5 className="text-base text-center mt-5 mb-6">
            Please enter the email address you’d like your password reset
            information sent to.
          </h5>

          <form onSubmit={handleSubmit(onSubmit)}>
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

             <button
             disabled={loading}
              type="submit"
              className={`w-full mt-5 h-12 rounded-sm flex justify-center items-center text-base font-medium text-white bg-blue-700`}
            >
              {loading ? (
                <img className="w-10 h-10" src={loadingGif} alt="loading" />
              ) : (
                "Reset password"
              )}
            </button>
          </form>

          <h5 className="font-medium text-center mt-5">
            Go back to{" "}
            <Link
              to={"/signin"}
              className="text-blue-500 cursor-pointer font-semibold"
            >
              Sign in
            </Link>
          </h5>
        </div>
      </main>
    </>
  );
};

export default ResetPassword;
