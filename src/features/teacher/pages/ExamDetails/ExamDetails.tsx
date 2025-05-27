import { dateFormatter } from "../../../../app/utils/formatter";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchExamById } from "../../api/api";
import ExamTimetable from "../../../../app/components/Exam/ExamTimetable";

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
          <span className="text-lg text-gray-600">{exam?.description}</span>

          <span className="text-sm text-gray-600">
            {dateFormatter(String(exam?.startDate))} -{" "}
            {dateFormatter(String(exam?.endDate))}
          </span>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-7/12 mt-5">
          <ExamTimetable
            timetable={
              exam?.examTimetable as {
                subject: string;
                date: string;
                startTime: string;
                endTime: string;
              }[]
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ExamDetails;
