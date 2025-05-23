import ExamHeader from "./components/ExamHeader"
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchExamById } from "../../api/api";
// import { useOutletContext } from "react-router-dom";
import { ChevronRight } from "lucide-react";


const ExamDetails = () => {
  const navigate = useNavigate()
      const { examId: id } = useParams();
//   const { classId }: { classId: string } = useOutletContext();

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
      <ExamHeader />
      
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white border rounded-lg overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-200">
              <h2 className="text-xl font-medium text-gray-800">Exam Timetable</h2>
            </div>
            <div className="px-6 py-5">
              {/* <ExamTimeline examTimetable={sortedTimetable} /> */}
              {/* <SubjectList examTimetable={sortedTimetable} /> */}
              {
                exam?.examTimetable.map((timetable) => (
                      <div className="border rounded-lg overflow-hidden mb-4 transition-all duration-300 ease-in-out">
  <div className="p-4 cursor-pointer flex flex-col sm:flex-row justify-between">
    <div className="flex items-start">
      <div className="w-14 h-14 rounded-lg bg-blue-100 text-blue-800 flex flex-col items-center justify-center mr-4 flex-shrink-0">
        <span className="text-xl font-bold">20</span>
        <span className="text-xs">May</span>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900">Mathematics</h3>
        <p className="text-sm text-gray-500 mt-1">Tuesday, May 20, 2025</p>
      </div>
    </div>

    <div className="mt-4 sm:mt-0 flex flex-col items-end justify-between">
      <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
        Upcoming
      </span>

      <div className="mt-2 flex flex-col items-end">
        <div className="flex items-center mb-1">
          <svg className="h-4 w-4 text-gray-400 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
          <span className="text-sm text-gray-700">
            10:00 AM - 11:30 AM
          </span>
        </div>

      </div>

    </div>
  </div>
</div>
                ))
              }
            </div>
          </div>
        </div>
        
        <div>
          <button onClick={() => navigate(`/student/exams/${id}/result`)} className="px-4 py-3 w-full bg-blue-600 justify-between hover:bg-blue-700 rounded text-white text-sm transition-colors duration-200 flex items-center">
            <span>View Marks</span>
            <ChevronRight />
          </button>

          {/* <NextExamCountdown exam={upcomingExam} /> */}
          <div className="mt-6 bg-white border rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Exam Guidelines</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="ml-2 text-gray-600">Arrive 30 minutes before exam start time</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="ml-2 text-gray-600">Bring student ID card and required stationery</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="ml-2 text-gray-600">Mobile phones must be switched off</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="ml-2 text-gray-600">No extra time will be given for late arrivals</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExamDetails
