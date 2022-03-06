import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-box'>
        <h2>Collection</h2>
        <ul>
          <Link to='products/women'>
            <li>Women</li>
          </Link>
          <Link to='products/men'>
            <li>Men</li>
          </Link>
          <li>Comming Soon</li>
        </ul>
      </div>
      <div className='footer-box'>
        <h2>Site</h2>
        <ul>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Copyright Policy</li>
          <li>Press Kit</li>
          <li>Support</li>
        </ul>
      </div>
      <div className='footer-box'>
        <h2>Shop</h2>
        <ul>
          <Link to='about'>
            <li>About us</li>
          </Link>
          <li>Shipping Methods</li>
          <li>Career</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className='footer-box'>
        <h2>Social</h2>
        <p>2022 &copy; All rights reserved</p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faTwitter} />
          </li>
          <li>
            <FontAwesomeIcon icon={faFacebookF} />
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
