import { Calendar } from "lucide-react"
import { dateFormatter } from "../../../../app/utils/formatter"
import { useNavigate } from "react-router-dom"

const StudyMaterials = () => {
    const navigate = useNavigate()

  return (
    <div>
         <div className="grid grid-cols-4 gap-4 pb-5">

            <div className="rounded-xl overflow-hidden w-full border-2" onClick={() => navigate("/student/subjects/sdf/study-materials/asdfdsaf")}>
            <div className="p-5">
              <div className="flex items-center gap-3 mb-4">
          
                <h2 className="text-lg font-medium text-gray-700">
                  How water cycle works ?
                </h2>
              </div>
      
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-2 text-green-500" />
                  <span className="text-sm">Created: {dateFormatter(String(new Date()))}</span>
                </div>
              </div>
            </div>
          </div>


  </div>
    </div>
  )
}

export default StudyMaterials
