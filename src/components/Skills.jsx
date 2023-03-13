import colorSharp from "../assets/img/color-sharp.png"
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';


import { skills } from "../constants";
import { ShieldLock } from "react-bootstrap-icons";


 const Skills = ({}) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        {/* <h3>Skills</h3> */}
            
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        {skills.map((skill) => (

                       <div className='item' key={skill.name}>
                         <h1>{skill.name}</h1>
                         <img 
                         src={skill.icon} />
                        </div>
            ))}
                
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
export default Skills;