import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import MiniCart from '../MiniCart/MiniCart';
import HamburgerMenu from './HamburgerMenu';

const Header = ({ cart }) => {
  const [search, setSearch] = useState('');
  const [isShown, setIsShown] = useState(false);

  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted.', search);
  };

  const menu = (
    <ul className='header-list'>
      <Link to='products/men'>
        <li>Men</li>
      </Link>
      <Link to='products/women'>
        <li>Women</li>
      </Link>
      <Link to='about'>
        <li>About</li>
      </Link>
    </ul>
  );
  return (
    <div className='header-container'>
      <Link className='header-logo' to='/'>
        T-Shirt House
      </Link>
      {menu}
      <div className='basket'>
        <FontAwesomeIcon icon={faCartShopping} />
        <p onMouseEnter={() => setIsShown(true)}>Basket ({cart.length})</p>
        {isShown && <MiniCart setShown={setIsShown} />}
        <form onSubmit={onFormSubmit}>
          <input
            type='text'
            placeholder='Serach something ...'
            value={search}
            onChange={onSearch}
          />
          <button className='btn btn-search' type='submit'>
            {' '}
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
        <div className='active'>
          <HamburgerMenu placement={'end'} menu={menu} />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  cart: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.products.cart,
});
export default connect(mapStateToProps)(Header);
