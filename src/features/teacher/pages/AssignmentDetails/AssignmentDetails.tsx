import { Calendar, Link, Text, File } from "lucide-react"
import Breadcrumb from "../../components/Breadcrumb";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchAssignmentById } from "../../api/api";
import { AssignmentType } from "../../types/types";
import { dateFormatter, timeFormatter } from "../../../../app/utils/formatter";
import { textFormatter } from "../../../../app/utils/formatter";
import AssignmentSubmissions from "./components/AssignmentSubmissions";


const AssignmentDetails = () => {
    // const navigate = useNavigate()
    const location  = useLocation()

  const classId = location.pathname.split("/")[3]
  const assignmentId = location.pathname.split("/")[5]

  const [assignment, setAssignment] = useState<AssignmentType | null>({
    _id: "",
    title: "",
    description: "",
    createdAt: "",
    dueDate: "",
    submissionType: "",
    link: ""
  })

    const breadcrumbItems = [
      { label: 'Classes', href: `/teacher/classes` },
      { label: 'Assignments', href: `/teacher/classes/${classId}/assignments` },
      { label: 'Details', href: `/teacher/classes/${classId}/assignments/${assignmentId}` }
    ];

    useEffect(() => {
      fetchAssignmentByIdHandler()

    }, [assignmentId])

    const fetchAssignmentByIdHandler = async () => {
      const assignment = await fetchAssignmentById(assignmentId)

      if(assignment.success){
        setAssignment(assignment.data.data)
      }
    }

  return (
    <div className="p-5">
          <div className="overflow-hidden w-9/12">

          <Breadcrumb items={breadcrumbItems} />
      <div>
        <div className="flex items-center gap-3 mb-4">
    
          <h2 className="text-2xl font-medium text-gray-700">
            {assignment?.title}
          </h2>
        </div>

        <div>
            <h5 className="text-gray-900 font-normal">{assignment?.description}</h5>
        </div>

        <div className="flex items-center gap-2 py-2">
          {
            assignment?.submissionType == "link" ? (
              <Link className="w-4 h-4 text-blue-500" />
            ) : assignment?.submissionType == "file" ? (
              <File className="w-4 h-4 text-blue-500" />
            ) : (
              <Text className="w-4 h-4 text-blue-500" />
            )
          }
        <span className="text-gray-600 font-normal">{textFormatter(assignment?.submissionType as string)} Submission</span>
      </div>



        <div className="flex mt-3 gap-5">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2 text-purple-500" />
            <span className="text-sm">Due: {dateFormatter(assignment?.dueDate as string)} - {timeFormatter(assignment?.dueDate as string)}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2 text-green-500" />
            <span className="text-sm">Created: {dateFormatter(assignment?.createdAt as string)}</span>
          </div>
        </div>
      </div>

 
    </div>

  <AssignmentSubmissions assignmentId={assignmentId}/>


    </div>
  )
}

export default AssignmentDetails
