import { ChevronDown } from "lucide-react";
import { dateFormatter } from "../../utils/formatter";
import ChatMessageMenu from "./ChatMessageMenu";
import { MessageListType } from "../../types/chatType";

const ChatMessageCard = ({
  message,
  user,
  messageMenu, 
  handleMessageMenu,
  handleMessageDelete
}: {
  message: MessageListType;
  user: { _id?: string };
  messageMenu: string;
  handleMessageMenu: (id: string) => void
  handleMessageDelete: (id: string) => void
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
          message.status == "active" && (
          <div className="w-full flex justify-end relative">

             {
              messageMenu == message._id && (
                <ChatMessageMenu handleMessageDelete={handleMessageDelete} id={message._id}/>
              )
             }
              

            
            <ChevronDown onClick={() => handleMessageMenu(message._id)} className="w-4 h-4 hover: cursor-pointer" />
          </div>
          )

        )}
        {message.status == "deleted" ? (
<span className="text-xs">Message deleted</span>
        ) : (
     <span>{message.content}</span>
        )}
        
   
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
