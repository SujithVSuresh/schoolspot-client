import { ChevronRight } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { ClassType } from "../../../types/types"

const ClassCard = ({classData}: {classData: ClassType}) => {
    const navigate = useNavigate()
  return (
          <div className="space-y-4 p-5 hover: cursor-pointer rounded-lg bg-gray-100" onClick={() => navigate(`/dashboard/classes/profile/${classData._id}/students`)}>
          <div className="flex items-center justify-between text-gray-700">
    
            <div>
              <p className="text-sm text-gray-500">Class</p>
              <p className="font-medium">{classData.name} {classData.section}</p>
            </div>
  
            <button className="text-gray-400 hover:text-gray-600 transition-colors relative">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
  )
}

export default ClassCard
