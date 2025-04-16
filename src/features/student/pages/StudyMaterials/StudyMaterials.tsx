import { Calendar } from "lucide-react"
import { dateFormatter } from "../../../../app/utils/formatter"
import { useNavigate, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { fetchStudyMaterials } from "../../api/api"


const StudyMaterials = () => {
  const location = useLocation()
  const navigate = useNavigate()


  const subjectId = location.pathname.split("/")[3]

  const [studyMaterials, setStudyMaterials] = useState<{
    _id: string,
    title: string,
    createdAt: string
  }[]>([])


  useEffect(() => {
    handleFetchStudyMaterials(subjectId)

  }, [subjectId])

  const handleFetchStudyMaterials = async (subjectId: string) => {

    const studyMaterials = await fetchStudyMaterials(subjectId)

    if(studyMaterials.success){
      setStudyMaterials(studyMaterials.data.data)      
    }

  }

  return (
    <div className="min-h-screen w-full">
         <div className="grid grid-cols-4 gap-4 pb-5">
        {studyMaterials.map((studyMaterial) => (
                      <div key={studyMaterial._id} className="rounded-xl overflow-hidden w-full border-2" onClick={() => navigate(`/student/subjects/${subjectId}/study-materials/${studyMaterial._id}`)}>
                      <div className="p-5">
                        <div className="flex items-center gap-3 mb-4">
                    
                          <h2 className="text-lg font-medium text-gray-700">
                            {studyMaterial.title}
                          </h2>
                        </div>
                
                        <div className="space-y-3">
                          <div className="flex items-center text-gray-600">
                            <Calendar className="w-5 h-5 mr-2 text-green-500" />
                            <span className="text-sm">Created: {dateFormatter(String(studyMaterial.createdAt))}</span>
                          </div>
                        </div>
                      </div>
                    </div>

        ))}



  </div>
    </div>
  )
}

export default StudyMaterials
