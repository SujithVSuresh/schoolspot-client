import { useState } from 'react';
import { Clock } from 'lucide-react';

const TimeTable = () => {
      const today = new Date().getDay() - 1; // 0 = Monday in our data
  const [selectedDay, setSelectedDay] = useState(today >= 0 ? today : 0);
  
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  // data/timetableData.js

 const timetableData = [
  // Monday
  [
    {
      time: '09:00 AM',
      subject: 'Mathematics',
      teacher: 'Mr. John Doe',
      room: 'Room 101',
      current: false,
    },
    {
      time: '10:15 AM',
      subject: 'English',
      teacher: 'Ms. Smith',
      room: 'Room 102',
      current: false,
    },
    {
      time: '11:30 AM',
      subject: 'Physics',
      teacher: 'Dr. Albert',
      room: 'Room 103',
      current: true,
    },
  ],
  // Tuesday
  [
    {
      time: '09:00 AM',
      subject: 'Biology',
      teacher: 'Ms. Watson',
      room: 'Room 104',
      current: false,
    },
    {
      time: '10:15 AM',
      subject: 'History',
      teacher: 'Mr. Charles',
      room: 'Room 105',
      current: false,
    },
  ],
  // Wednesday
  [
    {
      time: '09:00 AM',
      subject: 'Chemistry',
      teacher: 'Dr. Banner',
      room: 'Room 106',
      current: true,
    },
    {
      time: '10:15 AM',
      subject: 'Physical Education',
      teacher: 'Coach Steve',
      room: 'Ground',
      current: false,
    },
  ],
  // Thursday
  [
    {
      time: '09:00 AM',
      subject: 'Computer Science',
      teacher: 'Ms. Taylor',
      room: 'Lab 1',
      current: false,
    },
    {
      time: '10:15 AM',
      subject: 'Mathematics',
      teacher: 'Mr. John Doe',
      room: 'Room 101',
      current: false,
    },
    {
      time: '11:30 AM',
      subject: 'Art',
      teacher: 'Mr. Picasso',
      room: 'Art Room',
      current: false,
    },
  ],
  // Friday
  [
    {
      time: '09:00 AM',
      subject: 'English',
      teacher: 'Ms. Smith',
      room: 'Room 102',
      current: false,
    },
    {
      time: '10:15 AM',
      subject: 'Geography',
      teacher: 'Mr. Hills',
      room: 'Room 107',
      current: true,
    },
  ],
];

  return (
<div className="bg-white rounded-lg overflow-hidden border">
      <div className="px-6 py-5 border-b">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Class Timetable</h2>
          <div className="text-xs bg-indigo-50 text-indigo-600 py-1 px-2 rounded-full font-medium flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            Today's Schedule
          </div>
        </div>
      </div>
      
      <div className="px-6 py-4">
        <div className="flex space-x-2 mb-4">
          {days.map((day, index) => (
            <button
              key={day}
              onClick={() => setSelectedDay(index)}
              className={`py-1 px-3 text-sm font-medium rounded-full transition-colors ${
                selectedDay === index
                  ? 'bg-indigo-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {day.substring(0, 3)}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {timetableData[selectedDay].length > 0 ? (
            timetableData[selectedDay].map((session, index) => (
              <div 
                key={index}
                className={`flex items-center p-3 rounded-lg border ${
                  session.current ? 'bg-indigo-50 ' : 'bg-white '
                }`}
              >
                <div className="flex-shrink-0 text-center">
                  <p className="text-sm font-semibold text-gray-700">{session.time}</p>
                </div>
                
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-800">{session.subject}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{session.teacher} • {session.room}</p>
                </div>
                
                {session.current && (
                  <span className="flex-shrink-0 ml-2 w-2 h-2 bg-green-400 rounded-full ring-2 ring-green-100"></span>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No classes scheduled for this day</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TimeTable
