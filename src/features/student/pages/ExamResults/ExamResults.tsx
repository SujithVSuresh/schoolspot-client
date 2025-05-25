import { fetchExamResult } from "../../api/api";
import { useEffect, useState } from "react";
import { ExamResultType } from "../../../../app/types/ExamResultType";
import { useParams } from "react-router-dom";
import ExamResultOverviewCard from "../../../../app/components/Exam/ExamResultOverviewCard";
import ExamResultCard from "../../../../app/components/Exam/ExamResultCard";

const ExamResults = () => {
  const { examId } = useParams();

  const [examResults, setExamResults] = useState<ExamResultType[]>([]);

  useEffect(() => {
    const fetchExamResultsHandler = async () => {
      if (!examId) return;

      const response = await fetchExamResult(examId);

      if (response.success) {
        console.log(response);
        setExamResults(response.data);
      }
    };

    fetchExamResultsHandler();
  }, [examId]);

  return (
    <div className="w-full min-h-screen">
      <ExamResultOverviewCard />

      <ExamResultCard examResults={examResults} />
    </div>
  );
};

export default ExamResults;
