import { useState, useEffect } from "react";
import { fetchAttendanceByMonth } from "../../api/api";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { monthFormatter } from "../../../../app/utils/formatter";
import { Calendar, CalendarCheck, CalendarX } from "lucide-react";
import LeaveLetter from "./components/LeaveLetter";

const Attendance = () => {
  const [month, setMonth] = useState(new Date().getMonth() + 1);

  const [year, setYear] = useState(new Date().getFullYear());

  const [attendanceData, setAttendanceData] = useState<
    {
      _id: string;
      status: string;
      createdAt: Date;
    }[]
  >([]);

  useEffect(() => {
    fetchAttendanceHandler(new Date(year, month - 1, 1).toISOString());
  }, [month, year]);

  const fetchAttendanceHandler = async (date: string) => {
    const response = await fetchAttendanceByMonth(date);

    if (response.success) {
      setAttendanceData(response.data);
    }
  };

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month - 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month - 1, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(month, year);
  const firstDayOfMonth = getFirstDayOfMonth(month, year);
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getStatusForDay = (day: number): string => {
    const record = attendanceData.find(
      (record) => new Date(record.createdAt).getDate() === day
    );
    return record?.status ?? "";
  };

  const getStatusClass = (status: string): string => {
    switch (status) {
      case "Present":
        return "bg-green-100 text-green-800 border-green-200";
      case "Absent":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-50 text-gray-400 border-gray-200";
    }
  };

  const moveNextMonth = () => {
    if (month == 12) {
      setYear((prev) => prev + 1);
      setMonth(1);
      return;
    }

    setMonth((prev) => prev + 1);
  };

  const movePrevMonth = () => {
    if (month == 1) {
      setYear((prev) => prev - 1);
      setMonth(12);
      return;
    }

    setMonth((prev) => prev - 1);
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
          className={`h-24 border relative group hover:border-gray-300 transition-colors duration-200 ${
            day === new Date().getDate() &&
            month === new Date().getMonth() + 1 &&
            year === new Date().getFullYear()
              ? "ring-2 ring-primary ring-inset"
              : ""
          }`}
        >
          <div className="p-1 h-full">
            <div className="flex justify-between items-start">
              <span className="font-medium text-gray-700">{day}</span>
              {status && (
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusClass}`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </span>
              )}
            </div>
            {status === "late" && (
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

  const attendacneStat = [
    {
      name: "Working Days",
      data: attendanceData.length,
      icon: <Calendar className="w-5 h-5 text-primaryText" />,
    },
    {
      name: "Present Count",
      data: attendanceData.reduce((acc, val) => {
        if (val.status == "Present") {
          return acc + 1;
        }
        return acc;
      }, 0),
      icon: <CalendarCheck className="w-5 h-5 text-primaryText" />,
    },
    {
      name: "Absent Count",
      data: attendanceData.reduce((acc, val) => {
        if (val.status == "Absent") {
          return acc + 1;
        }
        return acc;
      }, 0),
      icon: <CalendarX className="w-5 h-5 text-primaryText" />,
    },
  ];

  return (
    <div className="rounded-lg overflow-hidden w-full">
      <div className="flex w-full gap-x-5">
        {attendacneStat.map((item, index) => (
          <div key={index} className="w-full flex border p-5 rounded-lg">
            <div className="bg-secondary p-3.5 rounded-full mr-4">
              {item.icon}
            </div>
            <div>
              <p className="text-sm text-secondaryText">{item.name}</p>
              <p className="text-primaryText">{item.data}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="py-4  flex justify-between items-center">
        <div className="mt-4 flex flex-wrap gap-2">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-xs text-gray-600">Present</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-xs text-gray-600">Absent</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={movePrevMonth}
            className="p-1 rounded-md bg-secondary transition-colors duration-200"
            aria-label="Previous month"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          <span className="text-lg font-medium text-gray-800">
            {monthFormatter(String(month))} {year}
          </span>
          <button
            onClick={moveNextMonth}
            className="p-1 rounded-md bg-secondary transition-colors duration-200"
            aria-label="Next month"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
      <div className="flex gap-5">
      <div className="grid grid-cols-7 gap-px w-8/12">
        {weekdays.map((day) => (
          <div
            key={day}
            className="py-2 text-center text-sm font-medium text-primaryText bg-secondary"
          >
            {day}
          </div>
        ))}
        {renderDays()}
      </div>
      <LeaveLetter selectedDate={new Date(year, month - 1, 1).toISOString()} />
      </div>
    </div>
  );
};

export default Attendance;
