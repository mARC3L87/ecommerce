import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/productActions';
import './MiniCartItem.scss';

const MiniCartItem = ({ item, removeFromCart }) => {
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
        <div onClick={() => removeFromCart(item.id)} className='close'></div>
      </div>
    </div>
  );
};

export default connect(null, { removeFromCart })(MiniCartItem);
