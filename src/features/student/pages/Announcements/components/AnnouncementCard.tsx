import { Calendar, Clock, Pin } from "lucide-react";
import { AnnouncementType } from "../../../types/types";
import {
  timeFormatter,
  dateFormatter,
} from "../../../../../app/utils/formatter";

const AnnouncementCard = ({
  announcement,
  onModalOpen,
  pinned,
}: {
  announcement: AnnouncementType;
  onModalOpen: (assignmentId: string) => void;
  pinned: boolean;
}) => {
  return (
    <div className="rounded-lg border border-gray-200 p-6">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <h3 className="text-lg font-medium text-gray-700">
              {announcement.title}
            </h3>
          </div>
          <p className="mt-2 text-gray-600">
            {announcement.content.slice(0, 100)} ..{" "}
            <span
              className="text-blue-700 text-sm hover:cursor-pointer"
              onClick={() => onModalOpen(announcement._id)}
            >
              read more
            </span>
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {dateFormatter(announcement.createdAt)}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {timeFormatter(announcement.createdAt)}
            </div>

            {/* <div>By asdfdsf</div> */}
          </div>
        </div>

        {pinned && (
          <div className="relative">
            <Pin className="text-red-600" size={18} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AnnouncementCard;
