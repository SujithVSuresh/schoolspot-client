// import { Award } from "lucide-react"
import { ExamResultType } from "../../types/ExamResultType";

const ExamResultCard = ({ examResults }: { examResults: ExamResultType[] }) => {
  console.log(examResults, "this is exam results data...");

  return (
    <div className="grid grid-cols-3 gap-3">
      {examResults.map((result) => (
        <div className="bg-white rounded-lg border p-6 w-ful">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {result.subject}
              </h3>
              {/* <p className="text-sm text-gray-500">Mid Term Exam</p> */}
            </div>
            {/* <div className="flex items-center justify-center w-10 h-10 rounded-full text-blue-600 bg-gray-100">
                <Award className="w-5 h-5" />
              </div> */}
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700">Marks</span>
                <span className="text-sm font-semibold">
                  {result.marksObtained} / {result.totalMarks}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-blue-500 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${
                      (result?.marksObtained / result?.totalMarks) * 100
                    }%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <span className="text-sm text-gray-500">Percentage</span>
                <p className="font-semibold">
                  {(result?.marksObtained / result?.totalMarks) * 100}%
                </p>
              </div>
              <div className=" text-center">
                <span className="text-sm text-gray-500">Grade</span>
                <p className="font-bold text-lg text-blue-600">
                  {result.grade}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExamResultCard;
