import { useEffect, useState } from "react";
import { announcementSocket } from "../../../../app/socket/socket";
import AnnouncementCard from "./components/AnnouncementCard";
import { AnnouncementType } from "../../types/types";
import { useOutletContext } from "react-router-dom";
import {
  fetchAnnouncementsByClass,
  fetchPinnedAnnouncements,
} from "../../api/api";
import AnnouncementModal from "./components/AnnouncementModal";
import { fetchAnnouncementById } from "../../api/api";
import { AnnouncementDetailsType } from "../../types/types";
import { announcementPinHandler } from "../../api/api";

const Announcements = () => {
  const { classId }: { classId: string } = useOutletContext();

  const [announcements, setAnnouncements] = useState<AnnouncementType[]>([]);
  const [pinnedAnnouncements, setPinnedAnnouncements] = useState<
    AnnouncementType[]
  >([]);
  const [selectedAnnouncement, setSelectedAnnouncements] =
    useState<AnnouncementDetailsType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchAnnouncementsHandler = async (classId: string) => {
      const response = await fetchAnnouncementsByClass(classId);
      if (response.success) {
        setAnnouncements(response.data);
      }
    };

    const fetchPinnedAnnouncementsHandler = async () => {
      const response = await fetchPinnedAnnouncements();
      if (response.success) {
        setPinnedAnnouncements(response.data);
      }
    };

    fetchAnnouncementsHandler(classId);
    fetchPinnedAnnouncementsHandler();
  }, [classId]);

  useEffect(() => {
    announcementSocket.on("receive-announcement", (message) => {
      setAnnouncements((prev) => [message, ...prev]);
    });

    announcementSocket.on("receive-edit-announcement", (message) => {
      updateAnnouncementHandler(message);
    });

    announcementSocket.on("receive-delete-announcement", (message) => {
      deleteAnnouncementHandler(message);
    });

    return () => {
      announcementSocket.off("receive-announcement");
      announcementSocket.off("receive-edit-announcement");
    };
  }, []);

  const updateAnnouncementHandler = (message: AnnouncementType) => {
    setAnnouncements((prev) => {
      return prev.map((announcement) => {
        if (message._id == announcement._id) {
          return message;
        }
        return announcement;
      });
    });
  };

  const deleteAnnouncementHandler = (message: AnnouncementType) => {
    setAnnouncements((prev) => {
      return prev.filter((announcement) => {
        if (message._id != announcement._id) {
          return message;
        }
      });
    });
  };

  const fetchAnnouncementByIdHandler = async (announcementId: string) => {
    const response = await fetchAnnouncementById(announcementId);
    if (response.success) {
      setSelectedAnnouncements(response.data);
      setIsModalOpen(true);
    }
  };

  const handleAnnouncementPin = async (
    announcementId: string,
    status: "pin" | "unpin"
  ) => {
    const response = await announcementPinHandler(announcementId, status);
    if (response.success) {
      if (response.data.isPinned) {
        setPinnedAnnouncements((prev) => [response.data, ...prev]);
      } else {
        setPinnedAnnouncements((prev) => [
          ...prev.filter(
            (announcement) => announcement._id != response.data._id
          ),
        ]);
      }
      setIsModalOpen(false);
    }
  };

  return (
    <div className="min-h-screen w-full">
      <div className="flex justify-end items-center"></div>
      {pinnedAnnouncements.length > 0 && (
        <div className="grid grid-cols-2 gap-3 mb-3 justify-center w-full pb-5">
          {pinnedAnnouncements.map((announcement) => (
            <AnnouncementCard
              key={announcement._id}
              announcement={announcement}
              onModalOpen={fetchAnnouncementByIdHandler}
              pinned={true}
            />
          ))}
        </div>
      )}

      {/* <div className="flex gap-2 mb-5 justify-end">
        <span className="inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
          All
        </span>

        <span className="inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
          This Week
        </span>

        <span className="inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
          This Month
        </span>
      </div> */}
      <div className="grid grid-cols-2 gap-3 justify-center w-full">
        {announcements.map((announcement) => (
          <AnnouncementCard
            key={announcement._id}
            announcement={announcement}
            onModalOpen={fetchAnnouncementByIdHandler}
            pinned={false}
          />
        ))}
      </div>
      <AnnouncementModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        handleAnnouncementPin={handleAnnouncementPin}
        selectedAnnouncement={selectedAnnouncement as AnnouncementDetailsType}
      />
    </div>
  );
};

export default Announcements;
