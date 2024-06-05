import React, { useState, useEffect } from 'react';

// The FadeInText component now accepts an array of words as a prop
const FadeInText = ({ wordsArray }) => {
  const [index, setIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeClass('fade-out');
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % wordsArray.length);
        setFadeClass('fade-in');
      }, 500); // Time for fade out
    }, 1000); // Time each word stays visible

    return () => clearTimeout(timeout);
  }, [index, wordsArray]);

  return (
    <span className={`text-[#03fc73] ${fadeClass}`}>
      {wordsArray[index]}
    </span>
  );
};

export default FadeInText;
