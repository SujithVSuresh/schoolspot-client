import { useState, useRef, useEffect } from "react";
import {
  createMessage,
  fetchConversations,
  fetchMessagesByConversation,
  deleteMessage,
} from "../../api/api";
import { Conversation } from "../../../../app/types/ChatType";
import { MessageListType } from "../../../../app/types/ChatType";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { chatSocket } from "../../../../app/socket/socket";
import ChatSidebar from "../../../../app/components/Chat/ChatSidebar";
import ChatHeader from "../../../../app/components/Chat/ChatHeader";
import ChatInputArea from "../../../../app/components/Chat/ChatInputArea";
import ChatMessageCard from "../../../../app/components/Chat/ChatMessageCard";
import ConversationDetails from "../../../../app/components/Chat/ConversationDetails";

const Chat = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);

  const [activeConversation, setActiveConversation] =
    useState<Conversation | null>(null);

  const [messages, setMessages] = useState<MessageListType[]>([]);

  const [isCreateGroup, setIsCreateGroup] = useState(false);
  console.log(isCreateGroup)
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [messageMenu, setMessageMenu] = useState("");

  const [viewGroupDetails, setViewGroupDetails] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const student = useSelector((state: RootState) => state.student);

  // fetches all the conversations
  useEffect(() => {
    const fetchConversationHandler = async () => {
      const response = await fetchConversations();

      if (response.success) {
        setConversations(response.data);
      }
    };

    fetchConversationHandler();
  }, []);

  // fetch All messages from selected conversation
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

  // scroll to the bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    chatSocket.on("receive-message", (message) => {
      if(message.conversationId == activeConversation?._id){
      setMessages((prev) => [...prev, message]);
      }

      setConversations((prev) => {
        const conversationToUpdate = prev.find(
          (c) => c._id === message.conversationId
        );

        if (conversationToUpdate) {
          return [
            {
              ...conversationToUpdate,
              lastMessage: message,
            },
            ...prev.filter((item) => item._id !== message.conversationId),
          ];
        }

        return prev;
      });
    });

    return () => {
      chatSocket.off("receive-message");
    };
  }, [activeConversation?._id]);


    useEffect(() => {
    chatSocket.on("receive-create-conversation", (message) => {

      setConversations((prev) => {
        return [
          message,
          ...prev
        ]
      });
    });

    return () => {
      chatSocket.off("receive-create-conversation");
    };
  }, []);

  // handles the message card menu
  const handleMessageMenu = (id: string) => {
    if (messageMenu == id) {
      setMessageMenu("");
    } else {
      setMessageMenu(id);
    }
  };

  // handles the send message
  const handleSendMessage = async () => {
    const formData = new FormData();

    const fileAvailable = selectedFile && !inputValue;
    const fileTextAvailable = selectedFile && inputValue;
    const textAvailable = !selectedFile && inputValue;

    formData.append("conversationId", activeConversation?._id as string);
    formData.append(
      "messageType",
      fileAvailable ? "file" : fileTextAvailable ? "file-text" : "text"
    );

    if (fileTextAvailable) {
      formData.append("content", inputValue);
      formData.append("attachment", selectedFile);
    } else if (fileAvailable) {
      formData.append("attachment", selectedFile);
    } else if (textAvailable) {
      formData.append("content", inputValue);
    }

    const response = await createMessage(formData);

    if (response.success) {
      console.log(response.data, "message send successfully...");
      setInputValue("");
      setSelectedFile(null);
      setMessages((prev) => [...prev, response?.data]);

      if (activeConversation && activeConversation._id) {
        setConversations([
          {
            ...activeConversation,
            lastMessage: response.data,
          },
          ...conversations.filter(
            (item) => item._id !== activeConversation?._id
          ),
        ]);
      }
      chatSocket.emit("send-message", {
        roomId: `conversation-${activeConversation?._id}`,
        message: response.data,
      });
    }
  };

 
  const handleViewGroupDetails = () => {
    setViewGroupDetails((prev) => !prev);
  };


  // delete message handler
  const handleMessageDelete = async (id: string) => {
    const response = await deleteMessage(id);

    if (response.success) {
      const msgs = messages.map((item) => {
        if (item._id == response.data._id) {
          return {
            ...item,
            status: "deleted" as "deleted" | "active",
          };
        }
        return item;
      });
      setMessages(msgs);
    }
  };

  return (
    <div className="flex h-screen mt-5 border rounded-lg top-50 sticky w-full bg-white">
      {/* Sidebar */}
      <ChatSidebar
        userType="Student"
        conversations={conversations}
        activeConversation={activeConversation}
        setActiveConversation={setActiveConversation}
        setIsCreateGroup={setIsCreateGroup}
      />

      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        {/* Header with sidebar toggle */}
        {activeConversation && (
          <ChatHeader
            userType="Student"
            activeConversation={activeConversation}
            handleViewGroupDetails={handleViewGroupDetails}
          />
        )}

        {/* Messages area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages?.length > 0 &&
            messages.map((message, index) => (
              <ChatMessageCard
                key={index}
                message={message}
                user={student}
                messageMenu={messageMenu}
                handleMessageMenu={handleMessageMenu}
                handleMessageDelete={handleMessageDelete}
              />
            ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        {activeConversation && (
          <ChatInputArea
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleSendMessage={handleSendMessage}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
          />
        )}
      </div>

      {viewGroupDetails && (
        <ConversationDetails
          conversation={activeConversation as Conversation}
          handleViewGroupDetails={handleViewGroupDetails}
        />
      )}
    </div>
  );
};

export default Chat;
