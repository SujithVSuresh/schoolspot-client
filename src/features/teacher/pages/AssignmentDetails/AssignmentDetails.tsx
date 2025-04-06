import { Calendar, Clock, Hash, User } from "lucide-react"
// import { useNavigate } from "react-router-dom"
import Breadcrumb from "../../components/Breadcrumb";
import { useLocation } from "react-router-dom";


const AssignmentDetails = () => {
    // const navigate = useNavigate()
    const location  = useLocation()

  const classId = location.pathname.split("/")[3]
  const assignmentId = location.pathname.split("/")[5]

    const breadcrumbItems = [
      { label: 'Classes', href: `/teacher/classes` },
      { label: 'Assignments', href: `/teacher/classes/${classId}/assignments` },
      { label: 'Details', href: `/teacher/classes/${classId}/assignments/${assignmentId}` }
    ];
  return (
    <div className="p-5">
          <div className="overflow-hidden w-9/12">

          <Breadcrumb items={breadcrumbItems} />
      <div>
        <div className="flex items-center gap-3 mb-4">
    
          <h2 className="text-2xl font-medium text-gray-700">
            Build a simple calculator using JavaScript
          </h2>
        </div>

        <div>
            <h5 className="text-gray-900">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</h5>
        </div>

        <div className="flex mt-5 gap-5">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2 text-purple-500" />
            <span className="text-sm">Due: May 5, 2025</span>
          </div>

          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2 text-green-500" />
            <span className="text-sm">Created: April 21, 2025</span>
          </div>
        </div>
      </div>

 
    </div>

    <div className="border-t sticky bg-white border-gray-200 mt-5">
    <h2 className="text-2xl font-bold mt-5 text-gray-700">
            Submissions
          </h2>

      <div className="rounded-xl border-2 w-full max-w-md transform transition-all hover:scale-[1.02]">
       
        <div className="p-6">
      

          <div className="space-y-4">
            <div className="flex items-center text-gray-700">
              <div className="bg-gray-100 p-3 rounded-full flex justify-center mr-3">
              <User className="w-5 h-5 text-gray-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Student Name</p>
                <p className="font-medium">Emily Thompson</p>
              </div>
            </div>

            <div className="flex items-center text-gray-700">
            <div className="bg-gray-100 p-3 rounded-full flex justify-center mr-3">
              <Hash className="w-5 h-5 text-gray-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Roll Number</p>
                <p className="font-medium">CS2023-042</p>
              </div>
            </div>

            <div className="flex items-center text-gray-700">
            <div className="bg-gray-100 p-3 rounded-full flex justify-center mr-3">
              <Clock className="w-5 h-5 text-gray-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Submission Time</p>
                <p className="font-medium">March 14, 2024 - 2:45 PM</p>
              </div>
            </div>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
        Submitted
      </span>
              <button className="px-4 py-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                View Details
              </button>
            </div>
          </div>
        </div>


      </div>
    </div>

    </div>


    </div>
  )
}

export default AssignmentDetails
