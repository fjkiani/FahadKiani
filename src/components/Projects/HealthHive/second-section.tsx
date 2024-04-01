import React, { useState, useEffect, useRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { layout, styles } from '../../../styles';
import FeatureCard from './FeatureCard';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const FadeText = styled.span`
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.5s ease-in-out;
  ${props => props.isActive && css`
    opacity: 1;
    font-weight: bold;
  `}
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const SecondSection = ({ featureData }) => {
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const words = featureData ? Object.keys(featureData) : [];
  const intervalRef = useRef(null);

  const handleWordClick = (index) => {
    setActiveWordIndex(index);
    clearInterval(intervalRef.current); // Clear existing interval
    intervalRef.current = startInterval(); // Restart the interval
  };

  const startInterval = () => setInterval(() => {
    setActiveWordIndex(prevIndex => (prevIndex + 1) % words.length);
  }, 10000); // Control the transition speed here

  useEffect(() => {
    intervalRef.current = startInterval(); // Start the interval on mount
    return () => clearInterval(intervalRef.current); // Clear interval on unmount
  }, [words.length]); // Add words.length as a dependency

  const renderContent = () => {
    const activeWord = words[activeWordIndex];
    const { features, title, paragraph } = featureData[activeWord];

    return (
      <section id="features" className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>{title}</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{paragraph}</p>
        </div>
        <div className={`${layout.sectionImg} flex-col`}>
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="pt-40 flex flex-col lg:flex-row items-center justify-center lg:space-x-10 bg-black">
      <div className="w-full lg:w-2/3 text-center lg:text-left px-6 mb-6">
        <h1 className="text-1xl md:text-4xl lg:text-5xl font-light text-white mb-6 leading-snug">
          {words.map((word, index) => (
            <FadeText
              key={word}
              isActive={index === activeWordIndex}
              onClick={() => handleWordClick(index)}
            >
              {word}
            </FadeText>
          ))}
        </h1>
        {renderContent()}
      </div>
    </div>
  );
};

export default SecondSection;
