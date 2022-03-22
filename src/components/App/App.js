import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import MainLayout from '../MainLayout/MainLayout';
import Header from '../Header/Header';
import Home from '../Home/Home';
import MenProducts from '../MenProducts/MenProducts';
import WomenProducts from '../WomenProducts/WomenProducts';
import About from '../About/About';
import ProductDetails from '../ProductDetails/ProductDetails';
import Products from '../Products/Products';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Footer from '../Footer/Footer,';
import ShoppingLayout from '../ShoppingLayout/ShoppingLayout';
import NotFound from '../NotFound/NotFound';
import Summary from '../Summary/Summary';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <MainLayout>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route index element={<Home />} />
          <Route path='products' element={<Products />}>
            <Route path='men' element={<MenProducts />} />
            <Route path='women' element={<WomenProducts />} />
            <Route path=':id' element={<ProductDetails />} />
          </Route>
          <Route path='about' element={<About />} />
          <Route element={<ShoppingLayout />}>
            <Route path='shoppingcart' element={<ShoppingCart />} />
            <Route path='shoppingcart/summary' element={<Summary />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </MainLayout>
  );
};

export default App;
