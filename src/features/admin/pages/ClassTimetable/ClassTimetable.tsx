import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { fetchTimetableByClass } from "../../api/api";
import { Pen, Trash } from "lucide-react";
import TimetableList from "../../../../app/components/Timetable/TimetableList";
import { DaySchedule } from "../../../../app/types/Timetable";
import { deleteTimetable } from "../../api/api";

const ClassTimetable = () => {
  const navigate = useNavigate();
  const { classId }: { classId: string } = useOutletContext();

  const [timetable, setTimetable] = useState<DaySchedule[]>([]);
  const [timetableId, setTimetableId] = useState("")


  useEffect(() => {
    const fetchTimetable = async () => {
      if (!classId) return;

      const response = await fetchTimetableByClass(classId);
      console.log(response, "this is the response..")

      if (response.success) {
        setTimetable(response.data.timetable);
        setTimetableId(response.data._id)
      }
    };

    fetchTimetable();
  }, [classId]);


  const deleteTimetableHandler = async (id: string) => {
    const response = await deleteTimetable(id)

    if(response.success){
      setTimetable([])
    }
  }




  return (
    <>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-5 gap-4">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 ml-0">
          Timetable
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          {timetable.length == 0 ? (
       <button
              onClick={() => navigate(`/dashboard/classes/${classId}/timetable/new`)}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
            >
              Add
            </button>
          ) : (
            <>
                          <button
              onClick={() => navigate(`/dashboard/classes/${classId}/timetable/new`)}
              className="flex items-center justify-center gap-2 text-sm bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition-colors w-full sm:w-auto"
            >
             <Pen className="w-4 h-4"/>
            </button>

            <button
              onClick={() => deleteTimetableHandler(timetableId)}
              className="flex items-center justify-center gap-2 text-sm bg-red-600 text-white p-3 rounded-md hover:bg-blue-700 transition-colors w-full sm:w-auto"
            >
             <Trash className="w-4 h-4"/>
            </button>
            </>

          )}
 


        </div>
      </div>

    <div className="flex flex-col items-center min-h-screen ">
    <div className="w-8/12 mt-10 p-5 bg-white border rounded">
       
       {timetable.length === 0 ? (
        <div className="text-center">
          No timetable available for this class.
        </div>
       ) : <TimetableList timetable={timetable}/>}

      
    </div>
    </div>
        </>
  );
};

export default ClassTimetable;
