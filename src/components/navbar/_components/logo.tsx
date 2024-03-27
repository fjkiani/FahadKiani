import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Update your LogoContainer to align items to the left
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Aligns children (logo) to the left */
  padding-left: 1rem; /* Adjust the padding as needed for your design */
  
`;

const LogoImage = styled.img`
  width: 95px; // You can keep this as is, or adjust as needed
  height: auto; // Maintains the aspect ratio of the image
  margin-top: -3rem;

`;

const Logo = () => {
  return (
    <LogoContainer>
      <Link to="/">
        <LogoImage src="/logo/Joy-Saber.png" alt="logo" />
      </Link>
    </LogoContainer>
  );
};

export default Logo;
