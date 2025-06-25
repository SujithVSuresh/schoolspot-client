import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { studentValidationSchema } from "../../validation/formValidation";
import { createStudent } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { StudentValidationSchemaType } from "../../../../app/types/StudentType";
import { errorToast, successToast } from "../../../../app/utils/toastMessage";

const AddStudent = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(studentValidationSchema),
  });

  const onSubmit = async (data: StudentValidationSchemaType) => {
    const formData = new FormData();

    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("profilePhoto", data.profilePhoto[0]);
    formData.append("fullName", data.fullName);
    formData.append("gender", data.gender);
    formData.append("dob", data.dob);
    formData.append("address", data.address);
    formData.append("fatherName", data.fatherName);
    formData.append("motherName", data.motherName);
    formData.append("admissionNo", data.admissionNo);
    formData.append("parentContactNumber", data.parentContactNumber);
    formData.append("parentEmailAddress", data.parentEmailAddress);

    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
    
    const response = await createStudent(formData)


    console.log(response, "this is the response student")

    if(response.success){
      successToast("User profile created successfully")
      navigate(`/dashboard/students`)
    }else{
      errorToast(response.error.message)
    }
 
  };
  return (

        <div className="pt-10 px-6 flex justify-center w-full">
<form
  method="POST"
  onSubmit={handleSubmit(onSubmit)}
  className="space-y-8 w-5/12 mt-6 p-8 rounded-lg border border-gray-200 shadow-sm"
>
  <h1 className="text-2xl font-bold text-primaryText text-center">
    Add Student
  </h1>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
    <input
      {...register("email")}
      type="text"
      placeholder="Enter email"
      className="mt-1 block w-full px-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-900 text-base"
    />
    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
      <input
        {...register("password")}
        type="password"
        placeholder="Enter password"
        className="mt-1 block w-full px-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-900 text-base"
      />
      {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
      <input
        {...register("confirmPassword")}
        type="password"
        placeholder="Re-enter password"
        className="mt-1 block w-full px-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-900 text-base"
      />
      {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
      <input
        {...register("fullName")}
        placeholder="Enter full name"
        className="mt-1 block w-full px-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-900 text-base"
      />
      {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Admission No</label>
      <input
        {...register("admissionNo")}
        placeholder="Enter admission number"
        className="mt-1 block w-full px-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-900 text-base"
      />
      {errors.admissionNo && <p className="text-red-500 text-sm mt-1">{errors.admissionNo.message}</p>}
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
      <select
        {...register("gender")}
        className="mt-1 block w-full px-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-900 text-base"
      >
        <option value="">Select gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>}
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
      <input
        {...register("dob")}
        type="date"
        className="mt-1 block w-full px-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-900 text-base"
      />
      {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob.message}</p>}
    </div>
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
    <input
      {...register("address")}
      placeholder="Enter address"
      className="mt-1 block w-full px-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-900 text-base"
    />
    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Father's Name</label>
      <input
        {...register("fatherName")}
        placeholder="Enter father's name"
        className="mt-1 block w-full px-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-900 text-base"
      />
      {errors.fatherName && <p className="text-red-500 text-sm mt-1">{errors.fatherName.message}</p>}
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Mother's Name</label>
      <input
        {...register("motherName")}
        placeholder="Enter mother's name"
        className="mt-1 block w-full px-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-900 text-base"
      />
      {errors.motherName && <p className="text-red-500 text-sm mt-1">{errors.motherName.message}</p>}
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Parent Email</label>
      <input
        {...register("parentEmailAddress")}
        placeholder="Enter parent email"
        className="mt-1 block w-full px-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-900 text-base"
      />
      {errors.parentEmailAddress && <p className="text-red-500 text-sm mt-1">{errors.parentEmailAddress.message}</p>}
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Parent Contact</label>
      <input
        {...register("parentContactNumber")}
        placeholder="Enter parent contact"
        className="mt-1 block w-full px-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-900 text-base"
      />
      {errors.parentContactNumber && <p className="text-red-500 text-sm mt-1">{errors.parentContactNumber.message}</p>}
    </div>
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Profile Photo</label>
    <input
      type="file"
      {...register("profilePhoto")}
      accept="image/png, image/jpeg"
      className="mt-1 block w-full text-sm text-gray-700 bg-white border border-gray-200 rounded-lg cursor-pointer"
    />
    {errors.profilePhoto && <p className="text-red-500 text-sm mt-1">{errors.profilePhoto.message}</p>}
  </div>

  <div className="flex justify-end space-x-3">
    <button
    onClick={() => navigate('/dashboard/students')}
      type="button"
      className="px-6 py-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 text-base font-medium transition duration-200 ease-in-out shadow-sm"
    >
      Cancel
    </button>
    <button
      type="submit"
      className="px-6 py-3 border border-transparent rounded-lg bg-primary text-white hover:bg-secondary text-base font-medium"
    >
      Submit
    </button>
  </div>
</form>

        </div>


  );
};

export default AddStudent;
