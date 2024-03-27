"use client";

import { useState } from "react";
import { motion } from 'framer-motion';
import { StartSteps, TitleText, TypingText } from '../components';
import HeroTyper from "../../HeroTyper"
import  {styles, layout } from '../../../styles';
import { features } from '../../../constants';
import { dataTransformationFeatures, machineLearningFeatures, webDevelopmentFeatures, dataAnalyticsFeatures } from '../../../constants';





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

  const handleTitleClick = (title: any) => {
    setActiveTitle(title);
  };
  

  const renderContent = () => {
    switch (activeTitle) {
      case "Machine Learning":
        return (
          <section id="ml-features" className={layout.section}>
            <div className={layout.sectionInfo}>
              <h2 className={styles.heading2}>
                Harness Machine Learning for Strategic Advantage
              </h2>
              <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Integrate advanced machine learning capabilities to unlock predictive insights and automate complex processes.
              </p>
            </div>
            <div className={`${layout.sectionImg} flex-col`}>
              {machineLearningFeatures.map((feature, index) => (
                <FeatureCard key={feature.id} {...feature} index={index} />
              ))}
            </div>
          </section>
        );

        case "Data Transformation":
          return (
            <section id="features" className={layout.section}>
              <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                  Leverage AI, Data Analytics and Automated Signals to Become a Winning Trader
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Empower your organization with the tools to transform complex data into clear and actionable insights.
                </p>
              </div>
              <div className={`${layout.sectionImg} flex-col`}>
                {/* If you have specific feature cards for the Data Transformation section, map them here */}
                {dataTransformationFeatures.map((feature, index) => (
                  <FeatureCard key={feature.id} {...feature} index={index} />
                ))}
              </div>
            </section>
          );

          case "Web Development":
            return (
              <section id="web-development-features" className={layout.section}>
                <div className={layout.sectionInfo}>
                  <h2 className={styles.heading2}>
                    Crafting Digital Experiences
                  </h2>
                  <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    From idea to deployment, we develop web solutions that drive business growth and user engagement.
                  </p>
                </div>
                <div className={`${layout.sectionImg} flex-col`}>
                  {webDevelopmentFeatures.map((feature, index) => (
                    <FeatureCard key={feature.id} {...feature} index={index} />
                  ))}
                </div>
              </section>
            );

        case "Mobile Development":
          return (
            <div className="md:py-8">
              <h2 className="py-10 text-3xl font-medium">
                These  write themselves
              </h2>
            </div>
          );

          case "Data Analytics":
            return (
              <section id="data-analytics-features" className={layout.section}>
                <div className={layout.sectionInfo}>
                  <h2 className={styles.heading2}>
                    Turning Data Into Action
                  </h2>
                  <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Harness the power of data to unlock actionable insights and drive strategic business outcomes.
                  </p>
                </div>
                <div className={`${layout.sectionImg} flex-col`}>
                  {dataAnalyticsFeatures.map((feature, index) => (
                    <FeatureCard key={feature.id} {...feature} index={index} />
                  ))}
                </div>
              </section>
            );
      default:
        return null;
    }
  };

  return (
    <div
  className="pt-40 flex flex-col lg:flex-row items-center justify-center lg:space-x-10 bg-black"
>

  <div className="w-full lg:w-2/3 text-center lg:text-left px-6 mb-6">
  <h1 className="text-1xl md:text-4xl lg:text-5xl font-light text-white mb-6 leading-snug">
  Technical <HeroTyper wordsArray={words2} /> for your business
</h1>
    
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

  <div className="w-[80%] lg:w-[20%] h-auto mx-auto lg:mx-0">
    <img
      src="/get-started.png"
      alt="Get Started"
      className="w-full h-full object-contain"
    />
  </div>
</div>
  );
};

export default SecondSection;
