import { useState } from 'react';
import { askGemini } from '../api/ask';

const AskAI = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: 'You', text: input };
    setMessages((prev) => [...prev, userMessage]);

    const res = await askGemini(input);
    const botMessage = { sender: 'Gemini', text: res.answer || 'No response' };
    setMessages((prev) => [...prev, botMessage]);
    setInput('');
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h2 className="text-3xl font-bold mb-6">🤖 Ask Gemini</h2>

      <div className="bg-gray-900 rounded-lg p-4 mb-4 max-h-[60vh] overflow-y-auto space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`text-sm ${msg.sender === 'You' ? 'text-right' : 'text-left'}`}>
            <span className="font-bold text-purple-400">{msg.sender}:</span> {msg.text}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          className="flex-grow p-2 bg-gray-800 rounded"
          placeholder="Ask anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="bg-purple-600 px-4 py-2 rounded">Send</button>
      </form>
    </div>
  );
};

export default AskAI;
