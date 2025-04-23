import { X, Calendar, Clock } from "lucide-react";
import {
  dateFormatter,
  timeFormatter,
} from "../../../../../app/utils/formatter";
import { AnnouncementDetailsType } from "../../../types/types";

interface AnnouncementModalPropsType {
  isOpen: boolean;
  onClose: () => void;
  handleAnnouncementPin: (
    announcementId: string,
    status: "pin" | "unpin"
  ) => void;
  selectedAnnouncement: AnnouncementDetailsType;
}

const AnnouncementModal = ({
  isOpen,
  onClose,
  handleAnnouncementPin,
  selectedAnnouncement,
}: AnnouncementModalPropsType) => {
  if (!isOpen) {
    return;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl relative">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="rounded-lg border border-gray-200 p-6">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium text-gray-700">
                    {selectedAnnouncement?.title}
                  </h3>
                </div>
                <p className="mt-2 text-gray-600">
                  {selectedAnnouncement?.content}
                </p>

                <div className="flex justify-between mt-5 items-center">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {dateFormatter(selectedAnnouncement.createdAt)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {timeFormatter(selectedAnnouncement.createdAt)}
                    </div>
                    {/* <div>By asdfdsf</div> */}
                  </div>

                  {selectedAnnouncement.isPinned ? (
                    <button
                      onClick={() =>
                        handleAnnouncementPin(selectedAnnouncement._id, "unpin")
                      }
                      className="bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600"
                    >
                      Unpin
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        handleAnnouncementPin(selectedAnnouncement._id, "pin")
                      }
                      className="bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600"
                    >
                      Pin
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementModal;
