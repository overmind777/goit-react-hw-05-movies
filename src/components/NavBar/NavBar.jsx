import React from 'react';
import { StyledLink, StyledNav } from './NavBar.styled';

const NavBar = () => {
  return (
    <StyledNav>
      <StyledLink to="/">Home Page</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
    </StyledNav>
  );
};

export default NavBar;
