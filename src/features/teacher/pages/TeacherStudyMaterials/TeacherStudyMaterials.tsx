import { Calendar } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Breadcrumb from "../../components/Breadcrumb";


const TeacherStudyMaterials = () => {
  const navigate = useNavigate()

  const breadcrumbItems = [
    { label: 'Classes', href: `/teacher/classes` },
    { label: 'Study Materials', href: `/teacher/classes/dfasf/students` },
  ];
  return (
    <div className="p-5">

      <Breadcrumb items={breadcrumbItems}/>
    
    <div className="grid grid-cols-4 gap-4 py-5">
    <div className="rounded-xl overflow-hidden w-full border-2">
      <div className="p-6" onClick={() => (navigate('/teacher/classes/2/study-materials/dsfd'))}>
        <div className="flex items-center gap-3 mb-4">
    
          <h2 className="text-lg font-medium text-gray-700">
            Build a simple calculator using JavaScript
          </h2>
        </div>

        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2 text-green-500" />
            <span className="text-sm">Created: April 21, 2025</span>
          </div>
        </div>
      </div>
    </div>





  </div>
  </div>
  )
}

export default TeacherStudyMaterials
