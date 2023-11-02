import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  gap: 20px;
  padding: 10px 20px;
  background-color: gray;
  box-shadow: 0px 6px 8px grey;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;

  &.active {
    color: brown;
  }
`;
