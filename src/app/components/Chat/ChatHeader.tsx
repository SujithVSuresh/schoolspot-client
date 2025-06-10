import { Users, Info } from "lucide-react";
import { Conversation } from "../../types/ChatType";

const ChatHeader = ({
  userType,
  activeConversation,
  handleViewGroupDetails
}: {
  userType: "Teacher" | "Student"
  activeConversation: Conversation | null;
  handleViewGroupDetails: () => void
}) => {
  return (
    <div className=" h-16 border-b flex items-center justify-between p-5">
      <div className="flex">
        <div className="bg-secondary p-3 rounded-full">
          <Users className="w-5 h-5 text-primaryText" />
        </div>

        <div className="flex flex-col ml-3">
          <h1 className="font-semibold">{activeConversation?.name}</h1>
          <span className="text-xs text-secondaryText">
            {activeConversation?.participants?.length} Members
          </span>
        </div>
      </div>
      {userType == "Teacher" && (
              <Info className="w-5 h-5 hover: cursor-pointer" onClick={() => handleViewGroupDetails()}/>
      )}
    </div>
  );
};

export default ChatHeader;
