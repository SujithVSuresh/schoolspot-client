import { clearAllNotifications } from "../../api/api";
import { dateFormatter, textFormatter } from "../../../../app/utils/formatter";
import { X } from "lucide-react";
import { clearNotification } from "../../api/api";
import { setStudentNotification } from "../../redux/studentNotificationSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";

const Notifications = () => {
  const dispatch = useDispatch()
      const studentNotifications = useSelector((state: RootState) => state.studentNotification
  );
  
    console.log(studentNotifications, "student notification..........")
  // const [notifications, setNotifications] = useState<NotificationType[]>([]);

  // useEffect(() => {
  //   const notificationHandler = async () => {
  //     const response = await fetchNotifications();

  //     if (response.success) {
  //       setNotifications(response.data);
  //     }
  //   };

  //   notificationHandler();
  // }, []);

  // useEffect(() => {
  //   notificationSocket.on("receive-notification", (message) => {
  //     setNotifications((prev) => [message, ...prev]);
  //   });

  //   return () => {
  //     notificationSocket.off("receive-notification");
  //   };
  // }, []);

  const clearNotificationHandler = async (notificationId: string) => {
    const response = await clearNotification(notificationId);
    if (response.success) {
      const filteredNotification = studentNotifications.filter(
        (item) => item._id !== response.data._id
      );
      dispatch(setStudentNotification(filteredNotification));
    }
  };

  const clearAllNotificationHandler = async () => {
    const response = await clearAllNotifications();
    if (response.success) {
      dispatch(setStudentNotification([]));
    }

    console.log(response);
  };

  return (
    <div className="w-full min-h-screen ">
      <div className="flex flex-col w-full gap-3 items-center justify-center">
        <div className="flex w-6/12 justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Notifications</h2>
          <button
            onClick={() => clearAllNotificationHandler()}
            className="flex items-center gap-1 bg-gray-100 p-2 rounded-full text-xs text-primaryText font-medium transition duration-150"
          >
            <X className="w-4 h-4" />
            Clear All
          </button>
        </div>

        {studentNotifications?.length > 0 &&
          studentNotifications.map((notification) => (
     <div className="flex-grow w-full md:w-6/12 bg-white border rounded-2xl p-4 relative group">
  {/* Header */}
  <div className="flex justify-between items-center mb-3">
    <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
      {textFormatter(notification?.notificationId?.notificationType)}
    </span>
    <span className="text-xs text-gray-500">
      {dateFormatter(String(notification?.notificationId?.createdAt))}
    </span>
  </div>

  {/* Message */}
  <p className="text-sm text-gray-700 leading-relaxed ml-1">
    {notification?.notificationId?.message}
  </p>

  {/* Clear button */}
  <div
    onClick={() => clearNotificationHandler(notification?._id)}
    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
  >
    <div className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer shadow">
      <X className="w-4 h-4 text-gray-600" />
    </div>
  </div>
</div>

          ))}
      </div>
    </div>
  );
};

export default Notifications;
