import { useEffect, useState } from "react";
import { createTimetable, fetchSubjects } from "../../api/api";
import { useParams } from "react-router-dom";

const AddTimetable = () => {
  const { classId } = useParams();

  const [timetable, setTimetable] = useState([
    {
      day: "",
      periods: [{ subject: "", startTime: "", endTime: "" }],
    },
  ]);

  const [subjects, setSubjects] = useState<{
    _id: string;
    name: string;
    teacher: string;
  }[]>([]);

  useEffect(() => {
    const fetchSubjectsHandler = async (classId: string) => {
      const response = await fetchSubjects(classId);
      if (response.success) {
        console.log("Subjects fetched successfully", response.data);
        setSubjects(response.data);
      }
    };

    if (classId) {
      fetchSubjectsHandler(classId);
    }
  }, [classId]);

  const handleDayChange = (index: number, value: string) => {
    const updated = [...timetable];
    updated[index].day = value;
    setTimetable(updated);
  };

  const handlePeriodChange = (
    dayIndex: number,
    periodIndex: number,
    field: string,
    value: string
  ) => {
    const updated = [...timetable];
    updated[dayIndex].periods[periodIndex][field] = value;
    setTimetable(updated);
  };

  const addDay = () => {
    setTimetable([
      ...timetable,
      { day: "", periods: [{ subject: "", startTime: "", endTime: "" }] },
    ]);
  };

  const addPeriod = (dayIndex: number) => {
    const updated = [...timetable];
    updated[dayIndex].periods.push({
      subject: "",
      startTime: "",
      endTime: "",
    });
    setTimetable(updated);
  };

  const removeDay = (index: number) => {
    const updated = [...timetable];
    updated.splice(index, 1);
    setTimetable(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ timetable });

    const response = await createTimetable({
      classId: classId as string,
      timetable,
    });

    if (response.success) {
      console.log("Timetable created successfully");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white shadow rounded space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center">Add Timetable</h2>

        {timetable.map((dayEntry, dayIndex) => (
          <div key={dayIndex} className="border p-4 rounded space-y-4">
            <div className="flex justify-between items-center">
              <input
                type="text"
                placeholder="Day (e.g., Monday)"
                value={dayEntry.day}
                onChange={(e) => handleDayChange(dayIndex, e.target.value)}
                className="border p-2 rounded w-full"
                required
              />
              <div className="flex gap-4 ml-4">
                <button
                  type="button"
                  onClick={() => addPeriod(dayIndex)}
                  className="text-blue-600 underline"
                >
                  + Add Period
                </button>
                <button
                  type="button"
                  onClick={() => removeDay(dayIndex)}
                  className="text-red-600 underline"
                >
                  Remove Day
                </button>
              </div>
            </div>

            {dayEntry.periods.map((period, periodIndex) => (
              <div
                key={periodIndex}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                <select
                  value={period.subject}
                  onChange={(e) =>
                    handlePeriodChange(
                      dayIndex,
                      periodIndex,
                      "subject",
                      e.target.value
                    )
                  }
                  className="border p-2 rounded"
                  required
                >
                  <option value="">Select Subject</option>
                  {subjects.map((subject) => (
                    <option key={subject.name} value={subject.name}>
                      {subject.name}
                    </option>
                  ))}
                </select>
                <input
                  type="time"
                  value={period.startTime}
                  onChange={(e) =>
                    handlePeriodChange(
                      dayIndex,
                      periodIndex,
                      "startTime",
                      e.target.value
                    )
                  }
                  className="border p-2 rounded"
                  required
                />
                <input
                  type="time"
                  value={period.endTime}
                  onChange={(e) =>
                    handlePeriodChange(
                      dayIndex,
                      periodIndex,
                      "endTime",
                      e.target.value
                    )
                  }
                  className="border p-2 rounded"
                  required
                />
              </div>
            ))}
          </div>
        ))}

        <button
          type="button"
          onClick={addDay}
          className="text-green-600 underline"
        >
          + Add Day
        </button>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Save Timetable
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTimetable;
