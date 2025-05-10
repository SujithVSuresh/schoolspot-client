import { useState, useEffect } from "react";
import { fetchNotifications } from "../../api/api";
import { NotificationType } from "../../../student/types/types";
import { dateFormatter } from "../../../../app/utils/formatter";
import { notificationSocket } from "../../../../app/socket/socket";

const Notification = () => {

  const [notifications, setNotifications] = useState<NotificationType[]>([]);

  useEffect(() => {
    const notificationHandler = async () => {
      const response = await fetchNotifications();
      console.log("response34566", response)

      if (response.success) {
        setNotifications(response.data);
      }
    };

    notificationHandler();
  }, []);

  useEffect(() => {
    notificationSocket.on("receive-notification", (message) => {
      setNotifications((prev) => [message, ...prev]);
    });

    return () => {
      notificationSocket.off("receive-notification");
    };
  }, []);


  return (
    <div className="w-full min-h-screen ">
      <div className="flex flex-col w-full gap-3 items-center justify-center">
        {notifications?.length > 0 &&
          notifications.map((notification) => (
            <div className="flex-grow w-6/12 border rounded p-3">
              <div className="flex justify-between items-start mb-1">
                <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
                  {/* <BadgeInfo className="w-4 h-4 text-green-800"/> */}
                  {notification?.notificationType}
                </span>

                <span className="text-xs text-gray-500">
                  {dateFormatter(String(notification.createdAt))}
                </span>
              </div>

              <p className="text-gray-600 mb-1 mt-2 ml-2">
                {notification.message}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Notification;
