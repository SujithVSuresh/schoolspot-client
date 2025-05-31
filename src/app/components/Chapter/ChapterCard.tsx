import { MoreVertical } from "lucide-react"
import { ChapterType } from "../../../features/teacher/types/types"
import { useNavigate } from "react-router-dom";
import { Edit2, Trash2 } from "lucide-react";


const ChapterCard = ({chapter, userType, showMenu, handleMenu, deleteChapterHandler}: {
    chapter: ChapterType;
    userType: "student" | "teacher";
    showMenu?: string;
    handleMenu?: (id: string) => void;
    deleteChapterHandler?: (chapterId: string) => void;
}) => {

  const navigate = useNavigate()

 
    return (
 <div className="rounded-lg border border-gray-200 p-4">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <h3 className="text-lg font-medium text-gray-700">
             Chapter {chapter.number} -
            </h3>
            <h3 className="text-lg font-medium text-gray-700">
              {chapter.title}
            </h3>
  
          </div>
          <p className="mt-2 text-gray-600">{chapter.description}</p>


        </div>

      {userType == "teacher" && (
        <div className="relative">
          <button
            onClick={() => handleMenu && handleMenu(chapter._id)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <MoreVertical className="h-5 w-5 text-gray-500" />
          </button>

          {showMenu == chapter._id && (
            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                <button
                  onClick={() =>
                    navigate(
                      `/teacher/classes/${chapter.classGrade}/chapters/${chapter._id}/update`
                    )
                  }
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                >
                  <Edit2 className="h-4 w-4 mr-2" />
                  Edit
                </button>
                <button
                  onClick={() => deleteChapterHandler && deleteChapterHandler(chapter._id)}
                  className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
       )} 

      </div>
    </div>
  )
}

export default ChapterCard
