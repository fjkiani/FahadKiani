// src/components/MainPage.js
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, ComputersCanvas, Skills, HeroSection, Footer, Header,   GetStarted, Explore, FirstSection, StartSteps } from "../components";
// export { Insights } from './Insights';


const healthcarePage = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <div className="gradient-03 z-0" />
      <FirstSection/>
      <GetStarted/>
      {/* <Hero/> */}
  
      <StarsCanvas />
    </div>
  );
};

export default healthcarePage;
