import { CheckCircle, XCircle } from 'lucide-react';

const Attendance = () => {

    const attendanceData = {
  overallPercentage: 89,
  subjects: [
    {
      name: "Mathematics",
      time: "09:00 AM - 10:30 AM",
      present: true,
      absent: false
    },
    {
      name: "Physics",
      time: "11:00 AM - 12:30 PM",
      present: true,
      absent: false
    },
    {
      name: "Computer Science",
      time: "01:30 PM - 03:00 PM",
      present: false,
      absent: false
    },
    {
      name: "English Literature",
      time: "03:30 PM - 05:00 PM",
      present: false,
      absent: false
    }
  ]
};


      const { overallPercentage, subjects } = attendanceData;
  
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
            <p className={`text-2xl font-bold ${getAttendanceColor(overallPercentage)}`}>
              {overallPercentage}%
            </p>
            <p className="text-xs font-medium mt-1">
              <span className={`${getAttendanceColor(overallPercentage)}`}>
                {getAttendanceStatus(overallPercentage)}
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
                stroke={overallPercentage >= 90 ? '#10B981' : overallPercentage >= 75 ? '#F59E0B' : '#EF4444'}
                strokeWidth="3"
                strokeDasharray={`${overallPercentage}, 100`}
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
