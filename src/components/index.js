import { EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas } from './canvas';
import Hero from "./Hero";
import Navbar from "./navbar/navbar";
import About from "./About";
import Tech from "./Tech";
import Experience from "./Experience";
import Works from "./Works";
import Feedbacks from "./Feedbacks";
import Contact from "./Contact";
import Earth from "./canvas/Earth";
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
  SecondSection2

};
