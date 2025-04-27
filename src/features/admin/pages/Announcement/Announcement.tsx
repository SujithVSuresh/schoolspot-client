import { MoreVertical, Clock, Calendar, Edit2, Trash2 } from "lucide-react";
import Heading from "../../components/Heading";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchAnnouncements } from "../../api/api";
import { AnnouncementResponseType } from "../../types/types";
import { dateFormatter, timeFormatter } from "../../../../app/utils/formatter";
import { deleteAnnouncement } from "../../api/api";
import toast from "react-hot-toast";

const Announcement = () => {
  const navigate = useNavigate();

  const [announcements, setAnnouncements] = useState<
    AnnouncementResponseType[]
  >([]);

  const [showMenu, setShowMenu] = useState("");

  useEffect(() => {
    const getAllAnnouncements = async () => {
      const response = await fetchAnnouncements();
      if (response.success) {
        setAnnouncements(response.data);
      }
    };

    getAllAnnouncements();
  }, []);

    const deleteAnnouncementHandler = async (announcementId: string) => {
      const response = await deleteAnnouncement(announcementId);
      if (response.success) {
              // announcementSocket.emit("delete-announcement", {
              //   roomId: `room-${classId}`,
              //   message: response.data,
              // });
        const filteredAnnouncements = await announcements.filter(
          (announcement) => {
            if (announcement._id !== announcementId) {
              return announcement;
            }
          }
        );
        toast("Announcement deleted successfully", {
          duration: 2000,
          position: "bottom-right",
          style: {
            backgroundColor: "#E7FEE2",
            border: "2px, solid, #16A34A",
            minWidth: "400px",
            color: "black",
          },
        });
  
        setAnnouncements(filteredAnnouncements);
      }
    };
  return (
    <div>
      <Heading headingValue="Announcements">
        <button
          onClick={() => navigate("/dashboard/announcement/new")}
          className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors w-full sm:w-auto"
        >
          <Plus className="h-5 w-5" />
          Add
        </button>
      </Heading>
      <div className="w-full grid grid-cols-3 gap-3">
        {announcements.map((announcement) => (
            <div className="rounded-lg border border-gray-200 p-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium text-gray-700">{announcement.title}</h3>
                  {/* {announcement.isPinned && (
                    <Pin className="h-4 w-4 text-indigo-600" />
                  )} */}
                </div>
                <p className="mt-2 text-gray-600">{announcement.content}</p>
                
                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-green-600" />
                    {dateFormatter(String(announcement.createdAt))}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-blue-600" />
                    {timeFormatter(String(announcement.createdAt))}
                  </div>
                  {/* <div className="flex items-center">
                    <Bell className="h-4 w-4 mr-1" />
                    {announcement.category}
                  </div>
                  <div>
                    By {announcement.author}
                  </div> */}
                </div>
              </div>
              
              <div className="relative">
                <button 
                  onClick={() => setShowMenu(announcement._id)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <MoreVertical className="h-5 w-5 text-gray-500" />
                </button>
                
                {showMenu == announcement._id && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <button onClick={() => navigate(`/dashboard/announcement/${announcement._id}/update`)} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full">
                        <Edit2 className="h-4 w-4 mr-2" />
                        Edit
                      </button>
                      <button onClick={() => deleteAnnouncementHandler(announcement._id)}  className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
