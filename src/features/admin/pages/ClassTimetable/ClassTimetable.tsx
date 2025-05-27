import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { fetchTimetableByClass } from "../../api/api";
import { Pen, Trash } from "lucide-react";
import TimetableList from "../../../../app/components/Timetable/TimetableList";
import { DaySchedule } from "../../../../app/types/Timetable";

const ClassTimetable = () => {
  const navigate = useNavigate();
         const { classId }: { classId: string } = useOutletContext();

  const [timetable, setTimetable] = useState<DaySchedule[]>([]);

  console.log("Class ID:", timetable, "this is the timetable");

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




  return (
    <>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-5 gap-4">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 ml-0">
          Timetable
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          {timetable.length == 0 && (
       <button
              onClick={() => navigate(`/dashboard/classes/${classId}/timetable/new`)}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
            >
              Add
            </button>
          )}
 

              <button
              onClick={() => navigate(`/dashboard/classes/${classId}/timetable/new`)}
              className="flex items-center justify-center gap-2 text-sm bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition-colors w-full sm:w-auto"
            >
             <Pen className="w-4 h-4"/>
            </button>

            <button
              onClick={() => navigate(`/dashboard/classes/${classId}/timetable/new`)}
              className="flex items-center justify-center gap-2 text-sm bg-red-600 text-white p-3 rounded-md hover:bg-blue-700 transition-colors w-full sm:w-auto"
            >
             <Trash className="w-4 h-4"/>
            </button>
        </div>
      </div>

    <div className="flex flex-col items-center min-h-screen ">
    <div className="w-8/12 mt-10 p-5 bg-white border rounded">
       
       {timetable.length === 0 && (
        <div className="text-center">
          No timetable available for this class.
        </div>
       )}
{/* 
      {timetable.length > 0 && timetable.map((dayEntry, index) => (
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
      ))} */}

      <TimetableList timetable={timetable}/>
    </div>
    </div>
        </>
  );
};

export default ClassTimetable;
