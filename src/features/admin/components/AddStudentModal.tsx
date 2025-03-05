// import { X } from 'lucide-react';
import { zodResolver } from "@hookform/resolvers/zod";
import {useForm} from 'react-hook-form'
import { signupValidationSchema } from "../validation/formValidation";
import { UserSignupFormType } from "../types/types";
import { useState } from "react";
import toast from "react-hot-toast";
import { createUser } from "../api/api";


interface ModalProps {
  onClose: () => void;
}

const AddStudentModal = ({ onClose }: ModalProps) => {
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupValidationSchema),
  })

  const onSubmit = async (data: UserSignupFormType) => {
    setLoading(true);

    const response = await createUser({...data, role: "student"})

    if(response.success){
      setTimeout(() => {
        setLoading(false);
        onClose()
      }, 1000);

    }else{
      setTimeout(() => {
        setLoading(false);
        toast("An account with this email address already exist", {
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
    <div className="bg-white h-full w-4/12 fixed z-40 right-0">
    <div className="flex items-center w-full h-16">
      <h1 className="text-xl font-medium text-gray-800 pl-8">Add Student</h1>

    </div>
  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-10">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-1 font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="text"
                    name="email"
                    className="w-full outline-none focus:right-0 p-2 border border-gray-400 rounded"
                  />
                  {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
                </div>
      
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm mb-1 font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    {...register("password")}
                    type="password"
                    name="password"
                    className="w-full outline-none focus:right-0 p-2 border border-gray-400 rounded"
                  />
                            {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
                </div>
      
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm mb-1 font-medium text-gray-700"
                  >
                    Confirm password
                  </label>
                  <input
                  {...register("confirmPassword")}
                    type="password"
                    name="confirmPassword"
                    className="w-full outline-none focus:right-0 p-2 border border-gray-400 rounded"
                  />
                 {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
                </div>
      
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => onClose()}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    Submit
                  </button>
                </div>
  
  </form>
</div>
  )
}

export default AddStudentModal
