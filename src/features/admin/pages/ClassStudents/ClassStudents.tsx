import { UserPlus } from "lucide-react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
// import { getStudentsByClassId } from "../../api/api";
// import { useEffect, useState } from "react";
// import { StudentUserProfileType } from "../../types/types";

const ClassStudents = () => {
  const navigate = useNavigate();
  const students = useSelector((state: RootState) => state.studentListAdmin);
  const { classId }: { classId: string } = useOutletContext();

  console.log(students, "this is the students...")

  // const [students, setStudents] = useState<StudentUserProfileType[]>([])

  // useEffect(() => {
  //   const fetchStudents = async () => {

  //     const response = await getStudentsByClassId(classId)

  //     setStudents(response.data)
  //   }

  //   fetchStudents()
  // }, [classId])
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-5 gap-4">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 ml-0">
          Students
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <button
            onClick={() => navigate(`/dashboard/classes/${classId}/academicProfile/new`)}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
          >
            <UserPlus className="h-5 w-5" />
            Add
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {students &&
          students.map((student) => (
            <div className="bg-gray-100 rounded-xl p-4 relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={student.studentId.profilePhoto as string}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium mb-1 text-gray-700 text-sm sm:text-base">
                      {student.studentId.fullName}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Roll no: {student.roll}
                    </p>
                  </div>
                </div>
                {/* Menu Button */}
                {/* <button
        className="text-gray-400 hover:text-gray-600 transition-colors relative"

      >
        <MoreVertical className="h-5 w-5" />
      </button> */}
                {/* Dropdown Menu */}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ClassStudents;
