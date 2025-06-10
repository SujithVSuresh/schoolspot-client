import { useState, useRef, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import {
  createMessage,
  fetchConversationsBySubjects,
  fetchMessagesByConversation,
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
import CreateGroup from "./components/CreateGroup";
import { deleteMessage } from "../../api/api";
import ConversationDetails from "../../../../app/components/Chat/ConversationDetails";


const Chat = () => {
  const { subjectId }: { subjectId: string } = useOutletContext();

  const [conversations, setConversations] = useState<Conversation[]>([]);

  const [isCreateGroup, setIsCreateGroup] = useState(false);

  const [activeConversation, setActiveConversation] =
    useState<Conversation | null>(null);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [messages, setMessages] = useState<MessageListType[]>([]);

  const [messageMenu, setMessageMenu] = useState("");

  const [inputValue, setInputValue] = useState("");

  const [viewGroupDetails, setViewGroupDetails] = useState(false);

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
    // Scroll to the bottom
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    chatSocket.on("receive-message", (message) => {
      console.log(message, "student side message");
      if (message.conversationId == activeConversation?._id) {
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

  const handleMessageMenu = (id: string) => {
    if (messageMenu == id) {
      setMessageMenu("");
    } else {
      setMessageMenu(id);
    }
  };

  const handleMessageDelete = async (id: string) => {
    const response = await deleteMessage(id);
    console.log(response.data);

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

  return (
    <div className="flex h-screen mt-5 border top-50 sticky w-full bg-white">
      {/* Sidebar */}

      {isCreateGroup ? (
        <CreateGroup
          setIsCreateGroup={setIsCreateGroup}
          subjectId={subjectId}
          setConversations={setConversations}
        />
      ) : (
        <ChatSidebar
          userType="Teacher"
          conversations={conversations}
          activeConversation={activeConversation}
          setActiveConversation={setActiveConversation}
          setIsCreateGroup={setIsCreateGroup}
        />
      )}

      {/* Main chat area */}
      <div className="flex-1 flex flex-row">
        <div className="flex-1 flex flex-col">
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
              messages.map((message) => (
                <ChatMessageCard
                  message={message}
                  user={teacher}
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
    </div>
  );
};

export default Chat;
