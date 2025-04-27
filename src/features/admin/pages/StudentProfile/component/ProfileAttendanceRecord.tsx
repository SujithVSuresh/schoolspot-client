import { dateFormatter } from "../../../../../app/utils/formatter";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";
const ProfileAttendanceRecord = () => {
  const attendanceData = [
    { date: "2024-03-01", status: "present" },
    { date: "2024-03-02", status: "absent" },
    { date: "2024-03-03", status: "present" },
    { date: "2024-03-04", status: "late" },
    { date: "2024-03-05", status: "present" },
    { date: "2024-03-06", status: "present" },
    { date: "2024-03-07", status: "absent" },
    { date: "2024-03-08", status: "present" },
    { date: "2024-03-09", status: "present" },
    { date: "2024-03-10", status: "late" },
    { date: "2024-03-11", status: "present" },
    { date: "2024-03-12", status: "absent" },
    { date: "2024-03-13", status: "present" },
    { date: "2024-03-14", status: "late" },
    { date: "2024-03-15", status: "present" },
    { date: "2024-03-16", status: "present" },
    { date: "2024-03-17", status: "absent" },
    { date: "2024-03-18", status: "present" },
    { date: "2024-03-19", status: "late" },
    { date: "2024-03-20", status: "present" },
    { date: "2024-03-21", status: "absent" },
    { date: "2024-03-22", status: "present" },
    { date: "2024-03-23", status: "present" },
    { date: "2024-03-24", status: "late" },
    { date: "2024-03-25", status: "present" },
    { date: "2024-03-26", status: "absent" },
    { date: "2024-03-27", status: "present" },
    { date: "2024-03-28", status: "present" },
    { date: "2024-03-29", status: "late" },
    { date: "2024-03-30", status: "present" },
    { date: "2024-03-08", status: "present" },
    { date: "2024-03-09", status: "present" },
    { date: "2024-03-10", status: "late" },
    { date: "2024-03-11", status: "present" },
    { date: "2024-03-12", status: "absent" },
    { date: "2024-03-13", status: "present" },
    { date: "2024-03-14", status: "late" },
    { date: "2024-03-15", status: "present" },
    { date: "2024-03-16", status: "present" },
    { date: "2024-03-17", status: "absent" },
    { date: "2024-03-18", status: "present" },
    { date: "2024-03-19", status: "late" },
    { date: "2024-03-20", status: "present" },
    { date: "2024-03-21", status: "absent" },
    { date: "2024-03-22", status: "present" },
    { date: "2024-03-23", status: "present" },
    { date: "2024-03-24", status: "late" },
    { date: "2024-03-25", status: "present" },
    { date: "2024-03-26", status: "absent" },
    { date: "2024-03-27", status: "present" },
    { date: "2024-03-28", status: "present" },
    { date: "2024-03-29", status: "late" },
    { date: "2024-03-30", status: "present" },
  ];
  
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'present':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'absent':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'absent':
        return 'bg-red-50 text-red-700 border-red-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };
  return (
    <div className='min-h-screen'>
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-5 gap-4">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800 ml-0">
        Attendance Record
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">

      </div>
    </div>

     <div className="flex justify-center">
        <div className="overflow-hidden rounded-xl border border-gray-200 w-4/12">
    
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
              </th> */}
              {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Notes
              </th> */}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {attendanceData.map((record, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-12 py-4 whitespace-nowrap text-sm text-gray-900">
                  {dateFormatter(record.date.toString())}
                </td>
                <td className="px-12 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(record.status)}`}>
                    {getStatusIcon(record.status)}
                    <span className="ml-1 capitalize">{record.status}</span>
                  </span>
                </td>
                {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {record.time}
                </td> */}
                {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {record.note || '-'}
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
  </div>
  )
}

export default ProfileAttendanceRecord
