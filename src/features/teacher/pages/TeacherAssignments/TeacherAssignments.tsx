
import { Calendar, Plus } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Breadcrumb from "../../components/Breadcrumb"
import { useOutletContext } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchAssignments } from "../../api/api"
import { dateFormatter } from "../../../../app/utils/formatter"

const TeacherAssignments = () => {
  const {subjectId, classId}: {subjectId: string, classId: string} = useOutletContext()
  const navigate = useNavigate()

  const [assignments, setAssignments] = useState<{_id: string, title: string, dueDate: string, createdAt: string}[]>([])


  useEffect(() => {
    fetchAssignmentHandler()

  }, [subjectId])

  const fetchAssignmentHandler = async () => {
    const response = await fetchAssignments(subjectId)

    if(response.success){
      console.log(response, "response shuu")
      setAssignments(response.data.data)
    }
  }


  const breadcrumbItems = [
    { label: 'Classes', href: `/teacher/classes` },
    { label: 'Assignments', href: `/teacher/classes/${classId}/assignments` },
  ];
  return (
    <div className="p-5">

      <div className="flex items-center justify-between mb-5">
        <Breadcrumb items={breadcrumbItems} />
        <button
        onClick={() => (navigate(`/teacher/classes/${classId}/assignments/add`))}
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200 shadow-sm"
      >
        <Plus size={16} />
        <span>Add</span>
      </button>
      </div>
    
    <div className="grid grid-cols-4 gap-4 pb-5">

      {assignments.map((assignment) => (
    <div className="rounded-xl overflow-hidden w-full border-2">
      <div className="p-6" onClick={() => (navigate(`/teacher/classes/${classId}/assignments/${assignment._id}`))}>
        <div className="flex items-center gap-3 mb-4">
    
          <h2 className="text-lg font-medium text-gray-700">
            {assignment.title}
          </h2>
        </div>

        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2 text-purple-500" />
            <span className="text-sm">Due: {dateFormatter(assignment.dueDate)}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2 text-green-500" />
            <span className="text-sm">Created: {dateFormatter(assignment.createdAt)}</span>
          </div>
        </div>
      </div>
    </div>
        
      ))}



  </div>
  </div>
  )
}

export default TeacherAssignments
