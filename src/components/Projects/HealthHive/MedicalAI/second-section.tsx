import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { layout, styles } from '../../../../styles';
import FeatureCard from '../FeatureCard';
import { dataAnalyticsFeatures, dataTransformationFeatures, machineLearningFeatures, webDevelopmentFeatures } from '../../../../constants';

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


  const WordsContainer = styled.div`
  display: inline-block;
`;


  const featureSets = {
    "Machine Learning": machineLearningFeatures,
    "Data Transformation": dataTransformationFeatures,
    "Web Development": webDevelopmentFeatures,
    "Data Analytics": dataAnalyticsFeatures,
  };

  const titles = {
    "Machine Learning": "MedicalAI's decreased their diagnostic",
    "Data Transformation": "Leverage AI and Data Analytics",
    "Web Development": "Crafting Digital Experiences",
    "Data Analytics": "Turning Data Into Action",
  };

  const paragraphs = {
    "Machine Learning": "Integrate Advanced Machine Learning Capabilities To Unlock Predictive Insights And Automate Complex Processes.",
    "Data Transformation": "Empower Your Organization With The Tools To Transform Complex Data Into Clear And Actionable Insights.",
    "Web Development": "From Idea To Deployment, We Develop Web Solutions That Drive Business Growth And User Engagement.",
    "Data Analytics": "Harness The Power Of Data To Unlock Actionable Insights And Drive Strategic Business Outcomes.",
  };

  const renderContent = () => {
    const featureSet = featureSets[activeTitle];
    const sectionTitle = titles[activeTitle];
    const sectionParagraph = paragraphs[activeTitle];

    return (
      <section id="features" className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>{sectionTitle}</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{sectionParagraph}</p>
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
    <div className="pt-40 flex flex-col lg:flex-row items-center justify-center lg:space-x-10 bg-black">
      <div className="w-full lg:w-2/3 text-center lg:text-left px-6 mb-6">
      <h1 className="text-1xl md:text-4xl lg:text-5xl font-light text-white mb-6 leading-snug">
        <WordsContainer>
          {words.map((word, index) => (
            <FadeText key={word} isActive={index === activeWordIndex}>
              {word}
            </FadeText>
          ))}
        </WordsContainer>
      </h1>
        <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
          {Object.keys(featureSets).map((title) => (
            <button
              key={title}
              className={`rounded-3xl px-6 py-2 ${activeTitle === title ? "bg-[#d1d1f7] text-[#3d2e7c]" : "text-[#4b42ad] bg-white"}`}
              onClick={() => setActiveTitle(title)}
            >
              {title}
            </button>
          ))}
        </div>
        <div className="h-auto lg:h-96">{renderContent()}</div>
      </div>
    </div>
  );
};

export default SecondSection;
