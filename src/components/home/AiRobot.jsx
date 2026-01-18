import React, { useState } from "react";
import Lottie from "lottie-react";
import robot from "../../assets/AiRobot.json";
import { X, Send } from "lucide-react";

const AiRobot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      console.log("User message:", message);
      // Your AI integration logic here
      setMessage("");
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat Box */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-zinc-900/95 backdrop-blur-sm border border-orange-500/30 rounded-md shadow-2xl mb-2">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-orange-500/20 bg-gradient-to-r from-orange-600/20 to-orange-500/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10">
                <Lottie animationData={robot} loop={true} />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">AI Assistant</h3>
                <span className="text-xs text-orange-400">Online</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="p-4 h-64 overflow-y-auto space-y-3">
            {/* Bot Message */}
            <div className="flex gap-2">
              <div className="w-8 h-8 shrink-0">
                <Lottie animationData={robot} loop={true} />
              </div>
              <div className="bg-orange-600/20 border border-orange-500/30 rounded-md px-4 py-2 max-w-[80%]">
                <p className="text-white text-sm">Hi! How can I help you? 👋</p>
              </div>
            </div>

            {/* User can add more messages here via AI integration */}
          </div>

          {/* Input Box */}
          <div className="p-4 border-t border-orange-500/20">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 bg-black/50 border border-orange-500/30 focus:border-orange-500 rounded-md text-white text-sm placeholder-gray-500 outline-none transition-colors"
              />
              <button
                onClick={handleSend}
                className="px-4 py-2 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white rounded-md transition-all hover:scale-105"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Robot Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 cursor-pointer hover:scale-110 transition-transform"
      >
        <Lottie animationData={robot} loop={true} />
      </div>

      {/* Popup Tooltip (when closed) */}
      {!isOpen && (
        <div className="absolute bottom-12 right-0 w-48 rounded-sm p-2 shadow-xl mb-2 animate-in slide-in-from-bottom-2 animate-pulse ">
          <p className="text-white text-xs font-light">
            Hi! How can I help you? 👋
          </p>
        </div>
      )}
    </div>
  );
};

export default AiRobot;
