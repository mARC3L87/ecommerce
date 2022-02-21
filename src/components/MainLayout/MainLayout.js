import React from 'react';
import './MainLayout.scss';

const MainLayout = ({ children }) => {
  return <div className='main-container'>{children}</div>;
};

export default MainLayout;
