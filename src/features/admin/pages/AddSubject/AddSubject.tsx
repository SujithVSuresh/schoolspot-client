import { useState } from "react";
import { useEffect } from "react";
import { getTeachersBySchool } from "../../api/api";
import { useParams, useNavigate } from "react-router-dom";
import { createSubject } from "../../api/api";

const AddSubject = () => {
    const navigate = useNavigate()
    const {classId} = useParams()
      const [teachers, setTeachers] = useState<
        { _id: string; userId: string; fullName: string }[]
      >([]);

      const [teacherId, setTeacherId] = useState("")
      const [subjectName, setSubjectName] = useState("")

        useEffect(() => {
          const fetchTeachersList = async () => {
            const response = await getTeachersBySchool();
      
            if (response.success) {
              setTeachers(response.data);
            }
          };
      
          fetchTeachersList();
        }, []);

        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            const response = await createSubject({name: subjectName, teacher: teacherId, class: classId as string})
            if(response.success){
                console.log("ressss", response)
                navigate(`/dashboard/classes/profile/${classId}?section=students`)
            }
        }
  return (
    <div className="pt-10 px-6 md:px-16 lg:px-28 flex flex-col justify-center items-center mt-10 w-full">
    <form
      method="POST"
      onSubmit={(e) => handleSubmit(e)}
      className="space-y-4 w-5/12 mt-6 p-6 rounded-lg border border-gray-400"
    >
      <h1 className="text-xl font-medium text-gray-800 text-center">
        Add Subject
      </h1>

      <div>
        <label className="block text-sm mb-1 font-medium text-gray-700">
          Name
        </label>
        <input
        //   {...register("strength")}
        onChange={(e) => setSubjectName(e.target.value)}
          type="text"
          className="w-full p-2 border border-gray-400 rounded outline-none"
        />
        {/* {errors.strength && (
          <p className="text-red-500 text-xs mt-1">{errors.strength.message}</p>
        )} */}
      </div>


      <div>
        <label className="block text-sm mb-1 font-medium text-gray-700">
          Teacher
        </label>
        <select
        //   {...register("teacher")}
        onChange={(e) => setTeacherId(e.target.value)}
          className="w-full p-2 border border-gray-400 rounded outline-none"
        >
          <option value="">
            Select a teacher
          </option>
          {teachers.length > 0 &&
            teachers.map((item) => (
              <option value={item.userId}>{item.fullName}</option>
            ))}
        </select>
        {/* {errors.teacher && (
          <p className="text-red-500 text-xs mt-1">
            {errors.teacher.message}
          </p>
        )} */}
      </div>

      <div className="flex justify-end space-x-3">
        <button
        onClick={() => navigate("/dashboard/classes/profile/67dab004e24379ce9e38da47?section=students")}
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
  )
}

export default AddSubject
