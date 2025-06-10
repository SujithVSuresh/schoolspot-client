import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStudentNotification } from "../../features/student/redux/studentNotificationSlice";
import { RootState } from "../store";
import { fetchNotifications } from "../../features/student/api/api";
import { notificationSocket } from "../socket/socket";

type UserType = "student" | "teacher";

export const useNotifications = (userType: UserType) => {
  const dispatch = useDispatch();
  const notifications = useSelector((state: RootState) =>
    userType === "student"
      ? state.studentNotification
      : state.studentNotification
  );

  useEffect(() => {
    const notificationHandler = async () => {
      const response = await fetchNotifications();
      if (response.success) {
        if (userType === "student") {
          dispatch(setStudentNotification(response.data));
        } else if (userType === "teacher") {
          console.log(response.data);
        }
      }
    };

    notificationHandler();
  }, [dispatch, userType]);

  useEffect(() => {
    notificationSocket.on("receive-notification", (message) => {
      if (userType === "student") {
        dispatch(setStudentNotification([message, ...notifications]));
      } else if (userType === "teacher") {
        console.log(message);
      }
    });

    return () => {
      notificationSocket.off("receive-notification");
    };
  }, []);

  return notifications;
};
