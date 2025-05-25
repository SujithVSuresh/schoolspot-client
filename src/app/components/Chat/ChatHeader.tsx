import { Users, Info } from "lucide-react";
import { Conversation } from "../../types/chatType";

const ChatHeader = ({
  activeConversation,
  handleViewGroupDetails
}: {
  activeConversation: Conversation | null;
  handleViewGroupDetails: () => void
}) => {
  return (
    <div className=" h-16 border-b flex items-center justify-between p-5">
      <div className="flex">
        <div className="bg-gray-50 p-3 rounded-full">
          <Users className="w-5 h-5" />
        </div>

        <div className="flex flex-col ml-3">
          <h1 className="font-semibold">{activeConversation?.name}</h1>
          <span className="text-xs text-gray-500">
            {activeConversation?.participants?.length} Members
          </span>
        </div>
      </div>

      <Info className="w-5 h-5 hover: cursor-pointer" onClick={() => handleViewGroupDetails()}/>
    </div>
  );
};

export default ChatHeader;
