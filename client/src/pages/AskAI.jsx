// src/pages/AskAI.jsx
import React, { useState } from 'react';

const AskAI = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const askBot = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);

    try {
      const res = await fetch('https://your-backend.onrender.com/api/chatbot/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await res.json();
      const botMsg = { sender: 'bot', text: data.response || 'No response' };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: 'Something went wrong with Gemini 🤖' },
      ]);
    }

    setInput('');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4 text-purple-400">Ask SkillForge AI 🤖</h1>

      <div className="bg-gray-800 rounded-lg p-4 h-96 overflow-y-auto mb-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 p-2 rounded ${
              msg.sender === 'user' ? 'bg-purple-700 text-right' : 'bg-gray-700 text-left'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything..."
          className="flex-1 px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
        />
        <button
          onClick={askBot}
          className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-800"
        >
          Ask
        </button>
      </div>
    </div>
  );
};

export default AskAI;
