import { fetchPendingAssignments } from "../../../api/api";
import { useEffect, useState } from "react";
import { dateFormatter, timeFormatter } from "../../../../../app/utils/formatter";
import { useNavigate } from "react-router-dom";
import { AssignmentType } from "../../../../teacher/types/types";
   
   const Assignments = ({classId}: {classId: string}) => {
    const navigate = useNavigate();

    const [assignmentSubmissionsData, setAssignmentSubmissionsData] = useState<{
        _id: string, 
        status: "Pending" | "Submitted" | "Graded",
        assignmentId: AssignmentType
    }[]>([])

    useEffect(() => {
   const fetchAssignmentSubmissionsHandler = async () => {
      const response = await fetchPendingAssignments();
          console.log(response, "this is the response for assss");


      if (response.success) {
        setAssignmentSubmissionsData(response.data.data);
      }
    }

    fetchAssignmentSubmissionsHandler();
    }, [classId]);




     return (
     <div className="bg-white rounded-lg overflow-hidden border h-full flex-1">
      <div className="px-6 py-5 border-b">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Assignments</h2>

        </div>
      </div>
      
      <div className="px-6 py-2">
        <div className="divide-y divide-gray-100">
          {assignmentSubmissionsData.map((assignment, index) => (
            <div 
              key={index} 
              className="py-3 transition-all hover:bg-gray-50 rounded-md px-2 -mx-2 cursor-pointer"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-1">
                </div>
                
                <div className="ml-3 flex-1">
                  <div className="flex items-center justify-between">
                    <p className={`text-sm font-medium text-gray-800 line-clamp-1`}>
                      {assignment.assignmentId.title}
                    </p>
                    <span className="text-xs pl-5 text-gray-500">{timeFormatter(assignment.assignmentId.createdAt)}</span>
                  </div>
                  
                  <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                    {assignment.assignmentId.description}
                  </p>

                  <div className="mt-2 text-xs font-medium text-gray-800 flex justify-between">
                    <span>Due: {dateFormatter(assignment.assignmentId.dueDate)}</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  {assignment.status}
                 </span>
                  </div>
                  

                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button onClick={() => navigate('/student/announcements')} className="mt-1 w-full py-2 px-4 bg-white border rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
          View All Announcements
        </button>
      </div>
    </div>
     )
   }
   
   export default Assignments
   