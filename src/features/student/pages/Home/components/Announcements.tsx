import { fetchAnnouncementsByCount } from "../../../api/api";
import { useEffect, useState } from "react";
import { AnnouncementType } from "../../../types/types";
import { timeFormatter } from "../../../../../app/utils/formatter";
import { useNavigate } from "react-router-dom";

   
   const Announcements = ({classId}: {classId: string}) => {
    const navigate = useNavigate();

    const [announcementsData, setAnnouncementsData] = useState<AnnouncementType[]>([])

    useEffect(() => {
   const fetchAnnouncementsHandler = async () => {
      const response = await fetchAnnouncementsByCount(classId, 3);
          console.log(response, "this is the response for announcements");


      if (response.success) {
        setAnnouncementsData(response.data);
      }
    }


    fetchAnnouncementsHandler();
    }, [classId]);




     return (
     <div className="bg-white rounded-lg overflow-hidden border h-full flex-1">
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
                </div>
                
                <div className="ml-3 flex-1">
                  <div className="flex items-center justify-between">
                    <p className={`text-sm font-medium text-gray-800`}>
                      {announcement.title}
                    </p>
                    <span className="text-xs text-gray-500">{timeFormatter(announcement.createdAt)}</span>
                  </div>
                  
                  <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                    {announcement.content}
                  </p>
                  

                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button onClick={() => navigate('/student/announcements')} className="mt-2 w-full py-2 px-4 bg-white border rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
          View All Announcements
        </button>
      </div>
    </div>
     )
   }
   
   export default Announcements
   