import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { createExams } from "../../api/api";
import { useNavigate } from "react-router-dom";

const CreateExam = () => {
    const navigate = useNavigate()
    const {classId} = useParams()
  const [examData, setExamData] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    examTimetable: [{ subject: "", date: "", startTime: "", endTime: "" }],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index?: number
  ) => {
    const { name, value } = e.target;

    if (typeof index === "number") {
      const updatedTimetable = [...examData.examTimetable];
      //   updatedTimetable[index][name as keyof typeof updatedTimetable[0]] = value;
      if (["subject", "date", "startTime", "endTime"].includes(name)) {
        updatedTimetable[index][
          name as "subject" | "date" | "startTime" | "endTime"
        ] = value;
      }
      setExamData({ ...examData, examTimetable: updatedTimetable });
    } else {
      setExamData({ ...examData, [name]: value });
    }
  };

  const addTimetableRow = () => {
    setExamData((prev) => ({
      ...prev,
      examTimetable: [
        ...prev.examTimetable,
        { subject: "", date: "", startTime: "", endTime: "" },
      ],
    }));
  };

  const removeTimetableRow = (index: number) => {
    const updatedTimetable = examData.examTimetable.filter(
      (_, i) => i !== index
    );
    setExamData({ ...examData, examTimetable: updatedTimetable });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", examData);
    // You can now send `examData` to your backend API

    const response = await createExams({...examData, classId: classId as string});

    if(response.success){
      navigate(`/dashboard/classes/profile/${classId}/exams`)
    }

  };

  return (
    <div className="min-h-screen py-32 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-white p-10 rounded border space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center">Add Exam</h2>

        <div>
          <label className="block font-medium mb-1">Exam Name</label>
          <input
            type="text"
            name="name"
            value={examData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={examData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={examData.startDate}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">End Date</label>
            <input
              type="date"
              name="endDate"
              value={examData.endDate}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div>
            <div className="flex items-center justify-between mb-4">
                          <h3 className="font-medium text-lg mb-2">Exam Timetable</h3>
                          <button
            type="button"
            onClick={addTimetableRow}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add Subject
          </button>
            </div>


          {examData.examTimetable.map((entry, index) => (
            <div key={index} className="grid grid-cols-5 gap-3 mb-3 items-end">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={entry.subject}
                onChange={(e) => handleChange(e, index)}
                className="p-2 border rounded"
              />
              <input
                type="date"
                name="date"
                value={entry.date}
                onChange={(e) => handleChange(e, index)}
                className="p-2 border rounded"
              />
              <input
                type="time"
                name="startTime"
                value={entry.startTime}
                onChange={(e) => handleChange(e, index)}
                className="p-2 border rounded"
              />
              <input
                type="time"
                name="endTime"
                value={entry.endTime}
                onChange={(e) => handleChange(e, index)}
                className="p-2 border rounded"
              />
              <button
                type="button"
                onClick={() => removeTimetableRow(index)}
                className="text-red-600 text-sm"
              >
                Remove
              </button>
            </div>
          ))}


        </div>

<div className="flex justify-center gap-5">
            <button
          type="submit"
          className="w-full py-2 text-black rounded bg-gray-100"
        >
          Cancel
        </button>
                <button
          type="submit"
          className="w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Submit Exam
        </button>

</div>

      </form>
    </div>
  );
};

export default CreateExam;
