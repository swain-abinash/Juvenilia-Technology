import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

type ChatToggleProps = {
  isOpen: boolean;
  onClick: () => void;
  positionClass?: string;
};

const ChatToggle = ({ isOpen, onClick, positionClass = 'fixed bottom-6 right-6' }: ChatToggleProps) => (
  <motion.button
    onClick={onClick}
    className={`${positionClass} z-50 bg-gradient-to-r from-orange-500 to-orange-600 
               hover:from-orange-600 hover:to-orange-700 text-white p-4 rounded-full 
               shadow-lg hover:shadow-xl transition-all duration-300 animate-float`}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    aria-label={isOpen ? 'Close chat' : 'Open chat'}
    title={isOpen ? 'Close chat' : 'Open chat'}
  >
    <MessageCircle className="w-6 h-6" />
    <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${isOpen ? 'bg-gray-300' : 'bg-green-400 animate-pulse'}`}></div>
  </motion.button>
);

export default ChatToggle;
