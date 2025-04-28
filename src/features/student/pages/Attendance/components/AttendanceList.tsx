import {
    CheckCircle,
    XCircle,
    AlertCircle,
  } from 'lucide-react';
  import { useEffect, useState } from 'react';
  import { fetchAttendanceByMonth } from '../../../api/api';
  import { dateFormatter } from '../../../../../app/utils/formatter';
  import DatePicker from "react-datepicker";

const AttendanceList = ({date, setSelectedDate}: {date: string; setSelectedDate: (data: Date) => void}) => {

    const [attendanceData, setAttendanceData] = useState<{
        _id: string;
        status: string;
        createdAt: Date;
    }[]>([]);

      useEffect(() => {
        fetchAttendanceHandler(date);
      }, [date]);
    
      const fetchAttendanceHandler = async (date: string) => {
        const response = await fetchAttendanceByMonth(date);

        if(response.success){
            setAttendanceData(response.data);
        }
    
      };
    

    const getStatusIcon = (status: string) => {
        switch (status) {
          case 'Present':
            return <CheckCircle className="w-5 h-5 text-green-500" />;
          case 'Absent':
            return <XCircle className="w-5 h-5 text-red-500" />;
          default:
            return <AlertCircle className="w-5 h-5 text-gray-500" />;
        }
      };
    
      const getStatusColor = (status: string) => {
        switch (status) {
          case 'Present':
            return 'bg-green-50 text-green-700 border-green-200';
          case 'Absent':
            return 'bg-red-50 text-red-700 border-red-200';
          default:
            return 'bg-gray-50 text-gray-700 border-gray-200';
        }
      };


  return (
    <div>
                    <div className="flex justify-between">
        <h2 className="text-xl font-medium text-gray-700">Attendance</h2>
        <div>
        <DatePicker
          selected={new Date(date)}
          onChange={(date) => setSelectedDate(date as Date)}
          dateFormat="MM/yyyy"
          showMonthYearPicker
          className="custom-datepicker-input mb-5"
        />
        </div>

      </div>

  
    <div className="overflow-hidden w-5/12 rounded-xl border border-gray-200">

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
              {dateFormatter(record.createdAt.toString())}
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
  )
}

export default AttendanceList
