import React from 'react';
import './MiniCartItem.scss';

const MiniCartItem = () => {
  return (
    <div className='mini-cart-item'>
      <div className='img-cart-details'>
        <div className='img-cart-box'>
          <img src='https://picsum.photos/id/1/100/100' alt='imag' />
        </div>
        <p>T-shirt</p>
      </div>
      <div className='price-details'>
        <p className='price'>$ 20,50</p>
        <div className='close'></div>
      </div>
    </div>
  );
};

export default MiniCartItem;
