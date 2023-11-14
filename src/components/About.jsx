import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[20px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 className={styles.sectionSubText}>About Me </h1>
        <p className={styles.heroSubText}>A versatile Solutions Engineer, Architect, and Software Engineering Instructor,  My experience encompasses enterprise sales/solutions engineering, data transformations, creating education programs and scaling early-stage startups</p>
      </motion.div>

      {/* <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-[14px] max-w-3xl leading-[30px] text-[#03fc73]'
      >
     I bring 5+ years of experience in Technical Sales, Support, and Software Development. Hands-on programming experience with JavaScript, React, Java, C++, APIs, and Big Data to consult technical scope of work requirements and overachieve 
      </motion.p> */}

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
