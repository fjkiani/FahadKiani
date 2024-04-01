import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  case_study_link,

}) => {
  return (
    <motion.div variants={( "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
 {/* Image and links */}


          {/* <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div> */}
   

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]sectionHeadText'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        <div className="project-card-container">
 <div className="button-group">

  
        <img
          src={image}
          alt={name}
          className='w-full h-full object-cover rounded-2xl'
        />
        <div className='overlay flex flex-col justify-end items-start p-4 h-full'>
          {/* External link - View Source Code */}
          <a
            href={source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className='mb-2 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300'
          >
             Deployed Project
          </a>
          
          {/* Internal link - View Case Study */}
          <Link 
            to={case_study_link}
            className='inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300'
          >
             Case Study
          </Link>
        </div>
      </div>
      </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div>
        <p className={`${styles.sectionSubText} `}>Our work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          // variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcase skills and experience through
          real-world examples of our work. They reflect our
          ability to solve complex problems, work with different technologies,
          and turn ideas into reality.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
