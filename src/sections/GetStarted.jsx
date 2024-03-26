'use client';

import { motion } from 'framer-motion';

import {styles} from '../styles';
import { startingFeatures } from '../constants';
import { StartSteps, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';


const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      {/* Adjust the flex basis for the image container to give it less space */}
      <motion.div
        variants={planetVariants('left')}
        className="flex-1 flex justify-center items-center"
        style={{ flexBasis: '30%' }} // Adjust this value as needed
      >
        <img
          src="/get-started.png"
          alt="get-started"
          className="w-full h-full object-contain"
          style={{ maxWidth: '80%', maxHeight: '80%' }} // Adjust these values as needed
        />
      </motion.div>
      
      {/* Adjust the flex basis for the text container to give it more space */}
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-1 flex justify-center flex-col"
        style={{ flexBasis: '70%' }} // Adjust this value as needed
      >
        <TypingText title="| Why our solutions work" />
        <TitleText title={<span>Our 5 pillars of <span className='text-[#03fc73]'>improving healthcare 5x</span></span>} />

        <div className="mt-[31px] flex flex-col gap-[54px]" style={{ maxWidth: '100%' }}> 
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={index}
              number={`${index + 1 < 10 ? '0' : ''}${index + 1}`}
              title={feature.title}
              subtitle={feature.subtitle}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
