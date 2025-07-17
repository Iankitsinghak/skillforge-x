import { useState, useEffect } from 'react';

const Typewriter = ({ 
  texts = [], 
  speed = 100, 
  deleteSpeed = 50, 
  delay = 2000,
  cursorColor = 'text-purple-400',
  textColor = 'text-purple-300',
  font = 'font-mono'
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    
    // Skip if no texts or empty array
    if (!currentText || currentText.length === 0) return;

    let timeout;

    if (!isDeleting && charIndex < currentText.length) {
      // Typing mode
      timeout = setTimeout(() => {
        setDisplayed((prev) => prev + currentText[charIndex]);
        setCharIndex(charIndex + 1);
      }, speed);
    } else if (isDeleting && charIndex > 0) {
      // Deleting mode
      timeout = setTimeout(() => {
        setDisplayed((prev) => prev.slice(0, -1));
        setCharIndex(charIndex - 1);
      }, deleteSpeed);
    } else {
      // Pause between actions
      setIsPaused(true);
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(!isDeleting);
        if (isDeleting) {
          // Move to next text after deleting
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, speed, deleteSpeed, delay]);

  // Add CSS for blinking cursor (put this in your global CSS)
  // .blinking-cursor { animation: blink 1s step-end infinite; }
  // @keyframes blink { from, to { opacity: 1; } 50% { opacity: 0; } }

  return (
    <span className={`${font} ${textColor}`}>
      {displayed}
      <span className={`blinking-cursor ${cursorColor} ${isPaused ? 'opacity-0' : 'opacity-100'}`}>
        |
      </span>
    </span>
  );
};

export default Typewriter;
