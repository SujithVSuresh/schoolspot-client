import { Trash2 } from "lucide-react"

const ChatMessageMenu = ({handleMessageDelete, id}: {handleMessageDelete: (id: string) => void; id: string}) => {
  return (
                <div className="absolute right-3 top-1 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                <button
                  onClick={() => handleMessageDelete(id)}
                  className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </button>
              </div>
            </div>
  )
}

export default ChatMessageMenu
