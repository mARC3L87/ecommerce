import React from 'react';
import { connect } from 'react-redux';
import './MiniCart.scss';
import MiniCartItem from '../MiniCartItem/MiniCartItem';
import MiniCartCheck from '../MiniCartCheck/MiniCartCheck';

const MiniCart = ({ setShown, cart }) => {
  console.log(cart);
  return (
    <div onMouseLeave={() => setShown(false)} className='minicart'>
      {cart.map((item) => (
        <div key={item.id}>
          <MiniCartItem item={item} />
        </div>
      ))}
      <MiniCartCheck />
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.products.cart,
});

export default connect(mapStateToProps)(MiniCart);
