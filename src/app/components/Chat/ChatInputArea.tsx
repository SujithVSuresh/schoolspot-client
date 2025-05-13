import React from 'react'

const ChatInputArea = ({inputValue, setInputValue, handleSendMessage}: {
    inputValue: string,
    setInputValue: React.Dispatch<React.SetStateAction<string>>,
    handleSendMessage: () => void
}) => {
  return (
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
  )
}

export default ChatInputArea
