import { useEffect, useState } from "react"
import { getSchoolProfile } from "../../../api/api"
import { SchoolProfileType } from "../../../types/types"
import { schoolInfoValidationSchema } from "../../../validation/formValidation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editSchoolProfile } from "../../../api/api";
import toast from "react-hot-toast";
import loadingGif from '../../../../../assets/images/loading.webp'


const SchoolProfileForm = () => {
    const [schoolId, setSchoolId] = useState("")
    const [loading, setLoading] = useState(false)

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(schoolInfoValidationSchema),
       
      });

    useEffect(() => {
        fetchSchoolProfile()
    }, [])

    const fetchSchoolProfile = async () => {
        const response = await getSchoolProfile()
        if(response.success){
            setValue('schoolName', response.data.schoolName)
            setValue('email', response.data.email)
            setValue('phoneNumber', response.data.phoneNumber)
            setValue('regNumber', response.data.regNumber)
            setValue('yearEstablished', response.data.yearEstablished)
            setValue('principalName', response.data.principalName)
            setValue('websiteUrl', response.data.websiteUrl)
            setValue('totalStudents', response.data.totalStudents)
            setValue('totalTeachers', response.data.totalTeachers)
            setValue('board', response.data.board)
            setValue('city', response.data.address.city)
            setValue('state', response.data.address.state)
            setValue('country', response.data.address.country)
            setValue('postalCode', response.data.address.postalCode)
            setSchoolId(response.data._id)
        }
    }

      const onSubmit = async (data: SchoolProfileType) => {
        setLoading(true)

        const response = await editSchoolProfile(data, schoolId)
        
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
    <form method="POST" onSubmit={handleSubmit(onSubmit)} className="rounded-2xl pt-20 pl-28 pr-8">
    <h1 className="text-xl font-medium text-gray-800 mb-8">School Profile</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="relative">
        <label
          htmlFor="nameInput"
          className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
        >
         School name
        </label>
        <input
          {...register("schoolName")}
          id="schoolName"
          type="text"
          className={`w-full p-4 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 ${errors.schoolName ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-blue-500 focus:border-blue-500" } outline-none transition-all duration-200 placeholder-gray-400`}
          placeholder="Enter your name"
          aria-label="Name input field"
        />
        {errors.schoolName && (
            <p className="text-red-500 text-xs mt-1">{errors.schoolName.message}</p>
          )}
      </div>

      <div className="relative">
        <label
          htmlFor="email"
          className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
        >
         Email
        </label>
        <input
          {...register("email")}
          id="email"
          type="text"
          className={`w-full p-4 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 ${errors.email ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-blue-500 focus:border-blue-500" } outline-none transition-all duration-200 placeholder-gray-400`}
          placeholder="Enter your email"
          aria-label="Email input field"
        />
        {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
      </div>

      <div className="relative">
        <label
          htmlFor="phoneNumber"
          className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
        >
         Phone number
        </label>
        <input
          {...register("phoneNumber")}
          id="phoneNumber"
          type="text"
          className={`w-full p-4 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 ${errors.phoneNumber ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-blue-500 focus:border-blue-500" } outline-none transition-all duration-200 placeholder-gray-400`}
          placeholder="Enter your phone number"
          aria-label="Phone number input field"
        />
        {errors.phoneNumber && (
            <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>
          )}
      </div>

      <div className="relative">
        <label
          htmlFor="regNumber"
          className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
        >
         Register number
        </label>
        <input
          {...register("regNumber")}
          id="regNumber"
          type="text"
          className={`w-full p-4 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 ${errors.regNumber ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-blue-500 focus:border-blue-500" } outline-none transition-all duration-200 placeholder-gray-400`}
          placeholder="Enter your register number"
          aria-label="Register number input field"
        />
        {errors.regNumber && (
            <p className="text-red-500 text-xs mt-1">{errors.regNumber.message}</p>
          )}
      </div>

      <div className="relative">
        <label
          htmlFor="yearEstablished"
          className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
        >
         Year established
        </label>
        <input
          {...register("yearEstablished")}
          id="yearEstablished"
          type="text"
          className={`w-full p-4 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 ${errors.yearEstablished ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-blue-500 focus:border-blue-500" } outline-none transition-all duration-200 placeholder-gray-400`}
          placeholder="Enter the year"
          aria-label="Year established input field"
        />
        {errors.yearEstablished && (
            <p className="text-red-500 text-xs mt-1">{errors.yearEstablished.message}</p>
          )}
      </div>

      <div className="relative">
        <label
          htmlFor="principalName"
          className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
        >
         Principal name
        </label>
        <input
          {...register("principalName")}
          id="principalName"
          type="text"
          className={`w-full p-4 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 ${errors.principalName ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-blue-500 focus:border-blue-500" } outline-none transition-all duration-200 placeholder-gray-400`}
          placeholder="Enter principal's name"
          aria-label="Principal name input field"
        />
        {errors.principalName && (
            <p className="text-red-500 text-xs mt-1">{errors.principalName.message}</p>
          )}
      </div>

      <div className="relative">
        <label
          htmlFor="websiteUrl"
          className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
        >
         Website URL
        </label>
        <input
          {...register("websiteUrl")}
          id="websiteUrl"
          type="text"
          className={`w-full p-4 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 ${errors.websiteUrl ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-blue-500 focus:border-blue-500" } outline-none transition-all duration-200 placeholder-gray-400`}
          placeholder="Enter website url"
          aria-label="Website URL input field"
        />
        {errors.websiteUrl && (
            <p className="text-red-500 text-xs mt-1">{errors.websiteUrl.message}</p>
          )}
      </div>

      <div className="relative">
        <label
          htmlFor="totalStudents"
          className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
        >
         Total Students
        </label>
        <input
          {...register("totalStudents")}
          id="totalStudents"
          type="text"
          className={`w-full p-4 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 ${errors.totalStudents ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-blue-500 focus:border-blue-500" } outline-none transition-all duration-200 placeholder-gray-400`}
          placeholder="Enter total student's count"
          aria-label="Total Students input field"
        />
        {errors.totalStudents && (
            <p className="text-red-500 text-xs mt-1">{errors.totalStudents.message}</p>
          )}
      </div>

      <div className="relative">
        <label
          htmlFor="totalTeachers"
          className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
        >
         Total Teachers
        </label>
        <input
          {...register("totalTeachers")}
          id="totalTeachers"
          type="text"
          className={`w-full p-4 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 ${errors.totalTeachers ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-blue-500 focus:border-blue-500" } outline-none transition-all duration-200 placeholder-gray-400`}
          placeholder="Enter total teacher's count"
          aria-label="Total Teachers input field"
        />
        {errors.totalTeachers && (
            <p className="text-red-500 text-xs mt-1">{errors.totalTeachers.message}</p>
          )}
      </div>

      <div className="relative">
        <label
          htmlFor="board"
          className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
        >
         Board
        </label>
        <input
          {...register("board")}
          id="board"
          type="text"
          className={`w-full p-4 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 ${errors.board ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-blue-500 focus:border-blue-500" } outline-none transition-all duration-200 placeholder-gray-400`}
          placeholder="Enter total board name"
          aria-label="Board input field"
        />
        {errors.board && (
            <p className="text-red-500 text-xs mt-1">{errors.board.message}</p>
          )}
      </div>

      <div className="relative">
        <label
          htmlFor="city"
          className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
        >
         City
        </label>
        <input
          {...register("city")}
          id="city"
          type="text"
          className={`w-full p-4 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 ${errors.city ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-blue-500 focus:border-blue-500" } outline-none transition-all duration-200 placeholder-gray-400`}
          placeholder="Enter city"
          aria-label="City input field"
        />
        {errors.city && (
            <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>
          )}
      </div>

      <div className="relative">
        <label
          htmlFor="state"
          className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
        >
         State
        </label>
        <input
          {...register("state")}
          id="state"
          type="text"
          className={`w-full p-4 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 ${errors.state ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-blue-500 focus:border-blue-500" } outline-none transition-all duration-200 placeholder-gray-400`}
          placeholder="Enter state"
          aria-label="State input field"
        />
        {errors.state && (
            <p className="text-red-500 text-xs mt-1">{errors.state.message}</p>
          )}
      </div>

      <div className="relative">
        <label
          htmlFor="country"
          className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
        >
         Country
        </label>
        <input
          {...register("country")}
          id="country"
          type="text"
          className={`w-full p-4 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 ${errors.country ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-blue-500 focus:border-blue-500" } outline-none transition-all duration-200 placeholder-gray-400`}
          placeholder="Enter country"
          aria-label="Country input field"
        />
        {errors.country && (
            <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>
          )}
      </div>

      <div className="relative">
        <label
          htmlFor="postalCode"
          className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
        >
         Postal code
        </label>
        <input
          {...register("postalCode")}
          id="postalCode"
          type="text"
          className={`w-full p-4 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 ${errors.postalCode ? "focus:ring-red-500 focus:border-red-500" : "focus:ring-blue-500 focus:border-blue-500" } outline-none transition-all duration-200 placeholder-gray-400`}
          placeholder="Enter postal code"
          aria-label="Postal code input field"
        />
        {errors.postalCode && (
            <p className="text-red-500 text-xs mt-1">{errors.postalCode.message}</p>
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
  )
}

export default SchoolProfileForm