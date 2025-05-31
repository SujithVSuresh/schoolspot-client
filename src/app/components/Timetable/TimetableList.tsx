import { useState } from "react";
import { DaySchedule } from "../../types/Timetable";

const TimetableList = ({ timetable }: { timetable: DaySchedule[] }) => {
  const today = new Date().getDay() - 1;
  const [selectedDay, setSelectedDay] = useState(today >= 0 ? today : 0);

  //   const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  //  const timetableData = [
  //   [
  //     {
  //       time: '09:00 AM',
  //       subject: 'Mathematics',
  //       teacher: 'Mr. John Doe',
  //       room: 'Room 101',
  //       current: false,
  //     },
  //     {
  //       time: '10:15 AM',
  //       subject: 'English',
  //       teacher: 'Ms. Smith',
  //       room: 'Room 102',
  //       current: false,
  //     },
  //     {
  //       time: '11:30 AM',
  //       subject: 'Physics',
  //       teacher: 'Dr. Albert',
  //       room: 'Room 103',
  //       current: true,
  //     },
  //         {
  //       time: '09:00 AM',
  //       subject: 'Mathematics',
  //       teacher: 'Mr. John Doe',
  //       room: 'Room 101',
  //       current: false,
  //     },
  //     {
  //       time: '10:15 AM',
  //       subject: 'English',
  //       teacher: 'Ms. Smith',
  //       room: 'Room 102',
  //       current: false,
  //     },
  //     {
  //       time: '11:30 AM',
  //       subject: 'Physics',
  //       teacher: 'Dr. Albert',
  //       room: 'Room 103',
  //       current: true,
  //     },
  //   ],
  //   // Tuesday
  //   [
  //     {
  //       time: '09:00 AM',
  //       subject: 'Biology',
  //       teacher: 'Ms. Watson',
  //       room: 'Room 104',
  //       current: false,
  //     },
  //     {
  //       time: '10:15 AM',
  //       subject: 'History',
  //       teacher: 'Mr. Charles',
  //       room: 'Room 105',
  //       current: false,
  //     },
  //   ],
  //   // Wednesday
  //   [
  //     {
  //       time: '09:00 AM',
  //       subject: 'Chemistry',
  //       teacher: 'Dr. Banner',
  //       room: 'Room 106',
  //       current: true,
  //     },
  //     {
  //       time: '10:15 AM',
  //       subject: 'Physical Education',
  //       teacher: 'Coach Steve',
  //       room: 'Ground',
  //       current: false,
  //     },
  //   ],
  //   // Thursday
  //   [
  //     {
  //       time: '09:00 AM',
  //       subject: 'Computer Science',
  //       teacher: 'Ms. Taylor',
  //       room: 'Lab 1',
  //       current: false,
  //     },
  //     {
  //       time: '10:15 AM',
  //       subject: 'Mathematics',
  //       teacher: 'Mr. John Doe',
  //       room: 'Room 101',
  //       current: false,
  //     },
  //     {
  //       time: '11:30 AM',
  //       subject: 'Art',
  //       teacher: 'Mr. Picasso',
  //       room: 'Art Room',
  //       current: false,
  //     },
  //   ],
  //   // Friday
  //   [
  //     {
  //       time: '09:00 AM',
  //       subject: 'English',
  //       teacher: 'Ms. Smith',
  //       room: 'Room 102',
  //       current: false,
  //     },
  //     {
  //       time: '10:15 AM',
  //       subject: 'Geography',
  //       teacher: 'Mr. Hills',
  //       room: 'Room 107',
  //       current: true,
  //     },
  //   ],
  // ];

  const checkCurrentSession = (startTime: string, endTime: string) => {
    if (!startTime || !endTime) return false;

    const now = new Date().getTime();

    console.log(startTime, endTime, new Date(now).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false
        }), "this is the time");

    if (startTime <= new Date(now).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false
        }) && endTime >= new Date(now).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false
        })
    ) {
      return true;
    }

    return false;
  };
  return (
    <div>
      <div className="flex space-x-2 mb-4">
        {timetable?.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedDay(index)}
            className={`py-1 px-3 text-sm font-medium rounded-full transition-colors ${
              selectedDay === index
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {item.day}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-3">
        {timetable[selectedDay]?.periods?.length > 0 ? (
          timetable[selectedDay]?.periods?.map((session, index) => (
            <div
              key={index}
              className={`flex items-center p-3 rounded-lg border 
                    ${checkCurrentSession(session.startTime, session.endTime) ? "bg-indigo-50 " : "bg-white "}
                `}
            >
              <div className="flex-shrink-0 text-center">
                <p className="text-sm font-semibold text-gray-700">
                  {session.startTime}
                </p>
              </div>

              <div className="ml-4 flex-1">
                <p className="text-sm font-medium text-gray-800">
                  {session.subject}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {session.startTime} - {session.endTime}
                </p>
              </div>

              {checkCurrentSession(session.startTime, session.endTime) && (
                <span className="flex-shrink-0 ml-2 w-2 h-2 bg-green-400 rounded-full ring-2 ring-green-100"></span>
              )}
            </div>
          ))
        ) : (
          <div className="text-center w-full py-8">
            {/* <p className="text-gray-500">No classes scheduled for this day</p> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimetableList;
