import { useState } from "react";

const AddMarks = () => {
  // Predefined list of subjects
  const subjects = ["Mathematics", "Science", "English", "History", "Geography"];

  // State for subject and total marks (single fields at the top)
  const [subject, setSubject] = useState("");
  const [totalMarks, setTotalMarks] = useState("");

  // Prefetched students data without subject and totalMarks
  const [results, setResults] = useState([
    { studentId: "1", studentName: "Alice", marksObtained: "", grade: "" },
    { studentId: "2", studentName: "Bob", marksObtained: "", grade: "" },
    { studentId: "3", studentName: "Charlie", marksObtained: "", grade: "" },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...results];
    updated[index][field] = value;
    setResults(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add subject and totalMarks to each result
    const submittedResults = results.map((result) => ({
      ...result,
      subject,
      totalMarks,
    }));
    console.log({ results: submittedResults });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto p-8 bg-white border rounded space-y-4"
      >
        <h2 className="text-xl text-center font-semibold mb-6">Exam Results</h2>

        {/* Subject and Total Marks fields at the top */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="border p-2 rounded w-full"
          >
            <option value="" disabled>
              Select Subject
            </option>
            {subjects.map((subj) => (
              <option key={subj} value={subj}>
                {subj}
              </option>
            ))}
          </select>
          <input
            type="number"
            placeholder="Total Marks"
            value={totalMarks}
            onChange={(e) => setTotalMarks(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Student list */}
        <div className="mt-6">
          {results.map((result, index) => (
            <div
              key={index}
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
                onChange={(e) => handleChange(index, "grade", e.target.value)}
                className="border p-2 rounded w-full"
              />
            </div>
          ))}
        </div>

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