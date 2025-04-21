import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { announcementSocket } from "../../../../app/socket/socket";
import Breadcrumb from "../../components/Breadcrumb";
import { useNavigate } from "react-router-dom";
import AnnouncementCard from "./components/AnnouncementCard";
import { AnnouncementType } from "../../types/types";
import { useOutletContext } from "react-router-dom";
import { fetchAnnouncementsByClass } from "../../api/api";
import { deleteAnnouncement } from "../../api/api";
import toast from "react-hot-toast";

const Announcements = () => {
  const navigate = useNavigate();
  const { classId }: { classId: string } = useOutletContext();

  const [announcements, setAnnouncements] = useState<AnnouncementType[]>([]);

  useEffect(() => {
    fetchAnnouncementsHandler(classId);
  }, [classId]);

  useEffect(() => {
    announcementSocket.connect();

    announcementSocket.on("connect", () => {
      console.log("Connected:", announcementSocket.id);
      announcementSocket.emit("join-room", `room-${classId}`);
    });

    return () => {
      // announcementSocket.emit('leave-room', `room-${classId}`);
      // announcementSocket.disconnect()
    };
  }, []);

  const fetchAnnouncementsHandler = async (classId: string) => {
    const response = await fetchAnnouncementsByClass(classId);
    if (response.success) {
      setAnnouncements(response.data);
    }
  };

  const deleteAnnouncementHandler = async (announcementId: string) => {
    const response = await deleteAnnouncement(announcementId);
    if (response.success) {
            announcementSocket.emit("delete-announcement", {
              roomId: `room-${classId}`,
              message: response.data,
            });
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

  const breadcrumbItems = [
    { label: "Classes", href: `/teacher/classes` },
    { label: "Announcements", href: `/teacher/classes/${classId}/students` },
  ];
  return (
    <div className="min-h-screen p-5">
      <div className="flex items-center justify-between mb-5">
        <Breadcrumb items={breadcrumbItems} />
        <button
          onClick={() =>
            navigate(`/teacher/classes/${classId}/announcements/add`)
          }
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200 shadow-sm"
        >
          <Plus size={16} />
          <span>Add</span>
        </button>
      </div>
      <div className="flex justify-center w-full">
        <div className="space-y-4 w-6/12">
          {announcements.map((announcement) => (
            <AnnouncementCard
              key={announcement._id}
              announcement={announcement}
              classId={classId}
              deleteAnnouncementHandler={deleteAnnouncementHandler}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Announcements;
