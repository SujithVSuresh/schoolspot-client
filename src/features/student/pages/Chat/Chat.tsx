import { useState, useRef, useEffect } from "react";
import {
  createMessage,
  fetchConversations,
  fetchMessagesByConversation,
} from "../../api/api";
import { Conversation } from "../../types/types";
import { MessageListType } from "../../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { chatSocket } from "../../../../app/socket/socket";
import ChatSidebar from "../../../../app/components/Chat/ChatSidebar";
import ChatHeader from "../../../../app/components/Chat/ChatHeader";
import ChatInputArea from "../../../../app/components/Chat/ChatInputArea";
import ChatMessageCard from "../../../../app/components/Chat/ChatMessageCard";

const Chat = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);

  const [activeConversation, setActiveConversation] =
    useState<Conversation | null>(null);

  const [messages, setMessages] = useState<MessageListType[]>([]);

  const [inputValue, setInputValue] = useState("");
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
        message: response.data,
      });

      // activeConversation?.participants.forEach((userId: string) => {
      //   chatSocket.emit("send-notification", {
      //     roomId: `notification-${userId}`,
      //     message: {
      //       _id: "",
      //       notificationType: "message",
      //       message: `You have a new message: ${response.data.content}`,
      //       createdAt: new Date(),
      //     },
      //   });
      // });
    }
  };

  return (
    <div className="flex h-screen mt-5 border top-50 sticky w-full bg-white">
      {/* Sidebar */}
      <ChatSidebar
        conversations={conversations}
        activeConversation={activeConversation}
        setActiveConversation={setActiveConversation}
      />

      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        {/* Header with sidebar toggle */}
        <ChatHeader activeConversation={activeConversation} />

        {/* Messages area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages?.length > 0 &&
            messages.map((message) => (
              <ChatMessageCard message={message} user={student} />
            ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <ChatInputArea
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
