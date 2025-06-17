import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createAcademicProfile } from '../../api/api';
import { errorToast, successToast } from '../../../../app/utils/toastMessage';


const AddAcademicProfile = () => {
  const {classId} = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    admissionNo: '',
    rollNo: '',
  });

  const [errors, setErrors] = useState({
    admissionNo: '',
    rollNo: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Only allow numbers in rollNo field
    if (name === 'rollNo' && !/^\d*$/.test(value)) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error message when typing
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const validate = () => {
    let valid = true;
    const newErrors = { admissionNo: '', rollNo: '' };

    if (!formData.admissionNo.trim()) {
      newErrors.admissionNo = 'Admission No is required';
      valid = false;
    }
    if (!formData.rollNo.trim()) {
      newErrors.rollNo = 'Roll No is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    console.log('Form submitted:', formData);

    const response = await createAcademicProfile({
      admissionNo: formData.admissionNo,
      roll: Number(formData.rollNo),
      classId: classId as string
    })

    if(response.success){
      successToast("Student academic profile created successfully")
      navigate(`/dashboard/classes/profile/${classId}/students`)
    }else{
      errorToast(response.error.message)
    }

    console.log(response, "student academic profile......")



    // TODO: Send data to backend using axios/fetch
  };

  return (
    <div className="pt-10 px-6 md:px-16 lg:px-28 flex flex-col justify-center items-center mt-10 w-full">
     <form
  method="POST"
  onSubmit={handleSubmit}
  className="space-y-8 w-5/12 border p-8 rounded-lg"
>
  <h1 className="text-2xl font-bold text-primaryText text-center">
    Academic Profile
  </h1>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Admission no
    </label>
    <input
      name="admissionNo"
      value={formData.admissionNo}
      onChange={handleChange}
      type="text"
      placeholder="Enter admission number"
      className="mt-1 block w-full px-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-900 text-base"
    />
    {errors.admissionNo && (
      <p className="text-red-500 text-sm mt-1">{errors.admissionNo}</p>
    )}
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Roll no
    </label>
    <input
      name="rollNo"
      value={formData.rollNo}
      onChange={handleChange}
      type="text"
      placeholder="Enter roll number"
      className="mt-1 block w-full px-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-900 text-base"
    />
    {errors.rollNo && (
      <p className="text-red-500 text-sm mt-1">{errors.rollNo}</p>
    )}
  </div>

  <div className="flex justify-end space-x-3">
    <button
      type="button"
      onClick={() => {
        navigate(`/dashboard/classes/profile/${classId}/students`)
      }}
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

export default AddAcademicProfile;
