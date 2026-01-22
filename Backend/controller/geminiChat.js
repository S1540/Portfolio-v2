const Groq = require("groq-sdk");
require("dotenv").config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

exports.chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;
    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: "You are a helpful AI assistant for a portfolio website.",
        },
        { role: "user", content: message },
      ],
    });

    res.json({
      success: true,
      role: "assistant",
      message: completion.choices[0].message.content,
    });
  } catch (err) {
    console.error("Groq Error:", err);
    res.status(500).json({
      success: false,
      message: "Failed to generate response",
    });
  }
};
