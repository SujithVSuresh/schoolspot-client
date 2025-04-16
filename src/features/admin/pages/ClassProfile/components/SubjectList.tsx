import { MoreVertical } from "lucide-react";
// import AddSubjectModal from "../modal/AddSubjectModal";
import { SubjectType } from "../../../types/types";
import { useEffect } from "react";
import { useState } from "react";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { removeSubject } from "../../../api/api";
import { fetchSubjects } from "../../../api/api";
import { textFormatter } from "../../../../../app/utils/formatter";

const SubjectList = ({classId}: {classId: string}) => {
  const navigate = useNavigate()
  const [subjects, setSubjects] = useState<SubjectType[]>([]);
  const [menu, setMenu] = useState<number | null>(null);

  useEffect(() => {
    handleFetchSubjects(classId)
  }, [classId]);

  const handleFetchSubjects = async (classId: string) => {
    const response = await fetchSubjects(classId)

    if(response.success){
      setSubjects(response.data)
    }
  }

  const toggleMenu = (index: number) => {
    setMenu(menu === index ? null : index);
  };

  const handleRemoveSubject = async (subjectId: string) => {
    const response = await removeSubject(subjectId, classId)

    if(response.success){
      console.log(response.data.data)
      const filteredSubjects = subjects.filter((subject) => {
        if(subject._id != response.data.data){
          return subject
        }
      })

      setSubjects(filteredSubjects)

      setMenu(null)
    }
  }

  return (
    <div>
      {/* <AddSubjectModal /> */}
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
       {subjects && subjects.length > 0 && subjects.map((subject, index) => (
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
            {/* Menu Button */}
            <button onClick={() => toggleMenu(index)} className="text-gray-400 hover:text-gray-600 transition-colors relative">
              <MoreVertical className="h-5 w-5" />
            </button>
            {/* Dropdown Menu */}
            {menu == index && (
                  <div className="absolute right-8 top-12 w-20 shadow-lg rounded-md border bg-white z-50">
     
                      <button
                      onClick={() => handleRemoveSubject(subject._id as string)}
                        className="w-full py-2 text-sm text-red-600 hover:bg-gray-100 text-center"
                      >
                        Delete
                      </button>
           
                  </div>
                )}
          </div>
        </div>
       ))}


      </div>
    </div>
  );
};

export default SubjectList;
