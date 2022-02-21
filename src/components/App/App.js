import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import MainLayout from '../MainLayout/MainLayout';
import Header from '../Header/Header';
import Home from '../Home/Home';
import MenProducts from '../MenProducts/MenProducts';
import WomenProducts from '../WomenProducts/WomenProducts';
import About from '../About/About';

const App = () => {
  return (
    <MainLayout>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='men' element={<MenProducts />} />
          <Route path='women' element={<WomenProducts />} />
          <Route path='about' element={<About />} />
        </Routes>
      </Router>
    </MainLayout>
  );
};

export default App;
