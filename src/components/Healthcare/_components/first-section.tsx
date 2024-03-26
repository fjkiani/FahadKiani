import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled(motion.div)`
  position: relative;
  background: url('/content/hc-hero.jpg') no-repeat center center;
  background-size: cover;
  background-position: center;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5); // Dark overlay for text visibility
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10; // Ensure content is above the overlay
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem; // Adjust font size according to your design
  margin-bottom: 0.5rem;
`;

const HeroSubtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const CallToActionButton = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1.25rem;
  background-color: #03fc73; // Bright color for visibility
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #02d762; // Slightly darker on hover
  }
`;

const HeroSection = () => (
  <HeroContainer>
    <HeroContent>
      <HeroTitle>Simplified, Integrated and Deployed Solutions Across healthcare and life sciences </HeroTitle>
      {/* <HeroSubtitle>
        Machine Learning | Web Development | Data Transformation | Graphic Designing
      </HeroSubtitle> */}
      <CallToActionButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get Started
      </CallToActionButton>
    </HeroContent>
  </HeroContainer>
);

export default HeroSection;
