import React, { Suspense } from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import { Wrapper } from './Layout.styled';

const Layout = () => {
  return (
    <Wrapper>
      <NavBar />
      <Suspense>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};

export default Layout;
