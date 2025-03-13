import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useState } from "react"
import {useForm} from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { studentSigninValidationSchema } from "../validation/formValidation"
import toast from "react-hot-toast"
import { setStudent } from "../redux/studentSlice"
import { signin } from "../api/api"
import { StudentSigninFormType } from "../types/types"
import loadingGif from "../../../assets/images/loading.webp";

const StudentSignin = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

      const [showPassword, setShowPassword] = useState(false);
      const [loading, setLoading] = useState(false);

      
        const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm({
          resolver: zodResolver(studentSigninValidationSchema),
        });

        const onSubmit = async (data: StudentSigninFormType) => {
            setLoading(true);
        
            const response = await signin(data);
        
            if (response.success) {
              dispatch(
                setStudent({
                  _id: response.data._id,
                  email: response.data.email,
                  role: response.data.role,
                  status: response.data.status,
                  accessToken: response.data.accessToken,
                })
              );
              setTimeout(() => {
                setLoading(false);
                navigate("/student");
              }, 1000);
            } else {
              setTimeout(() => {
                setLoading(false);
                toast(
                  "We don't have any record of a SchoolSpot account with this credentials",
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
    <div className='min-h-screen flex justify-center items-center flex-col'>
                
        <h1 className="font-bold text-4xl mb-10 text-center">
            Sign in as student
          </h1>
                <form onSubmit={handleSubmit(onSubmit)} className='w-3/12'>
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
                className="w-full py-2 border-2 focus:ring-0 border-gray-400 outline-none"
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
                  className="w-full py-2 border-2 focus:ring-0 border-gray-400 outline-none"
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
              className={`bg-blue-700 w-full h-12 rounded-sm flex justify-center text-base font-medium text-white mt-6 items-center`}
            >
              {loading ? (
                <img className="w-10 h-10" src={loadingGif} alt="loading" />
              ) : (
                "Sign in"
              )}
            </button>


          </form>
    </div>
  )
}

export default StudentSignin
