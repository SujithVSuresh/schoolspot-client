
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { teacherValidationSchema } from "../validation/formValidation";
import { TeacherUserProfileType } from "../types/types";
import { createTeacher } from "../api/api";
import { useNavigate } from "react-router-dom";



const AddTeacher = () => {
    const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(teacherValidationSchema),
  });



  const onSubmit = async (data: TeacherUserProfileType) => {
    console.log(data);

    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("profilePhoto", data.profilePhoto[0]);
    formData.append("fullName", data.fullName);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("subjectSpecialized", data.subjectSpecialized);
    formData.append("qualification", data.qualification);
    formData.append("experience", data.experience.toString());
    
    
    const response = await createTeacher(formData)

    if(response.success){
        navigate('/teachers')
      }
 
  };

  return (

        <div className="pt-10 px-6 md:px-16 lg:px-28 flex flex-col justify-center items-center mt-10">
  <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add Teacher</h1>

  <form method="POST" onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-lg">
    {/* Email */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Email</label>
      <input
        {...register("email")}
        type="text"
        className="w-full p-2 border border-gray-400 rounded outline-none"
      />
      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
    </div>

    {/* Password & Confirm Password */}
    <div className="flex flex-col md:flex-row gap-4">
      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          {...register("password")}
          type="password"
          className="w-full p-2 border border-gray-400 rounded outline-none"
        />
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
      </div>

      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
        <input
          {...register("confirmPassword")}
          type="password"
          className="w-full p-2 border border-gray-400 rounded outline-none"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>
        )}
      </div>
    </div>

    {/* Full Name */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Full Name</label>
      <input
        {...register("fullName")}
        className="w-full p-2 border border-gray-400 rounded outline-none"
      />
      {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
    </div>

    {/* Phone Number */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Phone Number</label>
      <input
        {...register("phoneNumber")}
        className="w-full p-2 border border-gray-400 rounded outline-none"
      />
      {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>}
    </div>

    {/* Subject & Qualification */}
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

    {/* Experience */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Experience</label>
      <input
        type="number"
        {...register("experience")}
        className="w-full p-2 border border-gray-400 rounded outline-none"
      />
      {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience.message}</p>}
    </div>

    {/* Profile Photo */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Profile Photo</label>
      <input type="file" {...register("profilePhoto")} accept="image/png, image/jpeg" />
      {errors.profilePhoto && <p className="text-red-500 text-xs mt-1">{errors.profilePhoto.message}</p>}
    </div>

    {/* Buttons */}
    <div className="flex justify-end space-x-3">
      <button type="button" className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
        Cancel
      </button>
      <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
        Submit
      </button>
    </div>
  </form>
</div>

  
  );
};

export default AddTeacher;
