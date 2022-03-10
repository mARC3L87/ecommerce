import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { countTotal } from '../../redux/actions/productActions';
import './MiniCart.scss';
import MiniCartItem from '../MiniCartItem/MiniCartItem';
import MiniCartCheck from '../MiniCartCheck/MiniCartCheck';

const MiniCart = ({ setShown, cart, countTotal }) => {
  useEffect(() => {
    countTotal();
  }, [countTotal]);
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

MiniCart.propTypes = {
  setShown: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.products.cart,
});

export default connect(mapStateToProps, { countTotal })(MiniCart);
