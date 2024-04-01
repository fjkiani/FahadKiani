import React, { useState } from 'react';
import styled, {css, keyframes } from 'styled-components';
import { Check } from "lucide-react";
import { DollarSign, Braces, MessageCircle, PencilLine } from "lucide-react";




const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
`;


const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const FadeText = styled.div`
  cursor: pointer;
  opacity: 0.2;
  transition: opacity 0.5s ease-in-out;
  ${({ isActive }) => isActive && css` /* <--- wrap with css helper */
    opacity: 1;
    font-weight: bold;
    animation: ${fadeIn} 0.5s forwards;
  `}
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const CombinedSection = ({ data }) => {
  const [activeFeature, setActiveFeature] = useState(data[0]);

  return (
    <div className="bg-black text-white py-20 px-10 md:px-20">
      <div className="text-center text-4xl md:text-6xl font-medium pb-16"></div>
      <div className="md:flex md:justify-between items-center space-y-6 md:space-y-0">
        <div className="md:w-1/2 space-y-4">
          {data.map((feature, index) => (
            <FadeText
            key={index}
            isActive={activeFeature.title === feature.title}
            onClick={() => setActiveFeature(feature)}
            className="text-xl font-medium hover:underline"
          >
            <feature.Icon size={24} className="feature-icon" />
            {feature.name}
          </FadeText>
          ))}
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <h3 className="text-3xl md:text-5xl font-bold pb-4">{activeFeature.title}</h3>
          <p className="text-lg md:text-xl">{activeFeature.description}</p><br/>
          <FeaturesGrid>
            {activeFeature.features.map((feature, index) => (
              <FeatureItem key={index}>
                <Check size={20} />
                <span className="ml-2">{feature}</span>
              </FeatureItem>
            ))}
          </FeaturesGrid>

        </div>
      </div>
    </div>
  );
};

export default CombinedSection;
