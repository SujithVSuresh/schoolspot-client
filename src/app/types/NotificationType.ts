
export type NotificationTypesType =
  | "message"
  | "study_material"
  | "assignment"
  | "invoice"
  | "exam"
  | "exam_result"
  | "attendance";


export interface UserNotificationResponseType {
  _id: string;
  notificationId: {
  _id: string;
  notificationType: NotificationTypesType;
  title: string;
  message: string;
  metadata?: string | null;
  createdAt: Date;
};
  isRead: boolean;
  isCleared: boolean;
  readAt?: Date | null;
  clearedAt?: Date | null;
}
