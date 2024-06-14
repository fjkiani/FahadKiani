import { EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas } from './canvas';
//components
import Hero from "./Hero";
import Navbar from "./navbar/navbar";
import About from "./About";
import Tech from "./Tech";
import Experience from "./Experience";
import Works from "./Works";
import Feedbacks from "./Feedbacks";
import Contact from "./Contact";
import Earth from "./canvas/Earth";
//sections
import TechnologySection from './technology/TechnologySection'
import CrewPage from './crew/CrewPage'

import CanvasLoader from "./Loader";
import HeroTyper from "./HeroTyper";
import Skills from "./Skills";
// Removed the default import of CustomTexts
import { TypingText, TitleText } from './CustomTexts'; // Keep this if CustomTexts.jsx exports these named exports
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import GetStarted from "../sections/GetStarted";
import StartSteps from './StartSteps';
import Explore from './Explore';
import ExploreCard from './ExploreCard';
import InsightCard from './InsightCard';
import Insights from "../sections/Insights";
//ecommerce page
import Hero2 from "./Ecommerce/Hero2";
import Brands from "./Ecommerce/Brands";



//healthcare page 
import FirstSection from "../components/Healthcare/_components/first-section";
import SecondSection2 from "../components/Healthcare/_components/second-section";


//projects -> HealthHive // reusable components 
import HHFirstSection from "../components/Projects/HealthHive/first-section";
import HHFeatures from "../components/Projects/HealthHive/features";
import HHSecondSection from "../components/Projects/HealthHive/second-section";
import HHThirdSection from "../components/Projects/HealthHive/third-section";
//-> medicalAI
import MAISecondSection from "../components/Projects/HealthHive/MedicalAI/second-section";

//logo slider
import HHLogoSlider from "../components/Projects/HealthHive/slider";


//testing
import Button from '/src/components/Button';

//components for V2
import SecondSection from "./pillars/_components/second-section";






//testing
import HeroSection from "./HeroSection"

export {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contact,
  CanvasLoader,
  EarthCanvas, 
  BallCanvas, 
  ComputersCanvas, 
  StarsCanvas,
  Skills,
  HeroTyper,
  HeroSection,
  // CustomTexts, // Remove or comment out if CustomTexts does not have a default export
  Footer,
  TitleText,
  TypingText,
  GetStarted,
  StartSteps,
  Explore,
  ExploreCard,
  InsightCard,
  Insights,
  Hero2,
  Brands,
  Header,
  //test
  Button,
  SecondSection,
  //healthcare page components
  FirstSection,
  SecondSection2,
  //projects -> HealthHive -> resuable components 
  HHFirstSection,
  HHFeatures,
  HHSecondSection,
  HHThirdSection,
  //new sections
  TechnologySection,
  CrewPage,
  //medicalAI
  //loogos slider
  HHLogoSlider

};
