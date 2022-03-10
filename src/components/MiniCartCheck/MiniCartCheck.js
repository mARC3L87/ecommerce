import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { countTotal } from '../../redux/actions/productActions';
import { useNavigate } from 'react-router-dom';
import { parsePrice } from '../../utils/utils';
import './MiniCartCheck.scss';

const MiniCartCheck = ({ total }) => {
  const navigate = useNavigate();
  const checkout = () => {
    navigate('/shoppingcart');
  };
  return (
    <div className='checkout'>
      <div className='subtotal'>
        <p>Shipping: $ 15,00</p>
        <p>
          Subtotal: <span>$ {parsePrice(total)}</span>
        </p>
      </div>
      <button onClick={checkout} className='btn btn-checkout'>
        CHECKOUT
      </button>
    </div>
  );
};

MiniCartCheck.propTypes = {
  total: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  total: state.products.total,
});
export default connect(mapStateToProps, { countTotal })(MiniCartCheck);
