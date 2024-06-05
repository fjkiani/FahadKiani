// src/components/MainPage.js
import { HHFirstSection, HHSecondSection, HHFeatures, StarsCanvas, HHThirdSection, Contact, HHLogoSlider, Header } from "../components";
import {thirdSectionData, logosData} from '../constants'; // Make sure to import the correct data
import { healthHiveAdCampaignFeatures, featuresDataHealthHive, projectsDetails } from '../components/Projects/HealthHive/constants'; // Adjust the path as necessary


// export { Insights } from './Insights';


const HealthHive = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <div className="gradient-03 z-0" />
      <HHFirstSection projectDetails={projectsDetails.healthHive} />
      <HHSecondSection featureData={healthHiveAdCampaignFeatures}/>
      <HHFeatures data={featuresDataHealthHive}/>    
      {/* <HHThirdSection sectionData={thirdSectionData}/>  */}
      <HHLogoSlider logos={logosData}/>
      <Contact/>
      
      <StarsCanvas />
    </div>
  );
};

export default HealthHive;
