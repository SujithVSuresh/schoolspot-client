import { useState, useEffect } from "react";
import { fetchAttendanceOverview } from "../../../api/api";


const Attendance = () => {

  const [attendanceOverview, setAttendanceOverview] = useState<{
    present: number;
    absent: number;
    presentPercentage: number;
  } | null>(null)

      useEffect(() => {
     const fetchAttendanceOverviewHandler = async () => {
        const response = await fetchAttendanceOverview();  
  
        if (response.success) {
          setAttendanceOverview(response.data);
        }
      }
  
      fetchAttendanceOverviewHandler();
      }, []);
  
  // Determine color based on attendance percentage
  const getAttendanceColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-500';
    if (percentage >= 75) return 'text-amber-500';
    return 'text-red-500';
  };
  
  // Calculate attendance status
  const getAttendanceStatus = (percentage: number) => {
    if (percentage >= 90) return 'Excellent';
    if (percentage >= 75) return 'Good';
    return 'At Risk';
  };
  return (
   <div className="bg-white rounded-lg overflow-hidden border h-56">
      <div className="px-6 py-5 border-b">
        <h2 className="text-lg font-semibold text-gray-800">Today's Attendance</h2>
      </div>
      
      <div className="px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-gray-500">Overall Attendance</p>
            <p className={`text-2xl font-bold ${getAttendanceColor(attendanceOverview?.presentPercentage ?? 0)}`}>
              {attendanceOverview?.presentPercentage}%
            </p>
            <p className="text-xs font-medium mt-1">
              <span className={`${getAttendanceColor(attendanceOverview?.presentPercentage ?? 0)}`}>
                {getAttendanceStatus(attendanceOverview?.presentPercentage ?? 0)}
              </span>
              <span className="text-gray-500"> status</span>
            </p>
          </div>
          
          <div className="h-20 w-20 relative">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke={attendanceOverview?.presentPercentage ?? 0 >= 90 ? '#10B981' : attendanceOverview?.presentPercentage ?? 0 >= 75 ? '#F59E0B' : '#EF4444'}
                strokeWidth="3"
                strokeDasharray={`${attendanceOverview?.presentPercentage}, 100`}
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        
      
      </div>
    </div>
  )
}

export default Attendance
