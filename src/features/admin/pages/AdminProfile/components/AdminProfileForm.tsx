import { fetchAdminProfile } from "../../../api/api";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { adminProfileValidationSchema } from "../../../validation/formValidation";
import loadingGif from '../../../../../assets/images/loading.gif'
import { updateAdminProfile } from "../../../api/api";
import toast from "react-hot-toast";
import { textFormatter } from "../../../../../app/utils/formatter";

interface AdminUserData {
        email: string;
        role: "admin" | "student" | "teacher" | "";
        status?: "active" | "blocked" | "deleted" | "inactive" | "";
        profileId?: string; 
}

const AdminProfileForm = () => {
    const [userData, setUserData] = useState<AdminUserData>({email: "", role: "", status: "", profileId: ""})
    const [loading, setLoading] = useState(false)

        const {
            register,
            handleSubmit,
            setValue,
            formState: { errors },
          } = useForm({
            resolver: zodResolver(adminProfileValidationSchema),
           
          });



    useEffect(() => {
        getAdminProfile()
    }, [])

    const getAdminProfile = async () => {
        const response = await fetchAdminProfile()
        setValue('fullName', response.data.fullName)
        setValue('phoneNumber', response.data.phoneNumber)
        setUserData({
            email: response.data.user.email,
            role: response.data.user.role,
            status: response.data.user.status,
            profileId: response.data._id
        })
    }

    const onSubmit = async (data: {fullName?: string, phoneNumber?: string}) => {
        const response = await updateAdminProfile(userData.profileId as string, data)
        setLoading(true)

        if (response.success) {
            setTimeout(() => {
              setLoading(false);
              toast(
                "School profile updated successfully.",
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
            }, 1000);
          } else {
            setTimeout(() => {
              setLoading(false);
              toast(
                response.error,
                {
                  duration: 8000,
                  position: "bottom-right",
                  style: {
                    backgroundColor: "#FEE2E2",
                    border: "2px, solid, #DC2626",
                    minWidth: "300px",
                    color: "black",
                  },
                }
              );
            }, 1000);
          }
    }
  return (
    <div className="pt-20 pl-28 pr-8 ">
    <div className="flex justify-between relative">
    <h1 className="text-xl font-medium text-gray-800 mb-8">Profile info</h1>

    {/* <div className="bg-red-500 w-40 h-20 absolute right-0 top-2 z-10">

    </div> */}

    </div>

<form onSubmit={handleSubmit(onSubmit)} method="POST">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="relative">
        <label
          htmlFor="nameInput"
          className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
        >
          Name
        </label>
        <input
        {...register("fullName")}
          id="nameInput"
          type="text"
          className={`w-full p-4  text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 ${errors.fullName ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-blue-500 focus:border-blue-500" } outline-none transition-all duration-200 placeholder-gray-400`}
          placeholder="Enter your name"
          aria-label="Name input field"
        />
        {errors.fullName && (
            <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
          )}
      </div>
      <div className="relative">
        <label
          htmlFor="nameInput"
          className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
        >
          Email
        </label>
        <input
        value={userData?.email}
          disabled={true}
          id="nameInput"
          type="text"
          className="w-full p-4 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 placeholder-gray-400"
          placeholder="Enter your name"
          aria-label="Name input field"
        />
      </div>
      <div className="relative">
        <label
          htmlFor="nameInput"
          className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
        >
          Role
        </label>
        <input
        value={textFormatter(userData?.role)}
        disabled={true}
          id="nameInput"
          type="text"
          className="w-full p-4 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 placeholder-gray-400"
          placeholder="Enter your name"
          aria-label="Name input field"
        />
      </div>
      <div className="relative">
        <label
          htmlFor="nameInput"
          className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
        >
          Status
        </label>
        <input
        value={textFormatter(userData?.status as string)}
          disabled={true}
          id="nameInput"
          type="text"
          className="w-full p-4 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 placeholder-gray-400"
          placeholder="Enter your name"
          aria-label="Name input field"
        />
      </div>
      <div className="relative">
        <label
          htmlFor="nameInput"
          className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
        >
          Phone number
        </label>
        <input
        {...register("phoneNumber")}

          id="nameInput"
          type="text"
          className={`w-full p-4 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 ${errors.phoneNumber ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-blue-500 focus:border-blue-500" } outline-none transition-all duration-200 placeholder-gray-400`}
          placeholder="Enter your name"
          aria-label="Name input field"
        />
                {errors.phoneNumber && (
            <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>
          )}
      </div>

    </div>
    <button
    type="submit"
    className="rounded-md mt-5 flex justify-center w-40 h-12 items-center text-base font-medium text-white bg-primary"
  >
              {loading ? (
                    <img className="w-10 h-10" src={loadingGif} alt="loading" />
                  ) : (
                    "Save changes"
                  )}
   </button>
    </form>

    
   </div>
  )
}

export default AdminProfileForm
