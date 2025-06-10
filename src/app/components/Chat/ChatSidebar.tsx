import { MessageCircle, CirclePlus } from "lucide-react"
import { dateFormatter } from "../../utils/formatter"
import { Conversation } from "../../types/ChatType"


const ChatSidebar = ({userType, conversations, activeConversation, setActiveConversation, setIsCreateGroup}: {
  userType: "Teacher" | "Student"
    conversations: Conversation[],
    activeConversation: Conversation | null,
    setActiveConversation: (conv: Conversation) => void,
    setIsCreateGroup: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
         <div
        className="w-96 border-r bg-white rounded-l-lg transition-all duration-300 overflow-hidden"
      >
        <div className="h-16 border-b flex items-center px-5">
          <div className="flex items-center w-full justify-between">
            <div className="flex items-center">
            <MessageCircle className="text-gray-800 h-5 w-5" />
            <h2 className="text-xl text-gray-800 font-bold ml-1">Chat</h2>
            </div>
            {userType == "Teacher" && (
            <CirclePlus className="w-4 h-4 hover: cursor-pointer" onClick={() => setIsCreateGroup(true)}/>

            )}
          </div>
        </div>
        <div className="overflow-y-auto h-[calc(100%-120px)]">
          {conversations.map((conv) => (
            <div
              key={conv._id}
              onClick={() => setActiveConversation(conv)}
              className={`p-4 border-gray-200 cursor-pointer border-b ${
                activeConversation?._id === conv._id ? "bg-secondary" : ""
              }`}
            >
              <h3 className="font-medium truncate text-primaryText">
                {conv.name}
              </h3>
              <p className="text-sm text-secondaryText truncate">
                {conv.lastMessage?.content}
              </p>
              <p className="text-xs mt-2 text-secondaryText">
                {dateFormatter(String(conv.createdAt))}
              </p>
            </div>
          ))}
        </div>
      </div>
  )
}

export default ChatSidebar
