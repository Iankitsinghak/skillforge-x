// src/components/Typewriter.jsx
import { useState, useEffect } from 'react';

const Typewriter = ({ texts = [], speed = 100, delay = 2000 }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];

    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayed('');
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex, texts, speed, delay]);

  return (
    <span className="font-mono text-purple-300">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default Typewriter;
