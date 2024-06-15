// src/components/MainPage.js
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, ComputersCanvas, Skills, HeroSection, Footer, Header,   GetStarted, Explore, Insights, SecondSection, TechnologySection, CrewPage } from "../components";
// export { Insights } from './Insights';
import DataDashboard from "../pages/DataDashboard";



const MainPage = () => {
  return (
    <div className='relative z-0 bg-primary'>
      {/* <Navbar /> */}
      <Hero />
      <DataDashboard/>
      {/* <Tech /> */}
      {/* <Header/> */}
      {/* <SecondSection/> */}
      {/* <GetStarted/> */}
      {/* <Feedbacks /> */}
  
      <div className="gradient-03 z-0" />
      <Explore />
      <TechnologySection/>
      {/* <CrewPage/> */}

      {/* <Works /> */}
      {/* <Insights/> */}
        <Contact />
      <StarsCanvas />
    </div>
  );
};

export default MainPage;
