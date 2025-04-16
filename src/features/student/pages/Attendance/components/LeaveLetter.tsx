import { CheckCircle, XCircle, Plus, Clock, Calendar } from "lucide-react";
import { fetchLeaveLettersByMonth } from "../../../api/api";
import { useState, useEffect } from "react";
import { dateFormatter } from "../../../../../app/utils/formatter";
import { createLeaveLetter } from "../../../api/api";

const getStatusConfig = (status: string) => {
  switch (status) {
    case 'approved':
      return {
        icon: <CheckCircle className="w-4 h-4" />,
        color: 'bg-green-50 text-green-700 border-green-100'
      };
    case 'rejected':
      return {
        icon: <XCircle className="w-4 h-4" />,
        color: 'bg-red-50 text-red-700 border-red-100'
      };
    default:
      return {
        icon: <Clock className="w-4 h-4" />,
        color: 'bg-yellow-50 text-yellow-700 border-yellow-100'
      };
  }
};

const LeaveLetter = ({date, classId}: {date:string, classId: string}) => {

        const [leaveLetterData, setLeaveLetterData] = useState<{
            _id: string;
            fromDate: string;
            toDate: string;
            reason: string;
            createdAt: string;
            status: string
        }[]>([]);

        const [addLeaveLetter, setAddLeaveLetter] = useState(false);

        const [fromDate, setFromDate] = useState("");
        const [toDate, setToDate] = useState("");
        const [reason, setReason] = useState("");
    
          useEffect(() => {
            fetchLeaveLetterHandler(date);
          }, [date]);
        
          const fetchLeaveLetterHandler = async (date: string) => {
            const response = await fetchLeaveLettersByMonth(date);
    
            if(response.success){
                setLeaveLetterData(response.data);
                setAddLeaveLetter(false)
          
            }
        
          };


          const leaveLetterSubmissionHandler = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
             const response = await createLeaveLetter({fromDate, toDate, reason, classId})

             if(response.success){
              console.log(response, "response of leave letter, success")
              setAddLeaveLetter(false)
              setLeaveLetterData((prev) => [...prev, response.data])
             }

          }

   
  return (
    <div className="flex-1 w-full border-l px-5 ml-10 pl-10">
      <div className="mb-5 flex justify-between">
        <h2 className="text-xl font-medium text-gray-700">Leave Letters</h2>
        <button
          onClick={() => setAddLeaveLetter(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg
             hover:bg-blue-700 transition-colors duration-200 font-medium"
        >
          <Plus className="w-4 h-4" />
          New Leave
        </button>
      </div>

{addLeaveLetter && (
      <form onSubmit={(e) => leaveLetterSubmissionHandler(e)} className="mb-8 bg-white p-6 rounded-lg border">
      <div className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <input
           onChange={(e) => setFromDate(e.target.value)}
            type="date"
            name="startDate"
            className="border p-2 rounded"
            required
          />
          <input
          onChange={(e) => setToDate(e.target.value)}
            type="date"
            name="endDate"
            className="border p-2 rounded"
            required
          />
        </div>

        <textarea
        onChange={(e) => setReason(e.target.value)}
          name="reason"
          placeholder="Reason for leave"
          className="border p-2 rounded h-24"
          required
        />

        {/* Buttons Row */}
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={() => setAddLeaveLetter(false)}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </div>
    </form>

)}
    

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

export default LeaveLetter;
