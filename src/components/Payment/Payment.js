import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { orderCart } from '../../redux/actions/productActions';
import { parsePrice } from '../../utils/utils';
import './Payment.scss';

const Payment = ({
  total,
  shipping,
  formData,
  deliveryOption,
  payment,
  orderCart,
}) => {
  const [paymentMethod, setPaymentMethod] = useState('CREDIT CARD');

  const form = {
    formData,
    deliveryOption,
    paymentMethod,
    total,
  };
  const navigate = useNavigate();
  const order = () => {
    orderCart(form);
    navigate('/shoppingcart/summary');
  };
  return (
    <div className='payment-container'>
      <h1>PAYMENT OPTIONS</h1>
      <div className='subtotal-box'>
        <p>Subtotal: ${parsePrice(total - shipping)}</p>
        <p>Shipping: ${parsePrice(shipping)}</p>
        <p>Total: ${parsePrice(total)}</p>
      </div>
      <div className='payment-box'>
        <label htmlFor='payment-method'>SELECT PAYMENT METHOD</label>
        <select
          id='payment-method'
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          {payment.map((option, index) => {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            );
          })}
        </select>
        <button onClick={order} className='btn btn-order'>
          ORDER NOW
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  total: state.products.total,
  shipping: state.products.shipping,
  payment: state.products.payment,
});
export default connect(mapStateToProps, { orderCart })(Payment);
