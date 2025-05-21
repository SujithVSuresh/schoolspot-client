import {Calendar} from 'lucide-react'
import { dateFormatter } from "../../../../app/utils/formatter"
import { useNavigate, useLocation } from "react-router-dom"
import { useState, useEffect } from 'react'
import { fetchAssignments } from '../../api/api'

const Assignments = () => {
  const location = useLocation()
    const navigate = useNavigate()


    const subjectId = location.pathname.split("/")[3]

    const [assignments, setAssignments] = useState<{
      _id: string,
      title: string,
      dueDate: string,
      createdAt: string
    }[]>([])


    useEffect(() => {
      handleFetchAssignments(subjectId)

    }, [subjectId])

    const handleFetchAssignments = async (subjectId: string) => {

      const assignments = await fetchAssignments(subjectId)

      if(assignments.success){
        setAssignments(assignments.data.data)      
      }

    }
    
  return (
    <div className='w-full min-h-screen'>

        <div className='grid grid-cols-3 w-full gap-5'>

     {assignments.map((assignment) => (


<div className="rounded-xl overflow-hidden w-full border-2">
<div className="p-5" onClick={() => (navigate(`/student/subjects/${subjectId}/assignments/${assignment._id}`))}>
  <div className="flex items-center gap-3 mb-4">

    <h2 className="text-lg font-medium text-gray-700">
      {assignment.title}
    </h2>
  </div>

  <div className="space-y-3">
    <div className="flex items-center text-gray-600">
      <Calendar className="w-4 h-4 mr-2 text-purple-500" />
      <span className="text-sm">Due: {dateFormatter(String(assignment.dueDate))}</span>
    </div>

    <div className="flex items-center text-gray-600">
      <Calendar className="w-4 h-4 mr-2 text-green-500" />
      <span className="text-sm">Created: {dateFormatter(String(assignment.createdAt))}</span>
    </div>
  </div>
</div>
</div>

))}
   

    
    </div>
    </div>
  )
}

export default Assignments
