interface ModalProps {
  onClose: () => void;
}

const AddStudentProfileModal = ({ onClose }: ModalProps) => {
  return (
    <div>
      <div className="bg-white h-full w-4/12 fixed z-40 right-0">
        <div className="flex items-center w-full h-16">
          <h1 className="text-xl font-medium text-gray-800 pl-8">
            Add Student Profile
          </h1>
        </div>
        <form className="px-10 min-h-[100vh] overflow-y-auto">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Full Name
            </label>
            <input
            //   {...register("fullName")}
              className="w-full p-2 border border-gray-400 rounded outline-none"
            />
            {/* {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.fullName.message}
              </p>
            )} */}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Profile Photo URL
            </label>
            <input
            //   {...register("profilePhoto")}
              className="w-full p-2 border border-gray-400 rounded outline-none"
            />
            {/* {errors.profilePhoto && (
              <p className="text-red-500 text-xs mt-1">
                {errors.profilePhoto.message}
              </p>
            )} */}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
            //   {...register("gender")}
              className="w-full p-2 border border-gray-400 rounded outline-none"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {/* {errors.gender && (
              <p className="text-red-500 text-xs mt-1">
                {errors.gender.message}
              </p>
            )} */}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
            //   {...register("dob")}
              type="date"
              className="w-full p-2 border border-gray-400 rounded outline-none"
            />
            {/* {errors.dob && (
              <p className="text-red-500 text-xs mt-1">{errors.dob.message}</p>
            )} */}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
            //   {...register("address")}
              className="w-full p-2 border border-gray-400 rounded outline-none"
            />
            {/* {errors.address && (
              <p className="text-red-500 text-xs mt-1">
                {errors.address.message}
              </p>
            )} */}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Father's Name
            </label>
            <input
            //   {...register("fatherName")}
              className="w-full p-2 border border-gray-400 rounded outline-none"
            />
            {/* {errors.fatherName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.fatherName.message}
              </p>
            )} */}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mother's Name
            </label>
            <input
            //   {...register("motherName")}
              className="w-full p-2 border border-gray-400 rounded outline-none"
            />
            {/* {errors.motherName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.motherName.message}
              </p>
            )} */}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contact Number
            </label>
            <input
            //   {...register("contactNumber")}
              className="w-full p-2 border border-gray-400 rounded outline-none"
            />
            {/* {errors.contactNumber && (
              <p className="text-red-500 text-xs mt-1">
                {errors.contactNumber.message}
              </p>
            )} */}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Class
            </label>
            <input
            //   {...register("class")}
              className="w-full p-2 border border-gray-400 rounded outline-none"
            />
            {/* {errors.class && (
              <p className="text-red-500 text-xs mt-1">
                {errors.class.message}
              </p>
            )} */}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Section
            </label>
            <input
            //   {...register("section")}
              className="w-full p-2 border border-gray-400 rounded outline-none"
            />
            {/* {errors.section && (
              <p className="text-red-500 text-xs mt-1">
                {errors.section.message}
              </p>
            )} */}
          </div>

          <div className="flex justify-end space-x-3">
            <button
              onClick={() => onClose()}
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
      <div></div>
    </div>
  );
};

export default AddStudentProfileModal;
