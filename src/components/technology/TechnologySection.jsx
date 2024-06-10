import MainContent from './MainContent';
import '../../styles/TechnologyPage.scss';
import { fadeIn, textVariant } from "../../utils/motion";

import { motion } from "framer-motion";


export default function TechnologySection(index) {
  return (

    <main className='main technology'>
      
      {/* <h1 className='main__page-heading main__page-heading--technology'>
        Space Launch 101
      </h1> */}
          <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
  >
      <MainContent />
          </motion.div>

    </main>
  );
}
