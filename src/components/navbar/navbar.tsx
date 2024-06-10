import React from 'react';
import styled from 'styled-components';
import ActionButtons from "./_components/action-buttons";
import Logo from "./_components/logo";
import { NavigationMenuBar } from "./_components/menu";

const StyledNavbar = styled.nav`
  width: 100%; // This will make the navbar the full width of the container it's in
  display: flex;
  align-items: center;
  justify-content: space-between; // Correct value for space between items
  padding-right: 2.5rem;
  padding-left: 1rem; // Reduced padding on the left side
  position: sticky; // Stick to the top
  top: 0;
  z-index: 50;
  // background-color: black;
  height: 6rem; // Set the height of the navbar
  

  @media (max-width: 1024px) {
    padding-left: 2rem; // Adjusted for smaller screens, make sure it's reasonable
  }
`;

// Assuming Logo component is adjusted as suggested previously:
const LogoContainer = styled.div`
  flex-shrink: 0; // This ensures that the logo container doesn't shrink
  // Remove width restriction to allow content-based sizing
`;

// Then your Navbar component should work fine as long as the Logo component is aligned correctly as per previous suggestions.


const Navbar = () => {
  return (
    <StyledNavbar>
      <LogoContainer>
        <Logo /> 
      </LogoContainer>
      <div className="flex items-center">
        <NavigationMenuBar />
        <ActionButtons />
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
