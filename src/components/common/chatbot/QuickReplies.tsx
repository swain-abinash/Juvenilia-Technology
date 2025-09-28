import React from "react";
import { motion } from "framer-motion";

const QuickReplies = ({ replies, onReply }) => (
  <div className="px-4 py-2 border-t border-gray-200">
    <div className="flex flex-wrap gap-2 mb-3">
      {replies.map((reply, i) => (
        <motion.button
          key={i}
          onClick={() => onReply(reply)}
          className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs 
                     hover:bg-orange-200 transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {reply}
        </motion.button>
      ))}
    </div>
  </div>
);

export default QuickReplies;
