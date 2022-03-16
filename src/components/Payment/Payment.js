import React from 'react';
import { connect } from 'react-redux';
import { parsePrice } from '../../utils/utils';
import './Payment.scss';

const Payment = ({ total, shipping, formData, option }) => {
  console.log(formData);
  console.log(option);
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
        <select id='payment-method'>
          <option value='credit'>Credit Card</option>
          <option value='debit'>Debit Card</option>
          <option value='transfer'>Bank Transfer</option>
        </select>
        <button className='btn btn-order'>ORDER NOW</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  total: state.products.total,
  shipping: state.products.shipping,
});
export default connect(mapStateToProps)(Payment);
