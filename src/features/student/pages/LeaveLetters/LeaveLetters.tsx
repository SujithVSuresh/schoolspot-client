import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { fetchLeaveLettersByMonth } from "../../api/api";
import { dateFormatter } from "../../../../app/utils/formatter";
import { Calendar } from "lucide-react";

type ContextType = {
    selectedDate: string;
  };
const LeaveLetters = () => {
    const { selectedDate } = useOutletContext<ContextType>();

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
  return (
    <div>
       {leaveLetterData.map((leave, index) => {
            // const statusConfig = getStatusConfig(leave.status);
    
            return (
              <div
                key={index}
                className="bg-white p-5 mb-5 rounded-xl border"
              >
                <div className="flex justify-between items-start gap-4">
                  {/* <h2 className="text-lg font-semibold text-gray-800">
                {leave.subject}
              </h2> */}
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">
                      {new Date(leave.fromDate).toLocaleDateString()} -{" "}
                      {new Date(leave.toDate).toLocaleDateString()}
                    </span>
                  </div>
    
                  {/* <div
                    className={`flex items-center gap-1 px-3 py-1 rounded-full ${statusConfig.color}`}
                  >
                    {statusConfig.icon}
                    <span className="text-sm font-medium capitalize">
                      {leave.status}
                    </span>
                  </div> */}
                </div>
                <p className="mt-3 text-gray-600 text-sm">Reason: {leave.reason}</p>
    
                   <div className="flex items-center mt-5 text-gray-600">
                     <Calendar className="w-5 h-5 mr-2 text-green-500" />
                     <span className="text-sm">{dateFormatter(String(leave.createdAt))}</span>
                   </div>
              </div>
            );
          })}
          </div>
  );
};

export default LeaveLetters;
