import { useState, useEffect } from "react";
import { fetchNotifications } from "../../api/api";
import { NotificationType } from "../../../student/types/types";
import { dateFormatter } from "../../../../app/utils/formatter";
import { notificationSocket } from "../../../../app/socket/socket";
import { X } from "lucide-react";
import { clearAllNotifications, clearNotification } from "../../api/api";

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
      console.log(message, "notiiii")
      setNotifications((prev) => [message, ...prev]);
    });

    return () => {
      notificationSocket.off("receive-notification");
    };
  }, []);

    const clearNotificationHandler = async (notificationId: string) => {
      const response = await clearNotification(notificationId)
      if(response.success){
        const filteredNotification = notifications.filter((item) => item._id !== response.data._id)
        setNotifications(filteredNotification)
      }
  
      console.log(response)
    }
  
      const clearAllNotificationHandler = async () => {
      const response = await clearAllNotifications()
      if(response.success){
        setNotifications([])
      }
  
      console.log(response)
    }


  return (
    <div className="w-full min-h-screen ">
      <div className="flex flex-col w-full gap-3 items-center justify-center">
        <div className="flex w-6/12 justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Notifications</h2>
          <button onClick={() => clearAllNotificationHandler()} className="flex items-center gap-1 bg-gray-100 p-2 rounded-full text-xs text-gray-700 font-medium transition duration-150">
            <X className="w-4 h-4" />
            Clear All
          </button>
        </div>

        {notifications?.length > 0 &&
          notifications.map((notification) => (
            <div className="flex-grow w-6/12 border relative rounded p-3 group">
              <div className="flex justify-between items-start mb-1">
                <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
                  {notification?.notificationType}
                </span>

                <span className="text-xs text-gray-500">
                  {dateFormatter(String(notification.createdAt))}
                </span>
              </div>

              <p className="text-gray-600 mb-1 mt-2 ml-2">
                {notification.message}
              </p>
              <div
                onClick={() => clearNotificationHandler(notification._id as string)} 
                className="absolute top-0 right-0 w-1/12 h-full text-gray-800 hidden group-hover:flex items-center justify-center transition"
              >
                <div className="p-2 rounded-full cursor-pointer bg-gray-100">
                  <X className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Notification;
