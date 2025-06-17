import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { fetchTimetableByClass } from "../../api/api";
import { Pen, Plus, Trash } from "lucide-react";
import TimetableList from "../../../../app/components/Timetable/TimetableList";
import { DaySchedule } from "../../../../app/types/Timetable";
import { deleteTimetable } from "../../api/api";
import AddButton from "../../components/AddButton";
import { useLoading } from "../../../../app/hooks/useLoading";
import CustomProgress from "../../../../app/components/Loader/CustomProgress";
import Spinner from "../../../../app/components/Loader/Spinner";
import NotFound from "../../../../app/components/NotFound";

const ClassTimetable = () => {
  const navigate = useNavigate();
  const { classId }: { classId: string } = useOutletContext();

  const { isLoading, startLoading, stopLoading } = useLoading();

  const [timetable, setTimetable] = useState<DaySchedule[]>([]);
  const [timetableId, setTimetableId] = useState("");

  useEffect(() => {
    const fetchTimetable = async () => {
      if (!classId) return;
      startLoading();

      const response = await fetchTimetableByClass(classId);
      if (response.success) {
        setTimetable(response.data.timetable);
        setTimetableId(response.data._id);
      }
      stopLoading();
    };

    fetchTimetable();
  }, [classId]);

  const deleteTimetableHandler = async (id: string) => {
    const response = await deleteTimetable(id);

    if (response.success) {
      setTimetable([]);
    }
  };

  return (
    <>
      <CustomProgress isAnimating={isLoading} />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-5 gap-4">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 ml-0">
          Timetable
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          {timetable.length == 0 ? (
            <AddButton
              icon={Plus}
              label="Create Timetable"
              navlink={`/dashboard/classes/${classId}/timetable/new`}
            />
          ) : (
            <>
              <button
                onClick={() =>
                  navigate(`/dashboard/classes/${classId}/timetable/new`)
                }
                className="flex items-center justify-center gap-2 text-sm bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition-colors w-full sm:w-auto"
              >
                <Pen className="w-4 h-4" />
              </button>

              <button
                onClick={() => deleteTimetableHandler(timetableId)}
                className="flex items-center justify-center gap-2 text-sm bg-red-600 text-white p-3 rounded-md hover:bg-blue-700 transition-colors w-full sm:w-auto"
              >
                <Trash className="w-4 h-4" />
              </button>
            </>
          )}
        </div>
      </div>

      {isLoading ? (
        <Spinner />
      ) : timetable.length == 0 ? (
        <NotFound />
      ) : (
        <div className="flex flex-col items-center min-h-screen ">
          <div className="w-8/12 mt-10 p-5 bg-white border rounded">
            <TimetableList timetable={timetable} />
          </div>
        </div>
      )}
    </>
  );
};

export default ClassTimetable;
