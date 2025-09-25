import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const ChatToggle = ({ isOpen, onClick }) => (
  <motion.button
    onClick={onClick}
    className={`fixed bottom-6 right-6 z-50 bg-gradient-to-r from-orange-500 to-orange-600 
               hover:from-orange-600 hover:to-orange-700 text-white p-4 rounded-full 
               shadow-lg hover:shadow-xl transition-all duration-300 animate-float
               ${isOpen ? 'scale-0' : 'scale-100'}`}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    initial={{ scale: 0 }}
    animate={{ scale: isOpen ? 0 : 1 }}
  >
    <MessageCircle className="w-6 h-6" />
    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
  </motion.button>
);

export default ChatToggle;
