import React, { useState, useEffect } from 'react';

// The TypewriterText component now accepts an array of words as a prop
const TypewriterText = ({ wordsArray }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index >= wordsArray.length) {
      setIndex(0);
      return;
    }

    if (subIndex === wordsArray[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % wordsArray.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : subIndex === wordsArray[index].length ? 1000 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, wordsArray]);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <span className="text-[#03fc73]">
      {wordsArray[index]?.substring(0, subIndex)}{blink ? '|' : ' '}
    </span>
  );
};

export default TypewriterText;
