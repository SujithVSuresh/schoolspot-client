import { CalendarClock } from "lucide-react";

const examsData = [
  {
    subject: "Mathematics",
    topic: "Calculus and Linear Algebra",
    date: "October 15, 2025",
    time: "10:00 AM - 12:00 PM",
    preparation: 75
  },
  {
    subject: "Physics",
    topic: "Mechanics and Thermodynamics",
    date: "October 20, 2025",
    time: "02:00 PM - 04:00 PM",
    preparation: 45
  },
  {
    subject: "Computer Science",
    topic: "Data Structures and Algorithms",
    date: "October 25, 2025",
    time: "09:00 AM - 11:00 AM",
    preparation: 60
  }
];

const Exams = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden mt-4 border ">
      <div className="px-6 py-5 border-b">
        <h2 className="text-lg font-semibold text-gray-800">Upcoming Exams</h2>
      </div>
      
      <div className="px-6 py-4">
        <div className="space-y-4">
          {examsData.map((exam, index) => {
            // Calculate days until exam
            const examDate = new Date(exam.date);
            const today = new Date();
            const diffTime = Math.abs(examDate.getTime() - today.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            
            return (
              <div 
                key={index} 
                className={`p-4 rounded-lg border`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-900">{exam.subject}</h3>
                    {/* <p className="text-sm text-gray-500 mt-1">{exam.topic}</p> */}
                  </div>
                  
                  {diffDays <= 3 && (
                    <span className="bg-red-100 text-red-600 text-xs font-medium px-2 py-0.5 rounded">
                      Soon
                    </span>
                  )}
                </div>
                
                <div className="mt-3 flex items-center text-sm">
                  <CalendarClock className="h-4 w-4 text-gray-400 mr-1.5" />
                  <span className="text-gray-600">{exam.date}</span>
                  <span className="mx-1.5 text-gray-300">•</span>
                  <span className="text-gray-600">{exam.time}</span>
                </div>
                
       
              </div>
            );
          })}
        </div>
        
        <button className="mt-4 w-full py-2 px-4 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
          View All Exams
        </button>
      </div>
    </div>
  )
}

export default Exams
