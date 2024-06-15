import { useState, useEffect } from 'react';
import PaginationDots from './PaginationDots';
import InfoSection from './InfoSection';
import HeroImage from './HeroImage';
import data from './data.json';
import { motion } from 'framer-motion';

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

export default function MainContent() {
  // Initialize selectedTech with the first technology name from the JSON data.
  const [selectedTech, setSelectedTech] = useState(data.technology[0].name);

  function changeSelectedTech(e) {
    setSelectedTech(e.currentTarget.dataset.name);
  }

  const technologies = data.technology;
  let description;
  let portraitImgUrl;
  let landscapeImgUrl;
  let subtitle;


  // Loop to find the technology matching the selectedTech
  for (let technology of technologies) {
    if (technology.name !== selectedTech) continue;
    description = technology.description;
    portraitImgUrl = technology.images.portrait;
    landscapeImgUrl = technology.images.landscape;
    subtitle = technology.subtitle;  // Fetching subtitle

  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      className='technology__main-content'
    >
      <PaginationDots
        technologies={technologies} // Passing the technologies to the PaginationDots
        selectedTech={selectedTech}
        changeSelectedTech={changeSelectedTech}
      />
      <InfoSection selectedTech={selectedTech} description={description} subtitle={subtitle} />
      <HeroImage
        selectedTech={selectedTech}
        portraitImg={portraitImgUrl}
        landscapeImg={landscapeImgUrl}
      />
    </motion.div>
  );
}
