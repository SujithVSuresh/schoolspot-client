import { MoreVertical } from "lucide-react";
// import AddSubjectModal from "../modal/AddSubjectModal";
import { SubjectType } from "../../types/types";
import { useEffect } from "react";
import { useState } from "react";
import { Plus } from "lucide-react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { fetchSubjects, deleteSubject } from "../../api/api";
import { textFormatter } from "../../../../app/utils/formatter";
import { Edit2, Trash2 } from "lucide-react";

const ClassSubjects = () => {
      const navigate = useNavigate()
      const { classId }: { classId: string } = useOutletContext();

  const [subjects, setSubjects] = useState<SubjectType[]>([]);
  const [showMenu, setShowMenu] = useState("");

  useEffect(() => {
    handleFetchSubjects(classId)
  }, [classId]);

  const handleFetchSubjects = async (classId: string) => {
    const response = await fetchSubjects(classId)

    if(response.success){
      setSubjects(response.data)
    }
  }

  const toggleMenu = (subjectId: string) => {
    setShowMenu((prev) => {
      if(prev && prev == subjectId){
        return ""
      }else{
        return subjectId
      }
    })
  };

  const handleDeleteSubject = async (subjectId: string) => {
    const response = await deleteSubject(subjectId)

    if(response.success){
      console.log(response.data.data)
      const filteredSubjects = subjects.filter((subject) => subject._id != response.data._id)

      setSubjects(filteredSubjects)
      setShowMenu("")
    }
  }
  return (
 <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-5 gap-4">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 ml-0">
          Subjects
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
        <button
              onClick={() => navigate(`/dashboard/classes/subject/new/${classId}`)}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
            >
              <Plus className="h-5 w-5" />
              Add
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
       {subjects && subjects.length > 0 && subjects.map((subject) => (
              <div className="bg-gray-100 rounded-xl p-4 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div>
                <h3 className="font-medium mb-1 text-gray-700 text-sm sm:text-base">
                  {textFormatter(subject.name)}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                {subject.teacher}
                </p>
              </div>
            </div>
            <button onClick={() => toggleMenu(String(subject._id))} className="text-gray-400 hover:text-gray-600 transition-colors relative">
              <MoreVertical className="h-5 w-5" />
            </button>
            {showMenu == subject._id && (
                  <div className="absolute right-9 mt-20 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <button onClick={() => navigate(`/dashboard/classes/subject/${subject._id}/update/${classId}`)} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full">
                        <Edit2 className="h-4 w-4 mr-2" />
                        Edit
                      </button>
                      <button onClick={() => handleDeleteSubject(subject._id as string)}  className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </button>
                    </div>
                  </div>
                )}
          </div>
        </div>
       ))}


      </div>
    </div>
  )
}

export default ClassSubjects
