import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { fetchTimetableByClass } from "../../api/api";


interface Period {
  subject: string;
  startTime: string;
  endTime: string;
}

interface DaySchedule {
  day: string;
  periods: Period[];
}

const ClassTimetable = () => {
  const navigate = useNavigate();
         const { classId }: { classId: string } = useOutletContext();

  const [timetable, setTimetable] = useState<DaySchedule[]>([]);

  useEffect(() => {
    const fetchTimetable = async () => {
      if (!classId) return;

      const response = await fetchTimetableByClass(classId);

      if (response.success) {
        setTimetable(response.data.timetable);
      }
    };

    fetchTimetable();
  }, [classId]);



  if (!timetable.length) {
    return <div className="text-center mt-10 text-gray-500">No timetable available.</div>;
  }

  return (
    <>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-5 gap-4">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 ml-0">
          Subjects
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
        <button
              onClick={() => navigate(`/dashboard/classes/${classId}/timetable/new`)}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
            >
              Add
            </button>
        </div>
      </div>

    <div className="flex flex-col items-center min-h-screen ">
    <div className="w-6/12 mt-10 px-8 py-5 bg-white border rounded">
      {/* <h2 className="text-2xl font-bold text-center mb-6">Timetable</h2> */}

      {timetable.map((dayEntry, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-xl font-medium text-gray-800 mb-2">{dayEntry.day}</h3>
          <div className="grid grid-cols-1 gap-4">
            {dayEntry.periods.map((period, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 border p-4 rounded bg-gray-50"
              >
                <div>
                  <strong></strong> {period.subject}
                </div>
                <div>
                  <strong>Start:</strong> {period.startTime}
                </div>
                <div>
                  <strong>End:</strong> {period.endTime}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
        </>
  );
};

export default ClassTimetable;
