import { Star, Bell } from "lucide-react";

 const announcementsData = [
  {
    title: "Campus-wide Internet Maintenance",
    content: "The campus WiFi will be unavailable on Saturday from 10 PM to 2 AM due to system upgrades. Please plan accordingly.",
    time: "1h ago",
    read: false,
    important: true,
    department: "IT Services"
  },
  {
    title: "Mid-term Exam Schedule Released",
    content: "The mid-term examination schedule has been published. Please check your student portal for details about dates, times, and venues.",
    time: "3h ago",
    read: false,
    important: false,
    department: "Examination Office"
  },
  {
    title: "Career Fair Next Week",
    content: "Don't miss the opportunity to meet with representatives from leading companies in the industry. Bring your resume and dress professionally.",
    time: "Yesterday",
    read: true,
    important: false,
    department: "Career Center"
  }
];
   
   const Announcements = () => {
     return (
     <div className="bg-white rounded-lg overflow-hidden border h-full">
      <div className="px-6 py-5 border-b">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Announcements</h2>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
            3 New
          </span>
        </div>
      </div>
      
      <div className="px-6 py-2">
        <div className="divide-y divide-gray-100">
          {announcementsData.map((announcement, index) => (
            <div 
              key={index} 
              className="py-3 transition-all hover:bg-gray-50 rounded-md px-2 -mx-2 cursor-pointer"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-1">
                  {announcement.important ? (
                    <Star className="h-5 w-5 text-amber-400" fill="#FCD34D" />
                  ) : (
                    <Bell className={`h-5 w-5 ${announcement.read ? 'text-gray-400' : 'text-indigo-500'}`} />
                  )}
                </div>
                
                <div className="ml-3 flex-1">
                  <div className="flex items-center justify-between">
                    <p className={`text-sm font-medium ${announcement.read ? 'text-gray-600' : 'text-gray-900'}`}>
                      {announcement.title}
                    </p>
                    <span className="text-xs text-gray-500">{announcement.time}</span>
                  </div>
                  
                  <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                    {announcement.content}
                  </p>
                  
                  {announcement.department && (
                    <p className="mt-1">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                        {announcement.department}
                      </span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="mt-2 w-full py-2 px-4 bg-white border rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
          View All Announcements
        </button>
      </div>
    </div>
     )
   }
   
   export default Announcements
   