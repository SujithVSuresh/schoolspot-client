import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { createExams } from "../../api/api";
import { useNavigate } from "react-router-dom";

const CreateExam = () => {
  const navigate = useNavigate();
  const { classId } = useParams();
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

    const response = await createExams({
      ...examData,
      classId: classId as string,
    });

    if (response.success) {
      navigate(`/dashboard/classes/profile/${classId}/exams`);
    }
  };

  return (
    <div className="min-h-screen py-32 flex items-center justify-center">
  <form
  onSubmit={handleSubmit}
  className="space-y-8 w-full max-w-2xl mx-auto border p-8 rounded-lg bg-white"
>
  <h2 className="text-2xl font-bold text-primaryText text-center">Add Exam</h2>

  <div className="space-y-6">
    <div>
      <label className="block text-sm font-medium text-gray-700">Exam Name</label>
      <input
        type="text"
        name="name"
        value={examData.name}
        onChange={handleChange}
        placeholder="Enter exam name"
        className="mt-1 block w-full px-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-900 text-base"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700">Description</label>
      <textarea
        name="description"
        value={examData.description}
        onChange={handleChange}
        placeholder="Enter description"
        className="mt-1 block w-full px-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-900 text-base"
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Start Date</label>
        <input
          type="date"
          name="startDate"
          value={examData.startDate}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-900 text-base"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">End Date</label>
        <input
          type="date"
          name="endDate"
          value={examData.endDate}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-3 bg-white rounded-lg border border-gray-200 text-gray-900 text-base"
        />
      </div>
    </div>

    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-800">Exam Timetable</h3>


                  <button
            type="button"
            onClick={addTimetableRow}
            className="text-blue-600 text-sm underline"
          >
            Add
          </button>
      </div>

      {examData.examTimetable.map((entry, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-4">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={entry.subject}
            onChange={(e) => handleChange(e, index)}
            className="px-4 py-3 border border-gray-200 rounded-lg text-sm"
          />
          <input
            type="date"
            name="date"
            value={entry.date}
            onChange={(e) => handleChange(e, index)}
            className="px-4 py-3 border border-gray-200 rounded-lg text-sm"
          />
          <input
            type="time"
            name="startTime"
            value={entry.startTime}
            onChange={(e) => handleChange(e, index)}
            className="px-4 py-3 border border-gray-200 rounded-lg text-sm"
          />
          <input
            type="time"
            name="endTime"
            value={entry.endTime}
            onChange={(e) => handleChange(e, index)}
            className="px-4 py-3 border border-gray-200 rounded-lg text-sm"
          />
          <button
            type="button"
            onClick={() => removeTimetableRow(index)}
            className="text-red-600 text-sm underline"
          >
            Remove
          </button>
        </div>
      ))}
    </div>

    <div className="flex justify-end space-x-4 pt-4">
      <button
      onClick={() => navigate(`/dashboard/classes/profile/${classId}/exams`)}
        type="button"
        className="px-6 py-3 border border-gray-300 text-base font-medium rounded-lg hover:bg-gray-50 transition-colors"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="px-6 py-3 bg-primary text-white text-base font-medium rounded-lg hover:bg-secondary"
      >
        Submit
      </button>
    </div>
  </div>
</form>

    </div>
  );
};

export default CreateExam;
