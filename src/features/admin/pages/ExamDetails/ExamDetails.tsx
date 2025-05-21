import { Clock } from "lucide-react";
import { dateFormatter } from "../../../../app/utils/formatter";
import { useParams, Link} from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchExamById } from "../../api/api";
import { ExamType } from "../../types/types";


const ExamDetails = () => {
  const { examId } = useParams();

  const [exam, setExam] = useState<ExamType | null>(null);

  useEffect(() => {
    const fetchExamHandler = async (id: string) => {
      const exam = await fetchExamById(id);

      if (exam.success) {
        console.log(exam.data);
        setExam(exam.data);
      }
    };

    fetchExamHandler(examId as string);
  }, [examId]);
  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center">
        <div className="flex mt-5 flex-col gap-3 mb-3 text-center">
          <h2 className="text-2xl font-medium text-gray-700">{exam?.name}</h2>
          <span className="text-lg text-gray-600">{exam?.description}</span>
          <span className="text-sm text-gray-600">
            {dateFormatter(String(exam?.startDate))} -{" "}
            {dateFormatter(String(exam?.endDate))}
          </span>
        </div>
      <div className="flex gap-6 text-sm font-medium">
      <Link
        to="/edit"
        className="text-blue-600 underline hover:text-blue-800 transition duration-200"
      >
        Edit
      </Link>
      <Link
        to="/delete"
        className="text-red-600 underline hover:text-red-800 transition duration-200"
      >
        Delete
      </Link>
      <Link
        to="/add-marks"
        className="text-green-600 underline hover:text-green-800 transition duration-200"
      >
        Marks
      </Link>
    </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-7/12 mt-5">
        {
            exam?.examTimetable.map((item) => (
                    <div className={`border rounded-lg p-4 mb-3`}>
            <div className="flex flex-col sm:flex-row justify-between">
              <div className="flex items-start">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {item.subject}
                  </h3>
                  <p className="text-sm text-gray-500">{dateFormatter(String(item.date))}</p>
                </div>
              </div>

              <div className="mt-4 sm:mt-0 flex flex-col items-end">
                <span className={`px-2 py-1 rounded-full text-xs font-medium}`}>
                  Upcoming
                </span>
                <div className="mt-2 flex items-center">
                  <Clock className="h-4 w-4 text-gray-400 mr-1" />
                  <span className="text-sm text-gray-500">
                    {String(item.startTime)} - {String(item.endTime)}
                  </span>
                </div>
              </div>
            </div>
          </div>

            ) )
        }
      

        </div>
      </div>
    </div>
  );
};

export default ExamDetails;
