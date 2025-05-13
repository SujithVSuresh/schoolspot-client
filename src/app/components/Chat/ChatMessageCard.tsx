import { ChevronDown } from "lucide-react";
import { dateFormatter } from "../../utils/formatter";
import { MessageListType } from "../../../features/student/types/types";

const ChatMessageCard = ({
  message,
  user,
}: {
  message: MessageListType;
  user: { _id?: string };
}) => {

  console.log(message, "this is the message in chat message card");
  return (
    <div
      key={message._id}
      className={`flex ${
        message?.senderId?._id === user._id ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-xs md:max-w-md lg:max-w-lg rounded-lg px-4 py-2 ${
          message?.senderId?._id === user?._id
            ? "bg-blue-500 text-white rounded-br-none"
            : "bg-gray-200 text-gray-800 rounded-bl-none"
        }`}
      >
        {message.senderId?._id !== user?._id ? (
          <div className="text-sm">
            ~ {message.senderId.email.split("@")[0]}
          </div>
        ) : (
          <div className="w-full flex justify-end">
            <ChevronDown className="w-4 h-4" />
          </div>
        )}
        <div>{message.content}</div>
        <div
          className={`text-xs mt-1 ${
            message?.senderId?._id === user?._id
              ? "text-blue-100"
              : "text-gray-500"
          }`}
        >
          {dateFormatter(String(message.createdAt))}
        </div>
      </div>
    </div>
  );
};

export default ChatMessageCard;
