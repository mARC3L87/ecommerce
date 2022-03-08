import React from 'react';
import './MiniCartItem.scss';

const MiniCartItem = ({ item }) => {
  console.log(item);
  return (
    <div className='mini-cart-item'>
      <div className='img-cart-details'>
        <div className='img-cart-box'>
          <img src={item.image} alt='imag' />
        </div>
        <p>{item.product_name}</p>
      </div>
      <div className='price-details'>
        <p className='price'>{item.price.current_price}</p>
        <div className='close'></div>
      </div>
    </div>
  );
};

export default MiniCartItem;
