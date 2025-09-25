import React from "react";
import { Bot, User } from "lucide-react";

const MessageBubble = ({ message }) => (
  <div className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
    <div className="flex items-start space-x-2 max-w-[80%]">
      {message.isBot && (
        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
          <Bot className="w-3 h-3 text-white" />
        </div>
      )}
      <div
        className={`px-3 py-2 rounded-lg text-sm whitespace-pre-line ${
          message.isBot
            ? "bg-white text-gray-800 border border-gray-200"
            : "bg-orange-500 text-white"
        }`}
      >
        {message.text}
      </div>
      {!message.isBot && (
        <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0">
          <User className="w-3 h-3 text-white" />
        </div>
      )}
    </div>
  </div>
);

export default MessageBubble;
