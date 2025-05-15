import React from "react";
import { Smile, SendHorizonal } from "lucide-react";
import { useState } from "react";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";



const ChatInputArea = ({
  inputValue,
  setInputValue,
  handleSendMessage,
}: {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  handleSendMessage: () => void;
}) => {
  const [openEmoji, setOpenEmoji] = useState(false);

const onEmojiClick = (emojiObject: EmojiClickData) => {
  setInputValue((prev) => `${prev}${emojiObject.emoji}`);
  setOpenEmoji(false);
};

  return (
    <div className="p-4 bg-white">
      <EmojiPicker open={openEmoji} onEmojiClick={onEmojiClick} />

      <div className="flex items-center border border-gray-300 rounded-lg pl-4 pr-1 py-1 focus:outline-none resize-none">
        <Smile
          onClick={() => setOpenEmoji((prev) => !prev)}
          className="text-gray-500"
        />
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  }}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 focus:outline-none resize-none"
          rows={1}
        />
        <button
          onClick={handleSendMessage}
          disabled={!inputValue.trim()}
          className="bg-blue-600 flex text-white p-3 h-full rounded-lg disabled:bg-blue-300 transition-colors"
        >
          <SendHorizonal className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ChatInputArea;
