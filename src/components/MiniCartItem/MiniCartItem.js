import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeFromCart, countTotal } from '../../redux/actions/productActions';
import './MiniCartItem.scss';

const MiniCartItem = ({ item, removeFromCart, countTotal }) => {
  const remove = () => {
    removeFromCart(item.id);
    countTotal();
  };
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
        <div onClick={remove} className='close'></div>
      </div>
    </div>
  );
};

MiniCartItem.propTypes = {
  item: PropTypes.object.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default connect(null, { removeFromCart, countTotal })(MiniCartItem);
