import { ChevronDown } from "lucide-react";
import { dateFormatter } from "../../utils/formatter";
import ChatMessageMenu from "./ChatMessageMenu";
import { MessageListType } from "../../types/ChatType";

const ChatMessageCard = ({
  message,
  user,
  messageMenu,
  handleMessageMenu,
  handleMessageDelete,
}: {
  message: MessageListType;
  user: { _id?: string };
  messageMenu: string;
  handleMessageMenu: (id: string) => void;
  handleMessageDelete: (id: string) => void;
}) => {
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
            ? "bg-primary text-white rounded-br-none"
            : "bg-secondary text-primaryText rounded-bl-none"
        }`}
      >
        {message.senderId?._id !== user?._id ? (
          <div className="text-sm">
            ~ {message.senderId.email.split("@")[0]}
          </div>
        ) : (
          message.status == "active" && (
            <div className="w-full flex justify-end relative">
              {messageMenu == message._id && (
                <ChatMessageMenu
                  handleMessageDelete={handleMessageDelete}
                  id={message._id}
                />
              )}

              <ChevronDown
                onClick={() => handleMessageMenu(message._id)}
                className="w-4 h-4 hover: cursor-pointer"
              />
            </div>
          )
        )}

        {message.status === "deleted" ? (
          <span className="text-xs italic">Message deleted</span>
        ) : (
          <div className="flex flex-col gap-1">
            {(message.messageType === "text" ||
              message.messageType === "file-text") && (
              <span >{message.content}</span>
            )}

            {(message.messageType === "file" ||
              message.messageType === "file-text") &&
              message.fileUrl && (
                <a
                  href={message.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="text-sm text-blue-200 underline"
                >
                  View Attachment
                </a>
              )}
          </div>
        )}

        <div
          className={`text-xs mt-1 ${
            message?.senderId?._id === user?._id
              ? "text-gray-400"
              : "text-secondaryText"
          }`}
        >
          {dateFormatter(String(message.createdAt))}
        </div>
      </div>
    </div>
  );
};

export default ChatMessageCard;
