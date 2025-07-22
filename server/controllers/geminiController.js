const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.askGemini = async (req, res) => {
  try {
    const { message } = req.body; // 👈 make sure frontend sends "message"

    if (!message) {
      return res.status(400).json({ error: 'No message provided' });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent(message);
    const response = await result.response;
    const text = await response.text(); // 👈 await this!

    res.json({ answer: text });
  } catch (err) {
    console.error('Gemini Error:', err.message);
    res.status(500).json({ msg: 'Gemini API failed', error: err.message });
  }
};
