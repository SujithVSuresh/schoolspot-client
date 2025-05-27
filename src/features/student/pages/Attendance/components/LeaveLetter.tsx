import { FileText, Calendar, Trash } from 'lucide-react'
import { useState, useEffect } from 'react';
import { fetchLeaveLettersByMonth, deleteLeaveLetter } from '../../../api/api';
import { dateFormatter } from '../../../../../app/utils/formatter';
import { useNavigate } from 'react-router-dom';
import { errorToast } from '../../../../../app/utils/toastMessage';

const LeaveLetter = ({selectedDate}: {selectedDate: string}) => {
  const navigate = useNavigate()
   const [leaveLetters, setLeaveLetters] = useState<
     {
       _id: string;
       fromDate: string;
       toDate: string;
       reason: string;
       createdAt: string;
       status: string;
     }[]
   >([]);

     useEffect(() => {
       fetchLeaveLetterHandler(selectedDate);
     }, [selectedDate]);
   
     const fetchLeaveLetterHandler = async (date: string) => {
       const response = await fetchLeaveLettersByMonth(date);
       if (response.success) {
         setLeaveLetters(response.data);
       } else {
        errorToast(response.error || "Failed to fetch leave letters");
       }
     };

       const handleLeaveLetterDelete = async (id: string) => {
         const response = await deleteLeaveLetter(id)
     
         if(response.success){
           const leaveLetterData = leaveLetters.filter((letter) => letter._id != id)
           setLeaveLetters(leaveLetterData)
         }
       }
   return (
 <div className="bg-white rounded-xl border mt-8 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b flex justify-between items-center border-gray-200">
          <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Leave Letters
          </h2>
          <p className="text-sm text-gray-500">
            All submitted leave applications
          </p>
          </div>

          <button
          onClick={() => navigate('/student/attendance/leave-letter/add')}
            type="submit"
            className="w-auto bg-blue-600 text-white py-2 px-4 text-sm rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
          >
            Apply Leave
          </button>
        </div>
 
        
        <div className="divide-y divide-gray-200 p-5">
          {leaveLetters.length === 0 ? (
            <div className="p-6 text-center">
              <FileText className="h-12 w-12 mx-auto text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No leave letters</h3>
              <p className="mt-1 text-sm text-gray-500">
                There are no leave applications for this month.
              </p>
            </div>
          ) : (
            <div className='grid grid-cols-3 gap-4'>
              {
            leaveLetters.map((leave, index) => (
          <div
                         key={index}
                         className="bg-white p-4 rounded-xl border"
                       >
            
                         <p className="text-gray-600">Reason: {leave.reason}</p>
         
                         <div className="flex items-center mt-3 gap-2 text-gray-600">
                             {/* <Calendar className="w-4 h-4" /> */}
                             <span className="text-sm">Leave Date: </span>
                             <span className="text-sm">
                               {new Date(leave.fromDate).toLocaleDateString()} -{" "}
                               {new Date(leave.toDate).toLocaleDateString()}
                             </span>
                           </div>
             
                          <div className="flex justify-between items-end">
                          <div className="flex items-center mt-5 text-gray-600">
                              <Calendar className="w-4 h-4 mr-2 text-green-500" />
                              <span className="text-sm">{dateFormatter(String(leave.createdAt))}</span>
                            </div>
                          <Trash onClick={() => handleLeaveLetterDelete(leave._id)} className="w-4 h-5 hover:cursor-pointer"/>
                          </div>
                     
                       </div>
            ))
          }
            </div>
          )}
        </div>
      </div>
  )
}

export default LeaveLetter
