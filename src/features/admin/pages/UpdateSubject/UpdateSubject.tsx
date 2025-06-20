import { useEffect, useState } from "react";
import { fetchSubjectById, getTeachersBySchool, updateSubject } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { subjectSchema } from "../../validation/formValidation";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const UpdateSubject = () => {
  const { classId, subjectId } = useParams();
  const navigate = useNavigate();
  const [teachers, setTeachers] = useState<
    { _id: string; userId: string; fullName: string }[]
  >([]);

  const {
    register,
    handleSubmit,
    setValue,
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


  useEffect(() => {
    const fetchSubject = async (subjectId: string) => {
      const response = await fetchSubjectById(subjectId);

      if (response.success) {
        setValue("name", response.data.name)
        setValue("teacher", response.data.teacher)
      }
    };

    fetchSubject(subjectId as string);
  }, [subjectId, setValue]);

  const onSubmit = async (data: { name: string; teacher: string }) => {
    // if (subjectId) return;
    console.log(subjectId, data, "mmmmm")

    const response = await updateSubject(subjectId as string, {...data, class: classId as string});
    console.log("ooooo", response)

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
      navigate(`/dashboard/classes/profile/${classId}?section=subjects`);
    }
  };
  return (
    <div className="pt-10 px-6 md:px-16 lg:px-28 flex flex-col justify-center items-center mt-10 w-full">
      <form
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 w-5/12 mt-6 p-6 rounded-lg border border-gray-400"
      >
        <h1 className="text-xl font-medium text-gray-800 text-center">
          Update Subject
        </h1>

        <div>
          <label className="block text-sm mb-1 font-medium text-gray-700">
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            className="w-full p-2 border border-gray-400 rounded outline-none"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm mb-1 font-medium text-gray-700">
            Teacher
          </label>
          <select
            {...register("teacher")}
            className="w-full p-2 border border-gray-400 rounded outline-none"
          >
            <option value="">Select a teacher</option>
            {teachers.length > 0 &&
              teachers.map((item) => (
                <option value={item.userId}>{item.fullName}</option>
              ))}
          </select>
          {errors.teacher && (
            <p className="text-red-500 text-xs mt-1">
              {errors.teacher.message}
            </p>
          )}
        </div>

        <div className="flex justify-end space-x-3">
          <button
          onClick={() => navigate(`/dashboard/classes/profile/${classId}?section=subjects`)}
            type="button"
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

export default UpdateSubject;
