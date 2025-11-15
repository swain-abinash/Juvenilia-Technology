import React from "react";
import { motion } from "framer-motion";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import QuickReplies from "./QuickReplies";
import ChatInput from "./ChatInput";

type ChatMessage = { id: number; text: string; isBot: boolean };

type ChatWindowProps = {
  isMinimized: boolean;
  setIsMinimized: (value: boolean) => void;
  onClose: () => void;
  messages: ChatMessage[];
  isTyping: boolean;
  quickReplies: string[];
  onQuickReply: (reply: string) => void;
  inputMessage: string;
  setInputMessage: (value: string) => void;
  onSend: () => void;
  positionClass?: string;
};

const ChatWindow = ({
  isMinimized,
  setIsMinimized,
  onClose,
  messages,
  isTyping,
  quickReplies,
  onQuickReply,
  inputMessage,
  setInputMessage,
  onSend,
  positionClass = 'fixed bottom-6 right-6'
}: ChatWindowProps) => (
  <motion.div
    initial={{ opacity: 0, y: 100, scale: 0.8 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 100, scale: 0.8 }}
    className={`${positionClass} z-50 bg-white border border-gray-200 rounded-2xl shadow-2xl
               ${isMinimized ? "w-80 h-16" : "w-96"} 
               transition-all duration-300 overflow-hidden`}
  >
    <ChatHeader isMinimized={isMinimized} onMinimize={() => setIsMinimized(!isMinimized)} onClose={onClose} />
    {!isMinimized && (
      <>
        <ChatMessages messages={messages} isTyping={isTyping} />
        <QuickReplies replies={quickReplies} onReply={onQuickReply} />
        <ChatInput inputMessage={inputMessage} setInputMessage={setInputMessage} onSend={onSend} />
      </>
    )}
  </motion.div>
);

export default ChatWindow;
