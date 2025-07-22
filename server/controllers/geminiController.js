const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.askGemini = async (req, res) => {
  try {
    const { prompt } = req.body;
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    res.status(200).json({ answer: text });
  } catch (err) {
    console.error('Gemini Error:', err.message);
    res.status(500).json({ error: 'Gemini API failed' });
  }
};
