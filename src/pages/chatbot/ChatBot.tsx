import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ChatToggle from "../../components/common/chatbot/ChatToggle";
import ChatWindow from "../../components/common/chatbot/ChatWindow";
import { chatbotData } from "../../mock/chatbotData";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! Welcome 👋 How can I help you?", isBot: true },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const addMessage = (text, isBot = false) =>
    setMessages((prev) => [...prev, { id: prev.length + 1, text, isBot }]);

  const handleQuickReply = (reply) => {
    addMessage(reply, false);
    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        addMessage(`Bot response for: ${reply}`, true);
      }, 1200);
    }, 500);
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    const msg = inputMessage;
    addMessage(msg, false);
    setInputMessage("");
    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        addMessage(`Bot response for: ${msg}`, true);
      }, 1200);
    }, 500);
  };

  return (
    <>
      <ChatToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <AnimatePresence>
        {isOpen && (
          <ChatWindow
            isMinimized={isMinimized}
            setIsMinimized={setIsMinimized}
            onClose={() => setIsOpen(false)}
            messages={messages}
            isTyping={isTyping}
            quickReplies={chatbotData.quickReplies}
            onQuickReply={handleQuickReply}
            inputMessage={inputMessage}
            setInputMessage={setInputMessage}
            onSend={handleSendMessage}
          />
        )}
      </AnimatePresence>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>
    </>
  );
};

export default ChatBot;
