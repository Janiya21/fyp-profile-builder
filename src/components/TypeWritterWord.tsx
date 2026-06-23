import React, { useState, useEffect, useRef } from 'react';

const TypewriterHeading = ({ darkMode }: { darkMode: boolean }) => {
  const words = useRef(['Professional', 'Innovative', 'Impactful', 'Exceptional']);
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  
  // Timing configuration
  const typingSpeed = 60; // ms per character
  const deletingSpeed = 40; // ms per character
  const pauseBetweenWords = 2000; // ms
  const pauseBetweenCycles = 3000; // ms

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentWord = words.current[currentIndex];

    if (isTyping) {
      // Typing animation
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        // Switch to deleting after pause
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseBetweenWords);
      }
    } else {
      // Deleting animation
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, deletingSpeed);
      } else {
        // Move to next word or restart
        const nextIndex = (currentIndex + 1) % words.current.length;
        setCurrentIndex(nextIndex);
        
        // Longer pause before starting new cycle if we're at the end
        const delay = nextIndex === 0 ? pauseBetweenCycles : 0;
        
        timeout = setTimeout(() => {
          setIsTyping(true);
        }, delay);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, currentIndex, isTyping]);

  return (
    <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold lg:mb-6 mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
      Showcase Your <br></br> {' '}
      <span className="text-purple-600 relative">
        {displayText}
        {/* Smooth blinking cursor */}
        <span 
          className={`absolute bottom-0 left-full h-8 w-0.5 ml-1 ${displayText.length === words.current[currentIndex].length ? 'bg-transparent' : 'bg-purple-600'}`}
          style={{
            animation: 'blink 1s step-end infinite',
          }}
        />
      </span>{' '}
      <span className='text-small'>&nbsp;</span>
    </h1>
  );
};

export default TypewriterHeading;

// Add this to your global CSS
/*
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
*/

// Usage:
// <SmoothTypewriter darkMode={darkMode} />