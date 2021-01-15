import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledNav = styled.nav`
  position: fixed;
  z-index: 99999;
  left: 0;
  top: 0;
  right: 0;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //backdrop-filter: blur(20px);
  //will-change: backdrop-filter;
  //TODO: blur after scrool
`;

const StyledLogo = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 4.8rem;
  padding-left: 60px;
  color: ${({ theme }) => theme.colors.navyBlue};
`;

const StyledListItem = styled.li`
  display: inline-block;
  list-style: none;
  padding-left: 32px;
  text-decoration: none;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.navyBlue};
`;

const StyledList = styled.ul`
  padding-right: 120px;
  @media (max-width: 765px) {
    display: none;
  }
`;

const Navigation = () => (
  <StyledNav>
    <StyledLogo>LOGO</StyledLogo>
    <StyledList>
      <StyledListItem as={Link} to="#offer">
        Oferta
      </StyledListItem>
      <StyledListItem>Cennik</StyledListItem>
      <StyledListItem>Galeria</StyledListItem>
      <StyledListItem>Kontakt</StyledListItem>
    </StyledList>
  </StyledNav>
);

export default Navigation;
