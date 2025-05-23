
// import { AttendanceRecord } from '../types';




const Attendance = () => {
  const month = 5
  const year = 2007
   const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(month, year);
  const firstDayOfMonth = getFirstDayOfMonth(month, year);
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getStatusForDay = (day: number): string => {
    // const record = attendanceData.find(record => new Date(record.date).getDate() === day);
    const record = "present"
    return record ? "absent" : '';
  };

  const getStatusClass = (status: string): string => {
    switch (status) {
      case 'present':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'absent':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'late':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'leave':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-50 text-gray-400 border-gray-200';
    }
  };

  const renderDays = () => {
    const days = [];
    
    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div 
          key={`empty-${i}`} 
          className="h-24 border border-gray-200 bg-gray-50"
        ></div>
      );
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const status = getStatusForDay(day);
      const statusClass = getStatusClass(status);
      
      days.push(
        <div 
          key={`day-${day}`} 
          className={`h-24 border relative group hover:border-gray-300 transition-colors duration-200 ${day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear() ? 'ring-2 ring-blue-500 ring-inset' : ''}`}
        >
          <div className="p-1 h-full">
            <div className="flex justify-between items-start">
              <span className="font-medium text-gray-700">{day}</span>
              {status && (
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusClass}`}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </span>
              )}
            </div>
            {status === 'late' && (
              <div className="mt-1 text-xs text-gray-500">
                Arrived at 10:15 AM
              </div>
            )}
          </div>
        </div>
      );
    }
    
    return days;
  };


  return (
    <div className="rounded-lg overflow-hidden w-full">
      <div className="grid grid-cols-7 gap-px">
        {weekdays.map(day => (
          <div 
            key={day} 
            className="py-2 text-center text-sm font-medium text-gray-700 bg-gray-100"
          >
            {day}
          </div>
        ))}
        {renderDays()}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-xs text-gray-600">Present</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <span className="text-xs text-gray-600">Absent</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
          <span className="text-xs text-gray-600">Late</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span className="text-xs text-gray-600">Leave</span>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
