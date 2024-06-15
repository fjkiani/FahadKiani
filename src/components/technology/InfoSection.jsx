import { motion } from 'framer-motion';  // Ensure motion is imported
import { ExploreCard, TitleText, TypingText } from '../';


export default function InfoSection({ selectedTech, description, subtitle }) {
  const infoVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <motion.section
      className='technology__info-section'
      initial="hidden"
      animate="visible"
      variants={infoVariants}
    >
      <motion.div
        variants={infoVariants} // Reusing the same variants for the child motion.div
        initial="hidden"
        animate="visible"
      >
        <h2 className='technology__sub-heading'> {subtitle}</h2>
        <h2 className='technology__name'>{selectedTech}</h2>
        <p className='technology__description'>{description}</p>
      </motion.div>
    </motion.section>
  );
}
