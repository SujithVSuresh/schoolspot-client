
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { teacherUpdateValidationSchema } from "../../validation/formValidation";
import { TeacherProfileUpdateType } from "../../types/types";
import { updateTeacher, getTeacherProfileById } from "../../api/api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const UpdateTeacherProfile = () => {
       const navigate = useNavigate()
       const { id: userId } = useParams();
    
      const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(teacherUpdateValidationSchema),
      });

        
          useEffect(() => {
            const fetchStudentData = async () => {
              if (userId) {
                const response = await getTeacherProfileById(userId);
                if (response.success) {
                const data = response.data
                setValue("email", data.user.email);
                setValue("fullName", data.fullName);
                setValue("phoneNumber", data.phoneNumber);
                setValue("subjectSpecialized", data.subjectSpecialized);
                setValue("qualification", data.qualification);
                setValue("experience", data.experience.toString());
                } else {
                  console.log(response.error);
                }
              }
            };
        
            fetchStudentData();
          }, [userId]);
    
    
      const onSubmit = async (data: TeacherProfileUpdateType) => {
        console.log(data);
    
        const formData = new FormData();
        formData.append("email", data.email);
        formData.append("fullName", data.fullName);
        formData.append("phoneNumber", data.phoneNumber);
        formData.append("subjectSpecialized", data.subjectSpecialized);
        formData.append("qualification", data.qualification);
        formData.append("experience", data.experience.toString());
        
        if (data.profilePhoto && data.profilePhoto instanceof FileList) {
            formData.append("profilePhoto", data.profilePhoto[0]);
        }
        
        const response = await updateTeacher(userId as string, formData)
    
        if(response.success){
            navigate('/dashboard/teachers')
          }
     
      };
  return (
    <div className="pt-10 px-6 md:px-16 lg:px-28 flex flex-col justify-center items-center mt-10">
    <div className="border p-10 bg-white">
    <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Edit Teacher</h1>
  
    <form method="POST" onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-lg">
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          {...register("email")}
          type="text"
          className="w-full p-2 border border-gray-400 rounded outline-none"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>
  
  
      <div>
        <label className="block text-sm font-medium text-gray-700">Full Name</label>
        <input
          {...register("fullName")}
          className="w-full p-2 border border-gray-400 rounded outline-none"
        />
        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
      </div>
  
      <div>
        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input
          {...register("phoneNumber")}
          className="w-full p-2 border border-gray-400 rounded outline-none"
        />
        {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>}
      </div>
  
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700">Subject Specialized</label>
          <input
            {...register("subjectSpecialized")}
            className="w-full p-2 border border-gray-400 rounded outline-none"
          />
          {errors.subjectSpecialized && (
            <p className="text-red-500 text-xs mt-1">{errors.subjectSpecialized.message}</p>
          )}
        </div>
  
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700">Qualification</label>
          <input
            {...register("qualification")}
            className="w-full p-2 border border-gray-400 rounded outline-none"
          />
          {errors.qualification && (
            <p className="text-red-500 text-xs mt-1">{errors.qualification.message}</p>
          )}
        </div>
      </div>
  
      <div>
        <label className="block text-sm font-medium text-gray-700">Experience</label>
        <input
          type="number"
          {...register("experience")}
          className="w-full p-2 border border-gray-400 rounded outline-none"
        />
        {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience.message}</p>}
      </div>
  
      <div>
              <label className="block text-sm font-medium text-gray-700">Profile Photo</label>
              <input type="file" {...register("profilePhoto")} accept="image/png, image/jpeg" className="w-full p-2" />
              {errors.profilePhoto && <p className="text-red-500 text-xs mt-1">{errors.profilePhoto.message}</p>}
            </div>
  
      <div className="flex justify-end space-x-3">
        <button onClick={() => navigate('/dashboard/teachers')} type="button" className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          Cancel
        </button>
        <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          Submit
        </button>
      </div>
    </form>
  </div>
  </div>
  
  )
}

export default UpdateTeacherProfile
