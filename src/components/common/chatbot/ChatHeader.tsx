import React from "react";
import { Bot, Minimize2, Maximize2, X } from "lucide-react";

const ChatHeader = ({ isMinimized, onMinimize, onClose }) => (
  <div className="bg-gradient-to-r from-black to-gray-800 text-white p-4 flex items-center justify-between">
    <div className="flex items-center space-x-3">
      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
        <Bot className="w-4 h-4" />
      </div>
      <div>
        <h3 className="font-semibold text-sm">Juvenilia Tech Bot</h3>
        <p className="text-xs text-gray-300">Online • Ready to help</p>
      </div>
    </div>
    <div className="flex items-center space-x-2">
      <button onClick={onMinimize} className="hover:bg-gray-700 p-1 rounded">
        {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
      </button>
      <button onClick={onClose} className="hover:bg-gray-700 p-1 rounded">
        <X className="w-4 h-4" />
      </button>
    </div>
  </div>
);

export default ChatHeader;
