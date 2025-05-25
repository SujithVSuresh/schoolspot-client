import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchExamById } from "../../api/api";
import { ChevronRight } from "lucide-react";
import ExamDetailsHeader from "../../../../app/components/Exam/ExamDetailsHeader";
import ExamTimetable from "../../../../app/components/Exam/ExamTimetable";

const ExamDetails = () => {
  const navigate = useNavigate();
  const { examId: id } = useParams();

  const [exam, setExam] = useState<{
    _id: string;
    name: string;
    startDate: string;
    description: string;
    endDate: string;
    examTimetable: {
      subject: string;
      date: string;
      startTime: string;
      endTime: string;
    }[];
  } | null>(null);

  useEffect(() => {
    const fetchExamHandler = async (id: string) => {
      const exam = await fetchExamById(id);

      if (exam.success) {
        console.log(exam.data);
        setExam(exam.data);
      }
    };

    fetchExamHandler(id as string);
  }, [id]);

  return (
    <div className="py-8 w-full">
      <ExamDetailsHeader
        examData={{
          name: exam?.name ?? "",
          startDate: exam?.startDate ?? "",
          description: exam?.description ?? "",
          endDate: exam?.endDate ?? "",
        }}
      />

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ExamTimetable timetable={exam?.examTimetable ?? []} />

        <div>
          <button
            onClick={() => navigate(`/student/exams/${id}/result`)}
            className="px-4 py-3 w-full bg-blue-600 justify-between hover:bg-blue-700 rounded text-white text-sm transition-colors duration-200 flex items-center"
          >
            <span>View Marks</span>
            <ChevronRight />
          </button>

          {/* <NextExamCountdown exam={upcomingExam} /> */}
          <div className="mt-6 bg-white border rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-800 mb-4">
              Exam Guidelines
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="ml-2 text-gray-600">
                  Arrive 30 minutes before exam start time
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="ml-2 text-gray-600">
                  Bring student ID card and required stationery
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="ml-2 text-gray-600">
                  Mobile phones must be switched off
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="ml-2 text-gray-600">
                  No extra time will be given for late arrivals
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamDetails;
