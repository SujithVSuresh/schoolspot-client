import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStudentProfile, updateStudent } from "../../api/api";
import { studentUpdateValidationSchema } from "../../validation/formValidation";
import { StudentProfileUpdateType } from "../../types/types";

const UpdateStudentProfile = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const [userId, setUserId] = useState("")
  
    const {
      register,
      handleSubmit,
      setValue,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(studentUpdateValidationSchema),
    });


  useEffect(() => {
    const fetchStudentData = async () => {
      if (id) {
        const response = await getStudentProfile(id);
        if (response.success) {
          const data = response.data
          // setValue("profilePhoto", data.profilePhoto);
          setValue("fullName", data.fullName);
          setValue("email", data.user.email);
          setValue("gender", data.gender);
          const dob = data.dob ? data.dob.split('T')[0] : '';
          setValue("dob", dob);
          setValue("roll", data.roll.toString());
          setValue("address", data.address);
          setValue("fatherName", data.fatherName);
          setValue("motherName", data.motherName);
          setValue("contactNumber", data.contactNumber);

          setUserId(data.user._id)
        
        } else {
          console.log(response.error);
        }
      }
    };

    fetchStudentData();
  }, [id, setValue]);

  const onSubmit = async (data: StudentProfileUpdateType) => {
    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("gender", data.gender);
    formData.append("dob", data.dob);
    formData.append("roll", data.roll.toString());
    formData.append("address", data.address);
    formData.append("fatherName", data.fatherName);
    formData.append("motherName", data.motherName);
    formData.append("contactNumber", data.contactNumber);

    if (data.profilePhoto && data.profilePhoto instanceof FileList) {
        formData.append("profilePhoto", data.profilePhoto[0]);
      }

    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
    
    const response = await updateStudent(formData, userId)

    if(response.success){
      navigate(`/dashboard/students/profile/${response.data.userId}`)
    }
 
  };
  return (
<div className="pt-10 px-6 flex justify-center w-full">
          <form
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 w-5/12 mt-6 p-8 rounded-lg border border-gray-400"
          >
                    <h1 className="text-xl font-medium text-gray-800 text-center">
          Edit Student
        </h1>
            <div>
              <label className="block text-sm mb-1 font-medium text-gray-700">
                Email
              </label>
              <input
                {...register("email")}
                type="text"
                className="w-full p-2 border border-gray-400 rounded outline-none"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Full Name</label>
              <input {...register("fullName")} className="w-full p-2 border border-gray-400 rounded outline-none" />
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Roll number</label>
                <input {...register("roll")} className="w-full p-2 border border-gray-400 rounded outline-none" />
                {errors.roll && <p className="text-red-500 text-xs mt-1">{errors.roll.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <select {...register("gender")} className="w-full p-3 border border-gray-400 rounded outline-none">
              <option value=""></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender.message}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <input {...register("dob")} type="date" className="w-full p-2 border border-gray-400 rounded outline-none" />
              {errors.dob && <p className="text-red-500 text-xs mt-1">{errors.dob.message}</p>}
            </div>

            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input {...register("address")} className="w-full p-2 border border-gray-400 rounded outline-none" />
              {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Father's Name</label>
                <input {...register("fatherName")} className="w-full p-2 border border-gray-400 rounded outline-none" />
                {errors.fatherName && <p className="text-red-500 text-xs mt-1">{errors.fatherName.message}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Mother's Name</label>
                <input {...register("motherName")} className="w-full p-2 border border-gray-400 rounded outline-none" />
                {errors.motherName && <p className="text-red-500 text-xs mt-1">{errors.motherName.message}</p>}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Contact Number</label>
              <input {...register("contactNumber")} className="w-full p-2 border border-gray-400 rounded outline-none" />
              {errors.contactNumber && <p className="text-red-500 text-xs mt-1">{errors.contactNumber.message}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Profile Photo</label>
              <input type="file" {...register("profilePhoto")} accept="image/png, image/jpeg" className="w-full p-2" />
              {errors.profilePhoto && <p className="text-red-500 text-xs mt-1">{errors.profilePhoto.message}</p>}
            </div>
            
            <div className="flex justify-end space-x-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>



  );
};

export default UpdateStudentProfile;
