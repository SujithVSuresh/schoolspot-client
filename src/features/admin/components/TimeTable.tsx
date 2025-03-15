import React from "react";


type Day = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";

type SubjectDetails = {
    period: number;
    subject: string;
    teacher: string;
    time: string;
  };

const TimeTable = () => {
  const schoolTimetable: Record<Day, SubjectDetails[]> = {
    Monday: [
      {
        period: 1,
        subject: "Mathematics",
        teacher: "Mr. Sharma",
        time: "9:00 AM - 9:45 AM",
      },
      {
        period: 2,
        subject: "Science",
        teacher: "Ms. Gupta",
        time: "9:45 AM - 10:30 AM",
      },
      {
        period: 3,
        subject: "English",
        teacher: "Mrs. Das",
        time: "10:30 AM - 11:15 AM",
      },
      {
        period: 4,
        subject: "History",
        teacher: "Mr. Roy",
        time: "11:30 AM - 12:15 PM",
      },
      {
        period: 5,
        subject: "Physical Education",
        teacher: "Coach Kumar",
        time: "12:15 PM - 1:00 PM",
      },
    ],
    Tuesday: [
      {
        period: 1,
        subject: "Science",
        teacher: "Ms. Gupta",
        time: "9:00 AM - 9:45 AM",
      },
      {
        period: 2,
        subject: "Mathematics",
        teacher: "Mr. Sharma",
        time: "9:45 AM - 10:30 AM",
      },
      {
        period: 3,
        subject: "Geography",
        teacher: "Ms. Rani",
        time: "10:30 AM - 11:15 AM",
      },
      {
        period: 4,
        subject: "English",
        teacher: "Mrs. Das",
        time: "11:30 AM - 12:15 PM",
      },
      {
        period: 5,
        subject: "Art",
        teacher: "Mr. Singh",
        time: "12:15 PM - 1:00 PM",
      },
    ],
    Wednesday: [
      {
        period: 1,
        subject: "English",
        teacher: "Mrs. Das",
        time: "9:00 AM - 9:45 AM",
      },
      {
        period: 2,
        subject: "History",
        teacher: "Mr. Roy",
        time: "9:45 AM - 10:30 AM",
      },
      {
        period: 3,
        subject: "Mathematics",
        teacher: "Mr. Sharma",
        time: "10:30 AM - 11:15 AM",
      },
      {
        period: 4,
        subject: "Science",
        teacher: "Ms. Gupta",
        time: "11:30 AM - 12:15 PM",
      },
      {
        period: 5,
        subject: "Music",
        teacher: "Ms. Iyer",
        time: "12:15 PM - 1:00 PM",
      },
    ],
    Thursday: [
      {
        period: 1,
        subject: "Science",
        teacher: "Ms. Gupta",
        time: "9:00 AM - 9:45 AM",
      },
      {
        period: 2,
        subject: "Mathematics",
        teacher: "Mr. Sharma",
        time: "9:45 AM - 10:30 AM",
      },
      {
        period: 3,
        subject: "English",
        teacher: "Mrs. Das",
        time: "10:30 AM - 11:15 AM",
      },
      {
        period: 4,
        subject: "Geography",
        teacher: "Ms. Rani",
        time: "11:30 AM - 12:15 PM",
      },
      {
        period: 5,
        subject: "Physical Education",
        teacher: "Coach Kumar",
        time: "12:15 PM - 1:00 PM",
      },
    ],
    Friday: [
      {
        period: 1,
        subject: "History",
        teacher: "Mr. Roy",
        time: "9:00 AM - 9:45 AM",
      },
      {
        period: 2,
        subject: "Mathematics",
        teacher: "Mr. Sharma",
        time: "9:45 AM - 10:30 AM",
      },
      {
        period: 3,
        subject: "Science",
        teacher: "Ms. Gupta",
        time: "10:30 AM - 11:15 AM",
      },
      {
        period: 4,
        subject: "English",
        teacher: "Mrs. Das",
        time: "11:30 AM - 12:15 PM",
      },
      {
        period: 5,
        subject: "Art",
        teacher: "Mr. Singh",
        time: "12:15 PM - 1:00 PM",
      },
    ],
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-5 gap-4">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 ml-0">
          Timetable
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          {/* <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
      <input
        value={searchStudent}
        onChange={(e) => setSearchStudent(e.target.value)}
        type="text"
        placeholder="Search..."
        className="w-full sm:w-40 pl-4 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-transparent"
      />
      <select
        value={sortStudent}
        onChange={(e) => setSortStudent(e.target.value)}
        className="w-full sm:w-40 pl-4 pr-8 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-transparent appearance-none bg-white"
      >
        <option value="">Sort</option>
        <option value="name-asc">Name - a to z</option>
        <option value="name-desc">Name - z to a</option>
      </select>
      <button
        onClick={() => updateQuery({ search: searchStudent, page: 1, sort: sortStudent })}
        className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors w-full sm:w-auto"
      >
        <Search className="h-5 w-5" />
      </button>
    </div>
    <button
      onClick={() => navigate('/add-student')}
      className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors w-full sm:w-auto"
    >
      <UserPlus className="h-5 w-5" />
      Add
    </button> */}
        </div>
      </div>

      <div className="flex">
        <div className="flex gap-2">
          {Object.keys(schoolTimetable).map((value) => {
           const validDay = value as Day; 

          return(
            <div className="flex flex-col gap-1">
              <div className="bg-red-400 w-28 h-16">{value}</div>
        
                {schoolTimetable[validDay].map((subject: SubjectDetails) => (
                  <div className="bg-red-400 w-28 h-16">{subject.subject}</div>
                ))}
    
          
              </div>
          )
      
           })}
        </div>
      </div>
    </div>
  );
};

export default TimeTable;
