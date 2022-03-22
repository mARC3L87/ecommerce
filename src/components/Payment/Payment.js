import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
    const { firstname, lastname, address, city, postal, email, phone } =
      formData;
    if (
      firstname === '' ||
      lastname === '' ||
      address === '' ||
      city === '' ||
      postal === '' ||
      email === '' ||
      phone === ''
    ) {
      console.log('All fields are required.');
    } else {
      orderCart(form);
      navigate('/shoppingcart/summary');
    }
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

Payment.propTypes = {
  total: PropTypes.number.isRequired,
  shipping: PropTypes.number.isRequired,
  formData: PropTypes.object,
  deliveryOption: PropTypes.string,
  payment: PropTypes.array.isRequired,
  orderCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  total: state.products.total,
  shipping: state.products.shipping,
  payment: state.products.payment,
});
export default connect(mapStateToProps, { orderCart })(Payment);
