

import React from 'react'

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
  
  return (
    <>
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-5 gap-4">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800 ml-0">
        Attendance
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">

      </div>
    </div>

    <div className="flex">
      <div className="w-9/12">

       <div className='flex flex-wrap bg-white p-8 rounded-2xl gap-1'>

      {attendanceData.map((data) => (
        <div className={`w-10 h-10 ${data.status == "absent" ? "bg-red-400" : "bg-green-400"}`}>
          
        </div>
      ))}
              
       </div>
    
      </div>

      <div className="flex-1 flex justify-center bg-red-400 items-start">
        {/* <Calendar onChange={onChange} value={value} /> */}
      </div>
    </div>
  </>
  )
}

export default ProfileAttendanceRecord
