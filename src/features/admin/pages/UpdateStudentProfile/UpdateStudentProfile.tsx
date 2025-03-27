import React from "react";

const UpdateStudentProfile = () => {
  return (
<div className="pt-10 px-6 flex w-full">
  <form
    method="POST"
    className="space-y-4 w-5/12 mt-6 p-8 rounded-lg border border-gray-400"
  >
    <h1 className="text-xl font-medium text-gray-800 text-center">Edit Student</h1>

    {[
      { label: "Email", id: "email", type: "text", placeholder: "Enter email" },
      { label: "Password", id: "password", type: "password", placeholder: "Enter password" },
      { label: "Confirm Password", id: "confirmPassword", type: "password", placeholder: "Confirm password" },
      { label: "Full Name", id: "fullName", type: "text", placeholder: "Enter full name" },
      { label: "Roll Number", id: "roll", type: "text", placeholder: "Enter roll number" },
      { label: "Date of Birth", id: "dob", type: "date" },
      { label: "Address", id: "address", type: "text", placeholder: "Enter address" },
      { label: "Father's Name", id: "fatherName", type: "text", placeholder: "Enter father's name" },
      { label: "Mother's Name", id: "motherName", type: "text", placeholder: "Enter mother's name" },
      { label: "Contact Number", id: "contactNumber", type: "text", placeholder: "Enter contact number" }
    ].map((field) => (
      <div key={field.id} className="relative">
        <label
          htmlFor={field.id}
          className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
        >
          {field.label}
        </label>
        <input
          id={field.id}
          type={field.type}
          className="w-full p-3 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 placeholder-gray-400"
          placeholder={field.placeholder || ''}
          aria-label={`${field.label} input field`}
        />
      </div>
    ))}

    <div className="relative">
      <label
        htmlFor="gender"
        className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
      >
        Gender
      </label>
      <select
        id="gender"
        className="w-full p-4 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
        aria-label="Gender select field"
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>

    <div className="relative">
      <label
        htmlFor="profilePhoto"
        className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-500 bg-gray-50"
      >
        Profile Photo
      </label>
      <input
        id="profilePhoto"
        type="file"
        accept="image/png, image/jpeg"
        className="w-full p-4 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
        aria-label="Profile photo upload"
      />
    </div>

    <div className="flex justify-end space-x-3">
      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">Cancel</button>
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
