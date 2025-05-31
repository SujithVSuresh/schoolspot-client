import ChapterCard from "../../../../app/components/Chapter/ChapterCard"
import { useState } from "react";
import { useEffect } from "react";
import { fetchChaptersBySubject } from "../../api/api";

const Chapters = () => {

  const subjectId = location.pathname.split("/")[3];

        const [chaptersData, setChaptersData] = useState([])
  
  
  
        useEffect(() => {
  
          const fetchChaptersHandler = async (subjectId: string) => {
              const response = await fetchChaptersBySubject(subjectId)
              if(response.success){
                  setChaptersData(response.data)
              }
          }
  
          fetchChaptersHandler(subjectId)
  
        }, [subjectId])
  return (
    <div className="min-h-screen flex justify-center">
        

        <div className="w-8/12">
          {
            chaptersData.map((chapter) => (
          <ChapterCard chapter={chapter} userType="student"/>
            ))
          }
        </div>
      
    </div>
  )
}

export default Chapters
