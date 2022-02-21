import React from 'react';
import './MiniCartCheck.scss';

const MiniCartCheck = () => {
  return (
    <div className='checkout'>
      <div className='subtotal'>
        <p>
          Subtotal: <span>$ 569.98</span>
        </p>
      </div>
      <button className='btn btn-checkout'>CHECKOUT</button>
    </div>
  );
};

export default MiniCartCheck;
