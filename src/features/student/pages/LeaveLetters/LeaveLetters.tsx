import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { fetchLeaveLettersByMonth, deleteLeaveLetter } from "../../api/api";
import { dateFormatter } from "../../../../app/utils/formatter";
import { Calendar, Trash } from "lucide-react";


const LeaveLetters = () => {
  const { selectedDate } = useOutletContext<{selectedDate: string}>();

  const [leaveLetterData, setLeaveLetterData] = useState<
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
      setLeaveLetterData(response.data);
    }
  };

  const handleLeaveLetterDelete = async (id: string) => {
    const response = await deleteLeaveLetter(id)

    if(response.success){
      const leaveLetters = leaveLetterData.filter((letter) => letter._id != id)
      setLeaveLetterData(leaveLetters)
    }
  }

  return (
    <div className="p-10 w-full flex justify-center">

      <div className="w-6/12">
       {leaveLetterData.map((leave, index) => {    
            return (
              <div
                key={index}
                className="bg-white mb-5 p-4 rounded-xl border"
              >
                {/* <div className="flex justify-between items-start gap-4"> */}
                  {/* <h2 className="text-lg font-semibold text-gray-800">
                {leave.subject}
              </h2> */}
       
    
                  {/* <div
                    className={`flex items-center gap-1 px-3 py-1 rounded-full ${statusConfig.color}`}
                  >
                    {statusConfig.icon}
                    <span className="text-sm font-medium capitalize">
                      {leave.status}
                    </span>
                  </div> */}
                {/* </div> */}
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
            );
          })}
          </div>
          </div>
  );
};

export default LeaveLetters;
