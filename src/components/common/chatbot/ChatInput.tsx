import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ChatInput = ({ inputMessage, setInputMessage, onSend }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="p-4 border-t border-gray-200 bg-white">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none 
                     focus:border-orange-500 text-sm"
        />
        <motion.button
          onClick={onSend}
          disabled={!inputMessage.trim()}
          className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 
                     text-white p-2 rounded-lg transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Send className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  );
};

export default ChatInput;
