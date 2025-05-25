import { monthFormatter, dayFormatter, dateFormatter } from "../../utils/formatter";


const ExamTimetable = ({timetable}: {timetable: {
      subject: string;
      date: string;
      startTime: string;
      endTime: string;
    }[]}) => {
  return (
            <div className="lg:col-span-2">
          <div className="bg-white border rounded-lg overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-200">
              <h2 className="text-xl font-medium text-gray-800">
                Exam Timetable
              </h2>
            </div>
            <div className="px-6 py-5">

              {timetable?.map((timetable) => (
                <div className="border rounded-lg overflow-hidden mb-4 transition-all duration-300 ease-in-out">
                  <div className="p-4 cursor-pointer flex flex-col sm:flex-row justify-between">
                    <div className="flex items-start">
                      <div className="w-14 h-14 rounded-lg bg-blue-100 text-blue-800 flex flex-col items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-xl font-bold">
                          {new Date(timetable.date).getDate()}
                        </span>
                        <span className="text-xs">
                          {monthFormatter(timetable.date)}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          {timetable.subject}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {dayFormatter(timetable.date)},{" "}
                          {dateFormatter(timetable.date)}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 sm:mt-0 flex flex-col items-end justify-between">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Upcoming
                      </span>

                      <div className="mt-2 flex flex-col items-end">
                        <div className="flex items-center mb-1">
                          <svg
                            className="h-4 w-4 text-gray-400 mr-1"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 8v4l3 3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="2"
                              fill="none"
                            />
                          </svg>
                          <span className="text-sm text-gray-700">
                            {timetable.startTime} - {timetable.endTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  )
}

export default ExamTimetable
