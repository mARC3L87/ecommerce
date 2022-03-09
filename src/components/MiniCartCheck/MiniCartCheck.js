import React from 'react';
import { connect } from 'react-redux';
import { countTotal } from '../../redux/actions/productActions';
import { useNavigate } from 'react-router-dom';
import './MiniCartCheck.scss';

const MiniCartCheck = ({ total }) => {
  console.log(total);
  const navigate = useNavigate();
  const checkout = () => {
    navigate('/shoppingcart');
  };
  return (
    <div className='checkout'>
      <div className='subtotal'>
        <p>Shipping: $ 15,00</p>
        <p>
          Subtotal: <span>$ {total}</span>
        </p>
      </div>
      <button onClick={checkout} className='btn btn-checkout'>
        CHECKOUT
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  total: state.products.total,
});
export default connect(mapStateToProps, { countTotal })(MiniCartCheck);
