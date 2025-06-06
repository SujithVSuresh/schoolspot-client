import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { fetchExamResultsBySubjects, upsertExamResult } from "../../api/api";
import { ExamResultType } from "../../../../app/types/ExamResultType";
import { successToast } from "../../../../app/utils/toastMessage";

type ResultInput = {
  studentId: string;
  studentName: string;
  marksObtained: string;
  grade: string;
};

const AddMarks = () => {
  const { subject: subjectParams, classId, examId } = useParams();
  const students = useSelector((state: RootState) => state.studentListAdmin);

  console.log(students, "this is the student data...")

  const [subject, setSubject] = useState("");
  const [totalMarks, setTotalMarks] = useState("");
  const [results, setResults] = useState<ResultInput[]>([]);

  useEffect(() => {
    setSubject(subjectParams ?? "");
  }, [subjectParams]);

  useEffect(() => {
    const fetchResults = async () => {
      if (!examId || !subject) return;

      const response = await fetchExamResultsBySubjects(examId, subject);

      if (response.success && Array.isArray(response.data)) {
        const updatedResults = response.data.map((item) => ({
          studentId: item.studentId.userId,
          studentName: item.studentId.fullName,
          marksObtained: item.marksObtained.toString(),
          grade: item.grade,
        }));
        setTotalMarks(response.data[0].totalMarks?.toString() ?? "");
        setResults(updatedResults);
      }
    };

    fetchResults();
  }, [examId, subject]);

    useEffect(() => {
    if (students.length > 0) {
      const updatedResults = students.map((student) => ({
        studentId: student.userId,
        studentName: student.studentId.fullName,
        marksObtained: "",
        grade: "",
      }));
      setResults(updatedResults);
    }
  }, [students]);

  const handleChange = (
    index: number,
    field: keyof ResultInput,
    value: string
  ) => {
    const updated = [...results];
    updated[index][field] = value;
    setResults(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!subject || !totalMarks || !classId || !examId) {
      return;
    }

    const submittedResults: ExamResultType[] = results.map((result) => ({
      marksObtained: parseFloat(result.marksObtained),
      grade: result.grade || "N/A",
      subject,
      totalMarks: parseFloat(totalMarks),
      classId,
      examId,
      studentId: result.studentId,
    }));


    const response = await upsertExamResult(submittedResults);

    if (response.success) {
      successToast("Exam result added successfully");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto p-8 bg-white border rounded space-y-4"
      >
        <h2 className="text-xl text-center font-semibold mb-6">Exam Results</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input
            disabled
            type="text"
            placeholder="Subject"
            value={subject}
            className="border p-2 rounded w-full bg-gray-100"
          />
          <input
            type="number"
            placeholder="Total Marks"
            value={totalMarks}
            onChange={(e) => setTotalMarks(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        {results.map((result, index) => (
          <div
            key={result.studentId}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"
          >
            <input
              type="text"
              value={result.studentName}
              readOnly
              className="border p-2 rounded w-full bg-gray-100"
            />
            <input
              type="number"
              placeholder="Marks Obtained"
              value={result.marksObtained}
              onChange={(e) =>
                handleChange(index, "marksObtained", e.target.value)
              }
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              placeholder="Grade"
              value={result.grade}
              onChange={(e) =>
                handleChange(index, "grade", e.target.value)
              }
              className="border p-2 rounded w-full"
            />
          </div>
        ))}

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Submit Results
        </button>
      </form>
    </div>
  );
};

export default AddMarks;
