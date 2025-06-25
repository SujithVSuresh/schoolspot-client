import { useState } from "react";
import { useEffect } from "react";
import { getTeachersBySchool } from "../../api/api";
import { useParams, useNavigate } from "react-router-dom";
import { createSubject } from "../../api/api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { subjectSchema } from "../../validation/formValidation";
import toast from "react-hot-toast";

const AddSubject = () => {
  const navigate = useNavigate();
  const { classId } = useParams();
  const [teachers, setTeachers] = useState<
    { _id: string; userId: string; fullName: string }[]
  >([]);


    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(subjectSchema),
    });

  useEffect(() => {
    const fetchTeachersList = async () => {
      const response = await getTeachersBySchool();

      if (response.success) {
        setTeachers(response.data);
      }
    };

    fetchTeachersList();
  }, []);


    const onSubmit = async (data: { name: string; teacher: string }) => {
          const response = await createSubject({
      name: data.name,
      teacher: data.teacher,
      class: classId as string,
    });
  
      if (response.success) {

        toast("Subject added successfully", {
          duration: 2000,
          position: "bottom-right",
          style: {
            backgroundColor: "#E7FEE2",
            border: "2px, solid, #16A34A",
            minWidth: "400px",
            color: "black",
          },
        });
        navigate(`/dashboard/classes/profile/${classId}/subjects`);
      }
    };

  return (
    <div className="pt-10 px-6 md:px-16 lg:px-28 flex flex-col justify-center items-center mt-10 w-full">
 <form
  method="POST"
  onSubmit={handleSubmit(onSubmit)}
  className="space-y-8 w-5/12 border p-8 rounded-lg"
>
  <h2 className="text-2xl font-bold text-primaryText text-center">Add Subject</h2>
  <div className="space-y-6">
    <div>
      <label className="block text-sm font-medium text-gray-700">Name</label>
      <input
        {...register("name")}
        type="text"
        placeholder="Enter subject name"
        className="mt-1 block w-full px-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-900 text-base"
      />
      {errors.name && (
        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
      )}
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700">Teacher</label>
      <select
        {...register("teacher")}
        className="mt-1 block w-full px-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-900 text-base"
      >
        <option value="">Select a teacher</option>
        {teachers.length > 0 &&
          teachers.map((item) => (
            <option key={item.userId} value={item.userId}>
              {item.fullName}
            </option>
          ))}
      </select>
      {errors.teacher && (
        <p className="text-red-500 text-sm mt-1">{errors.teacher.message}</p>
      )}
    </div>
  </div>

  <div className="flex justify-end space-x-4">
    <button
      onClick={() =>
        navigate(`/dashboard/classes/profile/${classId}/subjects`)
      }
      type="button"
      className="px-6 py-3 border border-gray-300 text-base font-medium rounded-lg hover:bg-gray-50 transition-colors"
    >
      Cancel
    </button>
    <button
      type="submit"
      className="px-6 py-3 bg-primary text-white text-base font-medium rounded-lg hover:bg-secondary transition duration-200 ease-in-out shadow-sm hover:shadow-md"
    >
      Submit
    </button>
  </div>
</form>

    </div>
  );
};

export default AddSubject;
