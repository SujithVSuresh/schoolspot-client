import { UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getStudentsByClassId } from "../../../api/api";
import { useEffect, useState } from "react";
import { StudentUserProfileType } from "../../../types/types";



const StudentList = ({classId} : {classId: string}) => {
  const navigate = useNavigate()

  const [students, setStudents] = useState<StudentUserProfileType[]>([])

  useEffect(() => {
    const fetchStudents = async () => {

      const response = await getStudentsByClassId(classId)

      setStudents(response.data)
    }

    fetchStudents()
  }, [classId])

  return (
    <div>
         <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-5 gap-4">
    <h1 className="text-xl sm:text-2xl font-bold text-gray-800 ml-0">
      Students
    </h1>
    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
   
            <button
              onClick={() => navigate(`/dashboard/students/new/${classId}`)}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
            >
              <UserPlus className="h-5 w-5" />
              Add
            </button>
    </div>
  </div>


  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
{students && students.map((student) => (
    <div className="bg-gray-100 rounded-xl p-4 relative">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"

          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-medium mb-1 text-gray-700 text-sm sm:text-base">
            {student.fullName}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500">Roll no: {student.roll}</p>
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
      
    </div>
  )
}

export default StudentList
