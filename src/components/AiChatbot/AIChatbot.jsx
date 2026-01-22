import { useEffect, useRef, useState } from "react";
import { Send, X, Bot, User, Loader, Loader2 } from "lucide-react";
import robot from "../../assets/AiChatbot.png";

const API_URL = "http://localhost:3000/ai-chatbot";

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef(null);

  // auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = {
      id: Date.now(),
      role: "user",
      message: input,
      timestamp: new Date().toLocaleTimeString(),
    };

    const thinkingMsg = {
      id: Date.now() + 1,
      role: "assistant",
      message: "",
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, userMsg, thinkingMsg]);
    setInput("");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.message }),
      });

      const data = await res.json();

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === thinkingMsg.id
            ? {
                ...msg,
                message: data.message || "No response",
              }
            : msg,
        ),
      );
    } catch (err) {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === thinkingMsg.id
            ? {
                ...msg,
                message: "AI is currently unavailable.",
              }
            : msg,
        ),
      );
    }
  };

  return (
    <section className="relative">
      {/* Floating Bot Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-20 md:top-auto right-0 md:right-5 md:bottom-5 z-40 w-20 h-20 cursor-pointer hover:scale-110 transition-transform"
      >
        <img
          src={robot}
          alt="AI Chatbot"
          className="w-full h-full object-contain drop-shadow-2xl"
        />
      </div>

      <div
        className={`fixed right-0 md:right-5 md:bottom-28 z-40 w-full h-screen md:w-96 md:h-[520px] bg-zinc-900 border border-orange-500/30 rounded-md shadow-2xl flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full opacity-0"} transition-all duration-500 ease-in-out overflow-hidden`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-orange-500/20 bg-linear-to-r from-orange-600/20 to-orange-500/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-600/20 rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">SuZen-Ai </h3>
              <span className="text-xs text-green-400">Online</span>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white cursor-pointer"
          >
            <X />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-950">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${
                msg.role === "user" ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  msg.role === "assistant" ? "bg-orange-600/20" : "bg-zinc-700"
                }`}
              >
                {msg.role === "assistant" ? (
                  <Bot className="w-5 h-5 text-orange-400" />
                ) : (
                  <User className="w-5 h-5 text-gray-300" />
                )}
              </div>

              <div className="max-w-[75%]">
                <div
                  className={`px-4 py-2 rounded-md text-sm ${
                    msg.role === "assistant"
                      ? "bg-zinc-800 text-white"
                      : "bg-gradient-to-r from-orange-600 to-orange-500 text-white"
                  }`}
                >
                  {msg.message === "" ? (
                    <div className="flex items-center gap-2">
                      {" "}
                      <Loader2 className="animate-spin" />
                      <p>Thinking...</p>
                    </div>
                  ) : (
                    msg.message
                  )}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {msg.timestamp}
                </div>
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-orange-500/20 bg-zinc-900">
          <div className="flex gap-2 mb-24 md:mb-0">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message…"
              className="flex-1 px-4 py-2 bg-zinc-800 border border-orange-500/30 rounded-md text-white outline-none"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="px-4 py-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-md disabled:opacity-50 cursor-pointer"
            >
              <Send />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChatbot;
