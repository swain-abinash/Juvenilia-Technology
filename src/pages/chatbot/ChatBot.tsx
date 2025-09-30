import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ChatToggle from "../../components/common/chatbot/ChatToggle";
import ChatWindow from "../../components/common/chatbot/ChatWindow";
import { chatbotData } from "../../mock/chatbotData";

// Build a simple static reply based on mock data and user intent
function buildStaticReply(input: string): string {
  const text = input.toLowerCase();
  const { responses } = chatbotData as any;

  if (/\b(hi|hello|hey)\b/.test(text)) {
    return responses.greeting[0];
  }
  if (/(service|services|offer|provide)/.test(text)) {
    return [
      responses.services.message,
      ...responses.services.details,
    ].join("\n");
  }
  if (/(price|pricing|plan|plans|cost)/.test(text)) {
    return [
      responses.pricing.message,
      ...responses.pricing.plans,
    ].join("\n");
  }
  if (/(about|company|who are you)/.test(text)) {
    return [
      responses.about.message,
      ...responses.about.points,
    ].join("\n");
  }
  if (/(contact|email|phone|call)/.test(text)) {
    return [
      responses.contact.message,
      ...responses.contact.details,
    ].join("\n");
  }
  if (/(portfolio|work|case study|case studies)/.test(text)) {
    return "You can explore our portfolio and case studies on our website. If you share your project type, I can suggest relevant examples.";
  }
  return "I can help with Services, Pricing, Portfolio, Contact details, or About the company. What would you like to know?";
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<{ id: number; text: string; isBot: boolean }[]>([
    { id: 1, text: "Hello! Welcome 👋 How can I help you?", isBot: true },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const addMessage = (text: string, isBot: boolean = false) =>
    setMessages((prev) => [...prev, { id: prev.length + 1, text, isBot }]);

  const handleQuickReply = async (reply: string) => {
    addMessage(reply, false);
    setIsTyping(true);
    setTimeout(() => {
      const botText = buildStaticReply(reply);
      setIsTyping(false);
      addMessage(botText, true);
    }, 400);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    const msg = inputMessage;
    addMessage(msg, false);
    setInputMessage("");
    setIsTyping(true);
    setTimeout(() => {
      const botText = buildStaticReply(msg);
      setIsTyping(false);
      addMessage(botText, true);
    }, 400);
  };

  return (
    <>
      <ChatToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} positionClass="fixed bottom-24 right-6" />
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
            positionClass="fixed bottom-40 right-6"
          />
        )}
      </AnimatePresence>
      <style>{`
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
