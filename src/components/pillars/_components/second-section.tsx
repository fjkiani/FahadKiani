"use client";

import { useState } from "react";
import { motion } from 'framer-motion';
import { StartSteps, TitleText, TypingText } from '../components';
import HeroTyper from "../../HeroTyper"
import  {styles, layout } from '../../../styles';
import { features } from '../../../constants';
import {machineLearningFeatures, dataTransformationFeatures, webDevelopmentFeatures, dataAnalyticsFeatures } from '../../../constants';





const words2 = ['Consulting', 'Development', 'Expertise', 'Deployment'];


const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);


// import Image from "next/image";

const SecondSection = () => {
  const [activeTitle, setActiveTitle] = useState("Machine Learning");

  const handleTitleClick = (title) => {
    setActiveTitle(title);
  };

  const renderContent = () => {
    let featureSet;
    let sectionTitle;
    let sectionParagraph;

    switch (activeTitle) {
      case "Machine Learning":
        featureSet = machineLearningFeatures;
        sectionTitle = "Harness Machine Learning For Strategic Advantage";
        sectionParagraph = "Integrate Advanced Machine Learning Capabilities To Unlock Predictive Insights And Automate Complex Processes.";
        break;
      case "Data Transformation":
        featureSet = dataTransformationFeatures;
        sectionTitle = "Leverage AI and Data Analytics";
        sectionParagraph = "Empower Your Organization With The Tools To Transform Complex Data Into Clear And Actionable Insights.";
        break;
      case "Web Development":
        featureSet = webDevelopmentFeatures;
        sectionTitle = "Crafting Digital Experiences";
        sectionParagraph = "From Idea To Deployment, We Develop Web Solutions That Drive Business Growth And User Engagement.";
        break;
      case "Data Analytics":
        featureSet = dataAnalyticsFeatures;
        sectionTitle = "Turning Data Into Action";
        sectionParagraph = "Harness The Power Of Data To Unlock Actionable Insights And Drive Strategic Business Outcomes.";
        break;
      default:
        featureSet = [];
        sectionTitle = "";
        sectionParagraph = "";
    }

    return featureSet.length > 0 ? (
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
    ) : null;
  };

  return (
    <div
  className="pt-5 flex flex-col lg:flex-row items-center justify-center lg:space-x-10"
>

  <div className="w-full lg:w-2/3 text-center lg:text-left px-6 mb-6">
  {/* <h1 className="text-1xl md:text-4xl lg:text-5xl font-light text-white mb-6 leading-snug ">
  Technical <HeroTyper wordsArray={words2} /> for your business
</h1> */}
    
    <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
      {["Machine Learning", "Data Transformation", "Web Development", "Data Analytics"].map((title) => (
        <button
          key={title}
          className={`rounded-3xl px-6 py-2 ${activeTitle === title
            ? "bg-[#d1d1f7] text-[#3d2e7c]"
            : "text-[#4b42ad] bg-white"
          } hover:shadow-md transition-transform duration-300`}
          onClick={() => handleTitleClick(title)}
        >
          {title}
        </button>
      ))}
    </div>

    <div className="h-auto lg:h-96">{renderContent()}</div>
  </div>

  {/* <div className="w-[80%] lg:w-[20%] h-auto mx-auto lg:mx-0">
    <img
      src="/get-started.png"
      alt="Get Started"
      className="w-full h-full object-contain"
    />
  </div> */}
</div>
  );
};

export default SecondSection;
