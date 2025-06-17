import { useEffect, useState } from "react";
import { dateFormatter } from "../../../../app/utils/formatter";
import { useNavigate, useOutletContext } from "react-router-dom";
import { fetchExams } from "../../api/api";
import { Plus } from "lucide-react";
import AddButton from "../../components/AddButton";
import { useLoading } from "../../../../app/hooks/useLoading";
import CustomProgress from "../../../../app/components/Loader/CustomProgress";
import Spinner from "../../../../app/components/Loader/Spinner";
import NotFound from "../../../../app/components/NotFound";

const ClassExams = () => {
  const navigate = useNavigate();
  const { classId }: { classId: string } = useOutletContext();

  const { isLoading, startLoading, stopLoading } = useLoading();

  const [exams, setExams] = useState<
    {
      _id: string;
      name: string;
      startDate: string;
      endDate: string;
    }[]
  >([]);

  useEffect(() => {
    const fetchExamHandler = async (classId: string) => {
      startLoading()
      const exams = await fetchExams(classId);

      if (exams.success) {
        setExams(exams.data);
      }
      stopLoading()
    };

    fetchExamHandler(classId as string);
  }, [classId]);
  return (
    <div className="min-h-screen w-full">
      <CustomProgress isAnimating={isLoading} />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-5 gap-4">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 ml-0">
          Exams
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <AddButton
            icon={Plus}
            label="Create Exam"
            navlink={`/dashboard/classes/${classId}/exam/new`}
          />
        </div>
      </div>
      <div>
        {isLoading ? (
          <Spinner />
        ) : exams.length === 0 ? (
          <NotFound />
        ) : (
      <div className="grid grid-cols-3 gap-3">
          {exams.map((exam) => (
            <div
              onClick={() =>
                navigate(`/dashboard/classes/${classId}/exam/${exam._id}`)
              }
              className="w-full rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer hover:bg-gray-50"
            >
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-semibold text-gray-800">
                  {exam.name}
                </h2>
                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  View Details
                </span>
              </div>

              <div className="text-sm text-gray-600">
                {dateFormatter(exam?.startDate)} &mdash;{" "}
                {dateFormatter(exam?.endDate)}
              </div>
            </div>
          ))}
        </div>
        )}
  
      </div>
    </div>
  );
};

export default ClassExams;
