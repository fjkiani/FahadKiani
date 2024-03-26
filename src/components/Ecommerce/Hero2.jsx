'use client';

import { motion } from 'framer-motion';
import { styles } from '../../styles';
import { fadeIn, staggerContainer, textVariant } from '../../utils/motion';
import { insights } from '../../constants';
import { InsightCard, TitleText, TypingText } from '../../components';

const Hero2 = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 
          variants={textVariant(1.1)} 
          className={styles.heroHeading}
        >
          Ecommerce
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>Solutions</h1>
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
        <video className="rounded-xl" autoPlay muted loop>
          <source src="/content/hero-1.mp4" type="video/mp4" />
        </video>
        

        <div className="container mx-auto text-center">
          <div className="text-6xl font-bold md:px-20 pt-8 pb-1 bg-gradient-to-r from-blue-500 to-green-300 bg-clip-text text-transparent">
          Revolutionize Your Online Selling with Next-Level eCommerce Strategies
          </div>

          {/* <p className="text-lg md:text-xl md:mt-10 bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent font-bold">
            No matter what you sell, Bird Software has everything you need to run your online store.
          </p> */}

          <div className="flex gap-4 justify-center pt-10">
            {/* <button className="bg-blue-500 text-white px-10 py-4 rounded-md text-lg font-bold">Get Started</button> */}
            <button className="bg-gray-600 text-white px-10 py-4 rounded-md text-lg font-bold">Learn More</button>
          </div>
        </div>
        

      </motion.div>
    </motion.div>
  </section>
);

export default Hero2;
