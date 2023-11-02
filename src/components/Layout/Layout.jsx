import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import { Wrapper } from './Layout.styled';

const Layout = () => {
  return (
    <Wrapper>
      <NavBar />
      <Outlet />
    </Wrapper>
  );
};

export default Layout;
