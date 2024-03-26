"use client";

import { useState } from "react";
import { motion } from 'framer-motion';
import { StartSteps, TitleText, TypingText } from '../components';
import HeroTyper from "../../HeroTyper"

const words2 = ['Consulting', 'Development', 'Expertise', 'Deployment'];



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
          <div className="md:py-8">
            <h2 className="py-10 text-3xl font-medium">
              NLP, Computer Vision and Audio 
            </h2>
            <p className="text-4xl leading-relax text-[#03fc73] font-light">
            By exploiting the foresight offered by data, we empower organizations to foresee customer needs and industry trends, crafting a more proactive approach their delivery.
            </p>
          </div>
        );

      case "Data Transformation":
        return (
          <div className="md:py-8">
            <h2 className="py-10 text-3xl font-medium">
              Cloud Migration and beyond
            </h2>
            <p className="text-3xl leading-relax text-[#03fc73] font-light">
            We help organizations distill complex datasets into intuitive visual narratives, assisting stakeholders in informed decision-making and uncovering hidden opportunities for advancement.
            </p>
          </div>
        );

      case "Web Development":
        return (
          <div className="md:py-8">
            <h2 className="py-10 text-3xl font-medium">
             Full Stack Web Development
            </h2>
            <p className="text-3xl leading-relax text-[#rgb(32 170 94)] font-light">
            At the heart of our company lies a profound commitment to revolutionize the digital landscape through unparalleled web development services.
            </p>
          </div>
        );

        case "Mobile Development":
          return (
            <div className="md:py-8">
              <h2 className="py-10 text-3xl font-medium">
                These  write themselves
              </h2>
              <p className="text-3xl leading-relax text-[#3d2e7c] font-light">
              At the heart of our company lies a profound commitment to revolutionize the digital landscape through unparalleled web development services 
              </p>
            </div>
          );

      case "Data Analytics":
        return (
          <div className="md:py-8">
            <h2 className="py-10 text-3xl font-medium">
            Transforming Data into Decisions            </h2>
            <p className="text-3xl leading-relax text-[#rgb(3 252 115 / var(--tw-text-opacity))] font-light">
            Our data visualization services transform complex datasets into intuitive, interactive visual representations. By presenting data in an easily digestible format, we enable stakeholders at all levels to grasp critical insights quickly, facilitating better communication and decision-making.
            </p>
          </div>
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
    <h1 className="text-4xl lg:text-4xl font-small text-white mb-6">
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
