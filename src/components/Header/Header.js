import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import MiniCart from '../MiniCart/MiniCart';

const Header = () => {
  const [search, setSearch] = useState('');
  const [isShown, setIsShown] = useState(false);

  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted.', search);
  };

  return (
    <div className='header-container'>
      <Link className='header-logo' to='/'>
        T-Shirt House
      </Link>
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
      <div className='basket'>
        <FontAwesomeIcon icon={faCartShopping} />
        <p onMouseEnter={() => setIsShown(true)}>Basket (4)</p>
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
      </div>
    </div>
  );
};

export default Header;
