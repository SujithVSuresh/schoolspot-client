import { BookOpen, Clock } from "lucide-react";
import { dateFormatter, timeFormatter } from "../../../../app/utils/formatter";
import { useOutletContext, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchExamById } from "../../api/api";

const ExamDetails = () => {
  // const navigate = useNavigate()
  const { id } = useParams();
  // const { classId }: { classId: string } = useOutletContext();

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
    <div className="min-h-screen">
      <div>
        <div className="flex items-center mt-5 flex-col gap-3 mb-3">
          <h2 className="text-2xl font-medium text-gray-700">{exam?.name}</h2>
          <span className="text-sm text-gray-600">{exam?.description}</span>
          <span className="text-sm text-gray-600">
            {dateFormatter(String(exam?.startDate))} -{" "}
            {dateFormatter(String(exam?.endDate))}
          </span>
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
