import Breadcrumb from "../../components/Breadcrumb"
import { useNavigate, useOutletContext } from "react-router-dom";
import { Plus } from "lucide-react";
import ChapterCard from "../../../../app/components/Chapter/ChapterCard";
import { fetchChaptersBySubject } from "../../api/api";
import { useEffect, useState } from "react";
import { deleteChapter } from "../../api/api";
import { successToast } from "../../../../app/utils/toastMessage";
import { ChapterType } from "../../types/types";


const Chapter = () => {
    const navigate = useNavigate()
      const { subjectId, classId }: { subjectId: string; classId: string } = useOutletContext()

      const [chaptersData, setChaptersData] = useState([])

          const [showMenu, setShowMenu] = useState("");


      useEffect(() => {

        const fetchChaptersHandler = async (subjectId: string) => {
            const response = await fetchChaptersBySubject(subjectId)
            if(response.success){
                setChaptersData(response.data)
            }
        }

        fetchChaptersHandler(subjectId)

      }, [subjectId])

  const breadcrumbItems = [
    { label: 'Classes', href: `/teacher/classes` },
    { label: 'Chapters', href: `/teacher/classes/dfasf/students` },
  ];

  
     const handleMenu = (id: string) => {
    if(id == showMenu){
      setShowMenu("")
    }else{
      setShowMenu(id)
    }

  }

    const deleteChapterHandler = async (chapterId: string) => {
      const response = await deleteChapter(chapterId);
      if (response.success) {
        const filteredChapters = chaptersData.filter(
          (chapter: ChapterType) => {
            if (chapter._id !== response.data._id) {
              return chapter;
            }
          }
        );
        successToast("Chapter deleted successfully")
  
        setChaptersData(filteredChapters);
      }
    };

  return (
    <div className='p-5 min-h-screen'>
    <div className="flex items-center justify-between mb-5">
        <Breadcrumb items={breadcrumbItems} />
        <button
        onClick={() => (navigate(`/teacher/classes/${classId}/chapters/add`))}
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200 shadow-sm"
      >
        <Plus size={16} />
        <span>Create</span>
      </button>
      </div>

        <div className="flex justify-center w-full">
        <div className="space-y-4 w-6/12">
        {chaptersData.map((chapter) => (
          <ChapterCard chapter={chapter} userType="teacher" showMenu={showMenu} handleMenu={handleMenu} deleteChapterHandler={deleteChapterHandler}/>

        ))}
        </div>
      </div>
    </div>
  )
}

export default Chapter
