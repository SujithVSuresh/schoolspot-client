import Header from "../components/Header";
import { Link } from "react-router-dom";
import { AdminSigninFormType } from "../types/types";
import { signin } from "../api/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAdmin } from "../redux/adminSlice";
import GoogleAuth from "../components/GoogleAuth";
import { signinValidationSchema } from "../validation/formValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import {useForm} from 'react-hook-form'
import toast from "react-hot-toast";


const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(signinValidationSchema),
    });

  const onSubmit = async (data: AdminSigninFormType) => {

      const response = await signin(data);

      if (response.success) {
        console.log("signin success", response);
        dispatch(
          setAdmin({
            _id: response.data._id,
            email: response.data.email,
            role: response.data.role,
            status: response.data.status,
            accessToken: response.data.accessToken,
          })
        );
        navigate("/students");
      } else {
        console.log(response, "this is the error")
        toast.error(response.error.message, {
          duration: 8000,
          position: 'bottom-right',
          style: {
            backgroundColor: '#DBEAFE',
            border: "2px, solid, #1D4ED8",
            color: '#1D4ED8'
          },
        });

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
          {/* 
    <h5 className="text-base text-center mt-5 mb-6">
      Sign in fast and safe to your SchoolSpot account.
    </h5> */}

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
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block text-sm font-medium mt-5 text-gray-700"
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
                <div className="w-10 h-10 absolute right-0 top-0"></div>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              className={`bg-blue-700 w-full h-12 rounded-sm flex justify-center mt-6 items-center`}
            >
              <h1 className="text-base font-medium text-white">Sign in</h1>
            </button>

            <h5 className="font-medium mt-5">
              Forgot your password?{" "}
              <Link
                to={"/signin/forgot"}
                className="text-blue-500 cursor-pointer font-semibold"
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
