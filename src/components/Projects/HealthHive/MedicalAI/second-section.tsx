import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { layout, styles } from '../../../../styles';
import FeatureCard from '../FeatureCard';

const fadeInOut = keyframes`
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const FadeText = styled.span`
  opacity: 0.2; // Make non-active words darker
  transition: opacity 0.5s ease-in-out;
  ${(props) =>
    props.isActive &&
    css`
      animation: ${fadeIn} 0.5s forwards;
    `}
  &:not(:last-child) {
    margin-right: 10px; // Add some space between words
  }
`;

const FadeTextContainer = styled.div`
  display: inline-block;
  > span {
    animation: ${fadeInOut} 12s linear infinite;
    animation-delay: ${({ index }) => index * 3}s;
  }
`;

const WordsContainer = styled.div`
  display: inline-block;
`;

const SecondSection = () => {
  const [activeTitle, setActiveTitle] = useState('Machine Learning');
  const words = ['Data Labeling', 'Machine Learning'];
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change active word every 3 seconds

    return () => clearInterval(interval);
  }, [words.length]);

  const renderContent = () => {
    const featureSet = featureSets[activeTitle];
    const sectionTitle = titles[activeTitle];
    const sectionParagraph = paragraphs[activeTitle];

    return (
      <section id="features" className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={`${styles.heading2} text-2xl md:text-3xl`}>{sectionTitle}</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-3 text-sm md:text-base`}>{sectionParagraph}</p>
        </div>
        <div className={`${layout.sectionImg} flex-col`}>
          {featureSet.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="pt-10 md:pt-20 flex flex-col lg:flex-row items-center justify-center lg:space-x-10 bg-black">
      <div className="w-full lg:w-2/3 text-center lg:text-left px-4 mb-6">
        <h1 className="text-1xl md:text-4xl lg:text-5xl font-light text-white mb-6 leading-snug">
          <WordsContainer>
            {words.map((word, index) => (
              <FadeText key={word} isActive={index === activeWordIndex}>
                {word}
              </FadeText>
            ))}
          </WordsContainer>
        </h1>
        <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4">
          {Object.keys(featureSets).map((title) => (
            <button
              key={title}
              className={`rounded-3xl px-4 py-2 ${activeTitle === title ? "bg-[#d1d1f7] text-[#3d2e7c]" : "text-[#4b42ad] bg-white"}`}
              onClick={() => setActiveTitle(title)}
            >
              {title}
            </button>
          ))}
        </div>
        <div className="h-auto lg:h-80">{renderContent()}</div>
      </div>
    </div>
  );
};

export default SecondSection;
