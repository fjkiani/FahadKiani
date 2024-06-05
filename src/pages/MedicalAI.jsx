// src/components/MainPage.js
import { HHFirstSection, HHSecondSection, HHFeatures, StarsCanvas, HHThirdSection, Contact, HHLogoSlider } from "../components";
import {thirdSectionData, logosDataMedicalAI} from '../constants'; // Make sure to import the correct data
import { medicalAIFeatures, featuresDataMedicalAI, projectsDetails } from '../components/Projects/HealthHive/constants'; // Adjust the path as necessary



// export { Insights } from './Insights';


const MedicalAI = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <div className="gradient-03 z-0" />
      <HHFirstSection projectDetails={projectsDetails.medicalAI} />  
      <HHSecondSection featureData={medicalAIFeatures}/>
      <HHFeatures data={featuresDataMedicalAI}/>    
 
      <Contact/>
      <StarsCanvas />
    </div>
  );
};

export default MedicalAI;
