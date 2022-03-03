import React from 'react';
import './Payment.scss';

const Payment = () => {
  return (
    <div className='payment-container'>
      <h1>PAYMENT OPTIONS</h1>
      <div className='subtotal-box'>
        <p>Subtotal: $567.93</p>
        <p>Shipping: $15.00</p>
        <p>Total: $567.93</p>
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

export default Payment;
