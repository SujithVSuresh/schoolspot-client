import { useState, useRef, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import {
  createMessage,
  fetchConversationsBySubjects,
  fetchMessagesByConversation,
} from "../../api/api";
import { Conversation } from "../../types/types";
import { MessageListType } from "../../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { chatSocket, notificationSocket } from "../../../../app/socket/socket";
import ChatSidebar from "../../../../app/components/Chat/ChatSidebar";
import ChatHeader from "../../../../app/components/Chat/ChatHeader";
import ChatInputArea from "../../../../app/components/Chat/ChatInputArea";
import ChatMessageCard from "../../../../app/components/Chat/ChatMessageCard";
import CreateGroup from "./components/CreateGroup";

const Chat = () => {
  const { subjectId }: { subjectId: string } = useOutletContext();

  const [conversations, setConversations] = useState<Conversation[]>([]);

  const [isCreateGroup, setIsCreateGroup] = useState(false);

  const [activeConversation, setActiveConversation] =
    useState<Conversation | null>(null);

  const [messages, setMessages] = useState<MessageListType[]>([]);

  const [messageMenu, setMessageMenu] = useState("")

  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const teacher = useSelector((state: RootState) => state.teacher);

  useEffect(() => {
    // Fetch conversations by subjects
    const fetchConversationHandler = async (subjectId: string) => {
      const response = await fetchConversationsBySubjects(subjectId);

      if (response.success) {
        setConversations(response.data);
      }
    };

    fetchConversationHandler(subjectId);
  }, [subjectId]);

  useEffect(() => {
    // fetch messages of active conversation
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

  useEffect(() => {
    notificationSocket.connect();

    notificationSocket.on("connect", () => {
      console.log("Connected:", notificationSocket.id);
      activeConversation?.participants.forEach((userId: string) => {
        notificationSocket.emit("join-room", `notification-${userId}`);
      });
    });

    return () => {
      activeConversation?.participants.forEach((userId: string) => {
        notificationSocket.emit("leave-room", `notification-${userId}`);
      });
      notificationSocket.disconnect();
    };
  }, [activeConversation]);

  const handleMessageMenu = (id: string) => {
    if(messageMenu == id){
      setMessageMenu("")
    }else{
      setMessageMenu(id)
    }
  }

  const handleSendMessage = async () => {
    const response = await createMessage({
      conversationId: activeConversation?._id as string,
      messageType: "text",
      content: inputValue,
    });

    if (response.success) {
      console.log(response.data, "message send successfully");
      setMessages((prev) => [...prev, response?.data]);
      setInputValue("");
      chatSocket.emit("send-message", {
        roomId: `conversation-${activeConversation?._id}`,
        message: response.data,
      });

      activeConversation?.participants.forEach((userId: string) => {
        notificationSocket.emit("send-notification", {
          roomId: `notification-${userId}`,
          message: {
            _id: "",
            notificationType: "message",
            message: `You have a new message: ${response.data.content}`,
            createdAt: new Date(),
          },
        });
      });
    }
  };

  return (
       <div className="flex h-screen mt-5 border top-50 sticky w-full bg-white">
      {/* Sidebar */}
      

      {isCreateGroup ? <CreateGroup setIsCreateGroup={setIsCreateGroup} subjectId={subjectId}/> : <ChatSidebar
        conversations={conversations}
        activeConversation={activeConversation}
        setActiveConversation={setActiveConversation}
         setIsCreateGroup={setIsCreateGroup}
      />}
      


      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        {/* Header with sidebar toggle */}
        <ChatHeader activeConversation={activeConversation}/>

        {/* Messages area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages?.length > 0 &&
            messages.map((message) => (
              <ChatMessageCard message={message} user={teacher} messageMenu={messageMenu} handleMessageMenu={handleMessageMenu}/>
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
