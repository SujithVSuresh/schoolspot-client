import { useState, useRef, useEffect } from "react";
import { MessageCircle, Users, Info, ChevronDown, EllipsisVertical } from "lucide-react";
import {
  createMessage,
  fetchConversations,
  fetchMessagesByConversation,
} from "../../api/api";
import { dateFormatter } from "../../../../app/utils/formatter";
import { Conversation } from "../../types/types";
import { MessageListType } from "../../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { chatSocket } from "../../../../app/socket/socket";

const Chat = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);

  const [activeConversation, setActiveConversation] = useState<Conversation | null>(null);

  const [messages, setMessages] = useState<MessageListType[]>([]);

  const [inputValue, setInputValue] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const student = useSelector((state: RootState) => state.student);

  useEffect(() => {
    const fetchConversationHandler = async () => {
      const response = await fetchConversations();

      if (response.success) {
        setConversations(response.data);
      }
    };

    fetchConversationHandler();
  }, []);

  useEffect(() => {
    if (!activeConversation) return;

    const fetchMessages = async (activeConversation: string) => {
      try {
        const response = await fetchMessagesByConversation(activeConversation);
        setMessages(response.data);
      } catch (err) {
        console.error("Failed to fetch messages:", err);
      }
    };

    fetchMessages(activeConversation._id);
  }, [activeConversation]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    chatSocket.on("receive-message", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      chatSocket.off("receive-message");
    };
  }, []);



  const handleSendMessage = async () => {
    const response = await createMessage({
      conversationId: String(activeConversation?._id),
      messageType: "text",
      content: inputValue,
    });

    if (response.success) {
      console.log(response.data, "message send successfully");
      setInputValue("");
      setMessages((prev) => [...prev, response?.data]);
      chatSocket.emit("send-message", {
        roomId: `conversation-${activeConversation?._id}`,
        message: response.data
      });

      activeConversation?.participants.forEach((userId: string) => {
        chatSocket.emit("send-notification", {
          roomId: `notification-${userId}`,
          message: {
            _id: "",
            notificationType: "message",
            message: `You have a new message: ${response.data.content}`,
            createdAt: new Date()

          }
        });

      })

    }
  };

  return (
    <div className="flex h-screen mt-5 border top-50 sticky w-full bg-white">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-96" : "w-0"
        } bg-white border-r transition-all duration-300 overflow-hidden`}
      >
        <div className="h-16 border-b flex items-center px-5">
          <div className="flex items-center w-full justify-between">
            <div className="flex items-center">
            <MessageCircle className="text-gray-800 h-5 w-5" />
            <h2 className="text-xl text-gray-800 font-bold ml-1">Chat</h2>
            </div>

            <EllipsisVertical className="w-4 h-4"/>
          </div>
        </div>
        <div className="overflow-y-auto h-[calc(100%-120px)]">
          {conversations.map((conv) => (
            <div
              key={conv._id}
              onClick={() => setActiveConversation(conv)}
              className={`p-4 border-gray-200 cursor-pointer border-b ${
                activeConversation?._id === conv._id ? "bg-gray-200" : ""
              }`}
            >
              <h3 className="font-medium truncate text-gray-800">
                {conv.name}
              </h3>
              <p className="text-sm text-gray-500 truncate">
                {conv.lastMessage?.content}
              </p>
              <p className="text-xs mt-2 text-gray-500">
                {dateFormatter(String(conv.createdAt))}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        {/* Header with sidebar toggle */}
        <div className=" h-16 border-b flex items-center justify-between p-5">
          <div className="flex">
         <div className="bg-gray-50 p-3 rounded-full">
         <Users className="w-5 h-5"/>
         </div>
          
          <div className="flex flex-col ml-3">
          <h1 className="font-semibold">{activeConversation?.name}</h1>
          <span className="text-xs text-gray-500">{activeConversation?.participants.length} Members</span>
          </div>
          </div>

          <Info className="w-5 h-5"/>
         
        </div>

        {/* Messages area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages?.length > 0 &&
            messages.map((message) => (
              <div
                key={message._id}
                className={`flex ${
                  message?.senderId?._id === student._id
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs md:max-w-md lg:max-w-lg rounded-lg px-4 py-2 ${
                    message?.senderId?._id === student?._id
                      ? "bg-blue-500 text-white rounded-br-none"
                      : "bg-gray-200 text-gray-800 rounded-bl-none"
                  }`}
                >
                             {message.senderId?._id !== student?._id ? (
                    <div className="text-sm">
                      ~ {message.senderId.email.split("@")[0]}
                    </div>
                  ) : (
                  <div className="w-full flex justify-end">
                    <ChevronDown className="w-4 h-4"/>
                  </div>
                  )}
                  <div>{message.content}</div>
                  <div
                    className={`text-xs mt-1 ${
                      message?.senderId?._id === student?._id
                        ? "text-blue-100"
                        : "text-gray-500"
                    }`}
                  >
                    {dateFormatter(String(message.createdAt))}
                  </div>
                </div>
              </div>
            ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="border-t border-gray-300 p-4 bg-white">
          <div className="flex space-x-2">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              // onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none resize-none"
              rows={1}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg disabled:bg-blue-300 transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
