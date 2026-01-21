import React from "react";
import robot from "../../assets/AiChatbot.png";

const AIChatbot = () => {
  return (
    <section>
      <div className="fixed right-5 bottom-5 z-40 max-h-24 max-w-24 w-full">
        <img
          src={robot}
          alt="Ai-Chatbot"
          className="opacity-80 hidden sm:block cursor-pointer"
        />
      </div>
    </section>
  );
};

export default AIChatbot;
