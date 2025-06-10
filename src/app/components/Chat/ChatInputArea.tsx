import React from "react";
import { Smile, SendHorizonal, Paperclip, X } from "lucide-react";
import { useState, useRef } from "react";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

const ChatInputArea = ({
  inputValue,
  setInputValue,
  handleSendMessage,
  selectedFile,
  setSelectedFile
}: {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  handleSendMessage: () => void;
  selectedFile: File | null;
  setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>;
}) => {
  const [openEmoji, setOpenEmoji] = useState(false);

  const onEmojiClick = (emojiObject: EmojiClickData) => {
    setInputValue((prev) => `${prev}${emojiObject.emoji}`);
    setOpenEmoji(false);
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      console.log("Selected file:", file);
    }
  };

  return (
    <div className="p-2 bg-white">
      <EmojiPicker open={openEmoji} onEmojiClick={onEmojiClick} />
      {selectedFile && (
        <div className="px-3 flex items-center justify-between py-1 mb-2 text-sm text-gray-700 bg-blue-200 rounded-md shadow-sm max-w-xs truncate">
          <span className="w-11/12 truncate">{selectedFile?.name}</span>
          <X
            className="w-3 h-3 hover: cursor-pointer"
            onClick={() => setSelectedFile(null)}
          />
        </div>
      )}

      <div className="flex items-center border border-gray-300 rounded-lg pl-4 pr-1 py-1 focus:outline-none resize-none">
        <Smile
          onClick={() => setOpenEmoji((prev) => !prev)}
          className="text-gray-500 hover: cursor-pointer w-4 h-4"
        />
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <Paperclip
          className="text-gray-500 hover:cursor-pointer w-4 h-4 ml-2"
          onClick={handleIconClick}
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
          className="flex-1 pl-3 pr-4 py-2 focus:outline-none resize-none"
          rows={1}
        />
        <button
          onClick={handleSendMessage}
          disabled={selectedFile === null && !inputValue.trim()}
          className="bg-primary flex text-white p-3 h-full rounded-lg disabled:bg-secondary transition-colors"
        >
          <SendHorizonal className={`w-4 h-4 ${selectedFile === null && !inputValue.trim() ? "text-secondaryText" : "text-white"}`} />
        </button>
      </div>
    </div>
  );
};

export default ChatInputArea;
