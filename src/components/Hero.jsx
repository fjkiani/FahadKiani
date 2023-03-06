import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import HeroTyper from "./HeroTyper";


const Hero = () => {


  return (
    <section className={`relative w-full h-screen mx-auto    bg-[#000000]
    `}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5  bg-[#000000]`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
      
          {/* <div className='w-1 sm:h-80 h-40 violet-gradient' /> */}
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello World My Name is <span className='text-[#03fc73]'>Fahad J. Kiani</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <br/>
            Senior Solutions Engineer | Web Developer <br></br><br></br><br></br>
            <HeroTyper/>
          {/* <div className='w-1 sm:h-80 h-40 violet-gradient' /> */}

          </p>
        </div>
      </div>
      <br/>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          {/* <div className='w-[35px] h-[84px] m{} rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div> */}
        </a>
      </div>
    </section>
  );
};

export default Hero;
