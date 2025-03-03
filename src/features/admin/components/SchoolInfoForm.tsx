import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schoolInfoValidationSchema } from "../validation/formValidation";
import { useDispatch, useSelector } from "react-redux";
import { setSchoolProfile } from "../redux/schoolProfileSlice";
import { RootState } from '../../../app/store'
import { useNavigate } from "react-router-dom";
import { SchoolProfileType } from "../types/types";


const SchoolInfoForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const schoolProfileData = useSelector((state: RootState) => state.schoolProfile)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schoolInfoValidationSchema),
    defaultValues: {
      schoolName: schoolProfileData.schoolName || ""
    }
  });

  const onSubmit = (data: SchoolProfileType) => {
    console.log("Form Data:", data);
    const k = dispatch(setSchoolProfile(data))
    console.log(k, "this is the dispatched result")
    navigate('/signup')
  };
  return (
    <div className="mx-auto px-12 py-12 bg-white rounded border">
      <form
        method="POST"
        className="space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label
            htmlFor="schoolName"
            className="block text-sm mb-1 font-medium text-gray-700"
          >
            School name
          </label>
          <input
            type="text"
            placeholder="school name"
            className="w-full outline-none focus:ring-0 p-2 border border-gray-400 rounded"
            {...register("schoolName")}
          />
          {errors.schoolName && (
            <span className="text-red-500 text-sm">
              {errors.schoolName.message}
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm mb-1 font-medium text-gray-700"
            >
              Email
            </label>
            <input
            value={schoolProfileData.email || ""}
              type="email"
              placeholder="email"
              className="w-full outline-none focus:ring-0 p-2 border border-gray-400 rounded"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm mb-1 font-medium text-gray-700"
            >
              Phone number
            </label>
            <input
              value={schoolProfileData.phoneNumber || ""}
              type="text"
              placeholder="phone number"
              className="w-full outline-none focus:ring-0 p-2 border border-gray-400 rounded"
              {...register("phoneNumber")}
            />
            {errors.phoneNumber && (
              <span className="text-red-500 text-sm">
                {errors.phoneNumber.message}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="regNumber"
              className="block text-sm mb-1 font-medium text-gray-700"
            >
              Reg number
            </label>
            <input
              type="text"
              value={schoolProfileData.regNumber || ""}
              placeholder="reg number"
              className="w-full outline-none focus:ring-0 p-2 border border-gray-400 rounded"
              {...register("regNumber")}
            />
            {errors.regNumber && (
              <span className="text-red-500 text-sm">
                {errors.regNumber.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="yearEstablished"
              className="block text-sm mb-1 font-medium text-gray-700"
            >
              Year established
            </label>
            <input
              type="text"
              value={schoolProfileData.yearEstablished || ""}
              placeholder="year established"
              className="w-full outline-none focus:ring-0 p-2 border border-gray-400 rounded"
              {...register("yearEstablished")}
            />
            {errors.yearEstablished && (
              <span className="text-red-500 text-sm">
                {errors.yearEstablished.message}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="principalName"
              className="block text-sm mb-1 font-medium text-gray-700"
            >
              Principal name
            </label>
            <input
              type="text"
              value={schoolProfileData.principalName || ""}
              placeholder="principal name"
              className="w-full outline-none focus:ring-0 p-2 border border-gray-400 rounded"
              {...register("principalName")}
            />
            {errors.principalName && (
              <span className="text-red-500 text-sm">
                {errors.principalName.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="websiteUrl"
              className="block text-sm mb-1 font-medium text-gray-700"
            >
              Website url
            </label>
            <input
              type="text"
              value={schoolProfileData.websiteUrl || ""}
              placeholder="website url"
              className="w-full outline-none focus:ring-0 p-2 border border-gray-400 rounded"
              {...register("websiteUrl")}
            />
            {errors.websiteUrl && (
              <span className="text-red-500 text-sm">
                {errors.websiteUrl.message}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="totalStudents"
              className="block text-sm mb-1 font-medium text-gray-700"
            >
              Total students
            </label>
            <input
              type="number"
              value={schoolProfileData.totalStudents || ""}
              placeholder="total students"
              className="w-full outline-none focus:ring-0 p-2 border border-gray-400 rounded"
              {...register("totalStudents")}
            />
            {errors.totalStudents && (
              <span className="text-red-500 text-sm">
                {errors.totalStudents.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="totalTeachers"
              className="block text-sm mb-1 font-medium text-gray-700"
            >
              Total teachers
            </label>
            <input
              type="number"
              value={schoolProfileData.totalTeachers || ""}
              placeholder="total teachers"
              className="w-full outline-none focus:ring-0 p-2 border border-gray-400 rounded"
              {...register("totalTeachers")}
            />
            {errors.totalTeachers && (
              <span className="text-red-500 text-sm">
                {errors.totalTeachers.message}
              </span>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="board"
            className="block text-sm mb-1 font-medium text-gray-700"
          >
            Board
          </label>
          <input
            type="text"
            value={schoolProfileData.board || ""}
            placeholder="board"
            className="w-full outline-none focus:ring-0 p-2 border border-gray-400 rounded"
            {...register("board")}
          />
          {errors.board && (
            <span className="text-red-500 text-sm">{errors.board.message}</span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="city"
              className="block text-sm mb-1 font-medium text-gray-700"
            >
              City
            </label>
            <input
              type="text"
              value={schoolProfileData.city || ""}
              placeholder="city"
              className="w-full outline-none focus:ring-0 p-2 border border-gray-400 rounded"
              {...register("city")}
            />
            {errors.city && (
              <span className="text-red-500 text-sm">
                {errors.city.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="state"
              className="block text-sm mb-1 font-medium text-gray-700"
            >
              State
            </label>
            <input
              type="text"
              value={schoolProfileData.state || ""}
              placeholder="state"
              className="w-full outline-none focus:ring-0 p-2 border border-gray-400 rounded"
              {...register("state")}
            />
            {errors.state && (
              <span className="text-red-500 text-sm">
                {errors.state.message}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="country"
              className="block text-sm mb-1 font-medium text-gray-700"
            >
              Country
            </label>
            <input
              type="text"
              value={schoolProfileData.country || ""}
              placeholder="country"
              className="w-full outline-none focus:ring-0 p-2 border border-gray-400 rounded"
              {...register("country")}
            />
            {errors.country && (
              <span className="text-red-500 text-sm">
                {errors.country.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="postalCode"
              className="block text-sm mb-1 font-medium text-gray-700"
            >
              Postal code
            </label>
            <input
              type="text"
              value={schoolProfileData.postalCode || ""}
              placeholder="postal code"
              className="w-full outline-none focus:ring-0 p-2 border border-gray-400 rounded"
              {...register("postalCode")}
            />
            {errors.postalCode && (
              <span className="text-red-500 text-sm">
                {errors.postalCode.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-indigo-600 w-full mt-5 text-white py-3 px-5 rounded-lg font-medium hover:bg-indigo-700"
          >
            Get your free demo
          </button>
        </div>
      </form>
    </div>
  );
};

export default SchoolInfoForm;
