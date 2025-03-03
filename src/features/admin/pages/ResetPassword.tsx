import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { passwordResetRequest } from "../api/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { resetPasswordValidationSchema } from "../validation/formValidation";

const ResetPassword = () => {

  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(resetPasswordValidationSchema),
    });



  const onSubmit = async (data: {email: string}) => {
       const response = await passwordResetRequest(data);

      if (response.data) {
        // toast.success("Password reset link is send to your email.", {
        //   position: "bottom-right",
        //   autoClose: 3000,
        //   hideProgressBar: true,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });
        console.log("password reset link send successfully", response.data);
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
              className={`bg-blue-700 h-12 w-full rounded-sm flex justify-center mt-6 items-center`}
            >
              <h1 className="text-base font-medium text-white">
                Reset password
              </h1>
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
