import MainContent from './MainContent';
import '../../styles/TechnologyPage.scss';
import { motion } from "framer-motion";


export default function TechnologySection() {
  return (
    <main className='main technology'>
      
      {/* <h1 className='main__page-heading main__page-heading--technology'>
        Space Launch 101
      </h1> */}
      <MainContent />
    </main>
  );
}
