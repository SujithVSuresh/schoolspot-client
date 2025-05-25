import { dateFormatter } from "../../utils/formatter";
import { useNavigate } from "react-router-dom";

const ExamCard = ({
  exam,
  navigationPath
}: {
  exam: { _id: string; name: string; startDate: string; endDate: string };
  navigationPath: string;
}) => {
  const navigate = useNavigate();
  return (
    <div className="rounded-xl overflow-hidden w-full border hover: cursor-pointer">
      <div
        className="p-5"
        onClick={() => navigate(navigationPath)}
      >
        {/* navigate(`/teacher/classes/${classId}/exams/${exam._id}`) */}
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-lg font-medium text-gray-700">{exam.name}</h2>
        </div>

        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <span className="text-sm">
              {dateFormatter(exam?.startDate)} - {dateFormatter(exam?.endDate)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamCard;
