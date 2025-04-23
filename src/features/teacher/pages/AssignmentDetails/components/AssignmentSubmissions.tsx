import { User, Hash, Clock } from "lucide-react"
import { useEffect, useState } from "react"
import { fetchAssignmentSubmissions } from "../../../api/api"
import { dateFormatter } from "../../../../../app/utils/formatter"
import AssignmentSubmissionModal from "./AssignmentSubmissionModal"
import { fetchAssignmentSubmissionById } from "../../../api/api"
import { AssignmentSubmissionType } from "../../../types/types"
import { addAssignmentSubmissionMark } from "../../../api/api"

const AssignmentSubmissions = ({assignmentId}: {assignmentId: string}) => {

    const [submissions, setSubmissions] = useState<{
        _id: string;
        assignmentId: string;
        student: {
          _id: string,
          fullName: string,
          class: string,
          section: string,
          roll: number
        };
        status: "Pending" | "Submitted" | "Graded";
        submittedAt: Date | null
      }[]>([])

      const [submissionById, setSubmissionById] = useState<AssignmentSubmissionType | null>(null);

      const [isModalOpen, setIsModalOpen] = useState(false);
    
    useEffect(() => {

        fetchAssignmentSubmissionsHandler()

    }, [assignmentId])

    const fetchAssignmentSubmissionsHandler = async () => {
        const response = await fetchAssignmentSubmissions(assignmentId)

        if(response.success){
            setSubmissions(response.data.data)

        }
    }

    const handleSaveGrade = async (grade: string, feedback: string) => {

      if(!grade) return

      const response = await addAssignmentSubmissionMark(submissionById?._id as string, { grade: grade ? grade : "", feedback: feedback ? feedback : "" });
      setSubmissionById(response.data.data)
      setIsModalOpen(false);
    };

    const fetchAssignmentSubmissionByIdHandler = async (submissionId: string) => {
      const response = await fetchAssignmentSubmissionById(submissionId)
       
      if(response.success){
          setSubmissionById(response.data.data)
          setIsModalOpen(true)
      }
  }

  return (
    <div className="border-t sticky bg-white border-gray-200 mt-5">
    <h2 className="text-2xl font-bold my-5 text-gray-700">
            Submissions
          </h2>


<div className="grid grid-cols-3 gap-6">
        {
            submissions.length > 0 && submissions.map((submission, index) => (
                <div className="p-6 rounded-xl border" key={index}>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700">
                    <div className="bg-gray-100 p-3 rounded-full flex justify-center mr-3">
                    <User className="w-5 h-5 text-gray-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Student Name</p>
                      <p className="font-medium">{submission.student.fullName}</p>
                    </div>
                  </div>
      
                  <div className="flex items-center text-gray-700">
                  <div className="bg-gray-100 p-3 rounded-full flex justify-center mr-3">
                    <Hash className="w-5 h-5 text-gray-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Roll Number</p>
                      <p className="font-medium">{submission.student.roll}</p>
                    </div>
                  </div>
      
                  <div className="flex items-center text-gray-700">
                  <div className="bg-gray-100 p-3 rounded-full flex justify-center mr-3">
                    <Clock className="w-5 h-5 text-gray-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Submission Time</p>
                      <p className="font-medium">{!submission.submittedAt ? "---" : dateFormatter(String(submission.submittedAt))}</p>
                    </div>
                  </div>
      
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 ${submission.status == "Pending" ? "text-red-700 bg-red-100" : submission.status == "Submitted" ? "text-emerald-700 bg-emerald-100" : "text-yellow-700 bg-yellow-100"}  rounded-full text-sm font-medium`}>
                 {submission.status}
            </span>

               {submission.status != "Pending" && (
    <button onClick={() => fetchAssignmentSubmissionByIdHandler(submission._id)} className="px-4 py-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors text-sm">
    View Details
  </button>
               )}
                
                  </div>
                </div>
              </div>
      
      
            </div>
            ))
        }
    </div>


    <AssignmentSubmissionModal
        submission={submissionById as AssignmentSubmissionType}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSaveGrade={handleSaveGrade}
      />

    </div>
  )
}

export default AssignmentSubmissions
