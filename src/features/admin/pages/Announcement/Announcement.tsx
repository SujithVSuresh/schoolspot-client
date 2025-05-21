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
import AnnouncementCard from "./components/AnnouncementCard";

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
          <AnnouncementCard announcement={announcement}/>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
