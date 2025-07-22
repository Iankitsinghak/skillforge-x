import { useState } from 'react';

const AskAI = () => {
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setAnswer('');

    try {
      const res = await fetch('https://<your-backend-url>/api/gemini/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      if (data.answer) {
        setAnswer(data.answer);
      } else {
        setAnswer('⚠️ Gemini did not return a response.');
      }
    } catch (err) {
      console.error(err);
      setAnswer('❌ Something went wrong while contacting Gemini!');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4 text-purple-400">Ask Gemini 🤖</h1>

      <textarea
        className="w-full max-w-xl bg-gray-800 text-white p-4 rounded-lg mb-4 border border-purple-500 focus:outline-none"
        rows="4"
        placeholder="Ask anything about projects, tech, jobs, etc..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>

      <button
        onClick={handleAsk}
        disabled={loading}
        className="bg-purple-600 hover:bg-purple-800 px-6 py-2 rounded-lg font-semibold transition duration-300"
      >
        {loading ? 'Thinking...' : 'Ask Gemini'}
      </button>

      {answer && (
        <div className="mt-6 w-full max-w-xl bg-gray-800 p-4 rounded-lg border border-purple-500">
          <h2 className="font-bold text-purple-300 mb-2">Answer:</h2>
          <p className="whitespace-pre-line text-gray-200">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default AskAI;
