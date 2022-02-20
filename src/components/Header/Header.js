import React, { useState } from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [search, setSearch] = useState('');

  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted.', search);
  };

  return (
    <div className='header-container'>
      <h2 className='header-logo'>T-Shirt House</h2>
      <ul className='header-list'>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
      </ul>
      <div className='basket'>
        <FontAwesomeIcon icon={faCartShopping} />
        <p>Basket (4)</p>
        <form onSubmit={onFormSubmit}>
          <input
            type='text'
            placeholder='Serach something ...'
            value={search}
            onChange={onSearch}
          />
          <input type='submit' value='search' />
        </form>
      </div>
    </div>
  );
};

export default Header;
