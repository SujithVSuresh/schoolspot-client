import { useEffect, useState } from "react";
import { AlarmClock } from "lucide-react";

const NextExamCountdown = () => {
     const [timeRemaining, setTimeRemaining] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    const examDate = new Date(exam.date);
    examDate.setHours(
      parseInt(exam.startTime.split(':')[0]),
      parseInt(exam.startTime.split(':')[1])
    );

    const calculateTimeRemaining = () => {
      const now = new Date();
      const difference = examDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        setIsPast(true);
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    };

    calculateTimeRemaining();
    const timer = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(timer);
  }, [exam]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });
  };
  return (
  <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="bg-blue-600 px-6 py-4">
        <div className="flex items-center">
          <AlarmClock className="h-6 w-6 text-blue-100" />
          <h2 className="ml-2 text-lg font-semibold text-white">Next Exam</h2>
        </div>
      </div>
      
      <div className="px-6 py-4">
        <h3 className="text-xl font-semibold text-gray-900">{exam.subject}</h3>
        <p className="text-sm text-gray-500">{formatDate(exam.date)}</p>
        <p className="text-sm text-gray-500 mt-1">
          {exam.startTime} - {exam.endTime}
        </p>

        {!isPast && (
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-700 mb-2">Time remaining:</p>
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="bg-blue-50 rounded-md p-2">
                <span className="block text-xl font-bold text-blue-700">{timeRemaining.days}</span>
                <span className="text-xs text-blue-600">Days</span>
              </div>
              <div className="bg-blue-50 rounded-md p-2">
                <span className="block text-xl font-bold text-blue-700">{timeRemaining.hours}</span>
                <span className="text-xs text-blue-600">Hours</span>
              </div>
              <div className="bg-blue-50 rounded-md p-2">
                <span className="block text-xl font-bold text-blue-700">{timeRemaining.minutes}</span>
                <span className="text-xs text-blue-600">Mins</span>
              </div>
              <div className="bg-blue-50 rounded-md p-2">
                <span className="block text-xl font-bold text-blue-700">{timeRemaining.seconds}</span>
                <span className="text-xs text-blue-600">Secs</span>
              </div>
            </div>
          </div>
        )}

        {isPast && (
          <div className="mt-4 bg-yellow-50 rounded-md p-3">
            <p className="text-sm font-medium text-yellow-800">
              This exam has already started or passed.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default NextExamCountdown
