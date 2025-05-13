import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useState } from "react"
import {useForm} from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { teacherSigninValidationSchema } from "../../validation/formValidation"
import toast from "react-hot-toast"
import { setTeacher } from "../../redux/teacherSlice"
import { TeacherSigninFormType } from "../../types/types" 
import { signin } from "../../api/api"
import loadingGif from '../../../../assets/images/loading.webp'

const TeacherSignin = () => {
   const dispatch = useDispatch()
      const navigate = useNavigate()
  
        const [showPassword, setShowPassword] = useState(false);
        const [loading, setLoading] = useState(false);
  
        
          const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm({
            resolver: zodResolver(teacherSigninValidationSchema),
          });
  
          const onSubmit = async (data: TeacherSigninFormType) => {
              setLoading(true);
          
              const response = await signin(data);

              console.log(response)
          
              if (response.success) {
                dispatch(
                  setTeacher({
                    _id: response.data._id,
                    email: response.data.email,
                    role: response.data.role,
                    status: response.data.status,
                    accessToken: response.data.accessToken,
                  })
                );
                setTimeout(() => {
                  setLoading(false);
                  navigate("/teacher");
                }, 1000);
              } else {
                setTimeout(() => {
                  setLoading(false);
                  toast(
                    response?.error?.message,
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

    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
<div className="flex flex-col md:flex-row lg:flex-row justify-center items-start py-8 md:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">


  <div className="mx-auto px-12 py-12 w-full lg:w-4/12 bg-white rounded border">
  <h1 className="font-medium text-2xl mb-6 text-center">Sign in as Teacher</h1>

      <form
        method="POST"
        className="space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label
            htmlFor="schoolName"
            className="block text-sm mb-1 font-medium text-gray-700"
          >
           Email
          </label>
          <input
            type="email"
            placeholder="email"
            className="w-full outline-none focus:ring-0 p-2 border border-gray-400 rounded"
            {...register("email")}
          />

          {errors.email && (
            <span className="text-red-500 text-sm">
              {errors.email.message}
            </span>
          )}
        </div>

        <div>
  
            <label
              htmlFor="email"
              className="block text-sm mb-1 font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
              className="w-full outline-none focus:ring-0 p-2 border border-gray-400 rounded"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}

<label className="flex items-center hover:cursor-pointer mt-2">
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
    type="button"
    onClick={() => navigate("/signin/forgot")}
    className="text-sm text-blue-600 hover:underline"
  >
    Forgot password?
  </button>

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
    

</div>

          </form>
          </div>
          
  
  </div>

</main>
</>
  )
}

export default TeacherSignin
