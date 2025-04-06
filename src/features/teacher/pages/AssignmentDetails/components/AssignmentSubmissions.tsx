import { User, Hash, Clock } from "lucide-react"
import { useEffect, useState } from "react"
import { fetchAssignmentSubmissions } from "../../../api/api"

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

    useEffect(() => {

        fetchAssignmentSubmissionsHandler()

    }, [assignmentId])

    const fetchAssignmentSubmissionsHandler = async () => {
        const response = await fetchAssignmentSubmissions(assignmentId)

        if(response.success){
            console.log(response.data, 'nnn')
            setSubmissions(response.data.data)

        }
    }
  return (
    <div className="border-t sticky bg-white border-gray-200 mt-5">
    <h2 className="text-2xl font-bold my-5 text-gray-700">
            Submissions
          </h2>

      <div className="grid grid-cols-4 gap-6">
        {
            submissions.length > 0 && submissions.map((submission) => (
                <div className="p-6 rounded-xl border">
      

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
                      <p className="font-medium">{!submission.submittedAt ? "---" : String(submission.submittedAt)}</p>
                    </div>
                  </div>
      
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 ${submission.status == "Pending" ? "text-red-700 bg-red-100" : submission.status == "Submitted" ? "text-emerald-700 bg-emerald-100" : "text-yellow-700 bg-yellow-100"}  rounded-full text-sm font-medium`}>
                 {submission.status}
            </span>
                    <button className="px-4 py-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
      
      
            </div>
            ))
        }

        

  
    </div>

    </div>
  )
}

export default AssignmentSubmissions
