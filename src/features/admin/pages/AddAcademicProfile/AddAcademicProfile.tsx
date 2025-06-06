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
        className="space-y-4 w-5/12 mt-6 p-6 rounded-lg border border-gray-400"
      >
        <h1 className="text-xl font-medium text-gray-800 text-center">
          Create Academic Profile
        </h1>

        <div>
          <label className="block text-sm mb-1 font-medium text-gray-700">
            Admission No
          </label>
          <input
            name="admissionNo"
            value={formData.admissionNo}
            onChange={handleChange}
            type="text"
            className="w-full p-2 border border-gray-400 rounded outline-none"
          />
          {errors.admissionNo && (
            <p className="text-red-500 text-xs mt-1">{errors.admissionNo}</p>
          )}
        </div>

        <div>
          <label className="block text-sm mb-1 font-medium text-gray-700">
            Roll No (numbers only)
          </label>
          <input
            name="rollNo"
            value={formData.rollNo}
            onChange={handleChange}
            type="text"
            className="w-full p-2 border border-gray-400 rounded outline-none"
          />
          {errors.rollNo && (
            <p className="text-red-500 text-xs mt-1">{errors.rollNo}</p>
          )}
        </div>

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => {
              // Optional: handle cancel action
            }}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
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

export default AddAcademicProfile;
