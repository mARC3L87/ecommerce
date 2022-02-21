import React from 'react';
import './MiniCart.scss';
import MiniCartItem from '../MiniCartItem/MiniCartItem';
import MiniCartCheck from '../MiniCartCheck/MiniCartCheck';

const MiniCart = ({ setShown }) => {
  return (
    <div onMouseLeave={() => setShown(false)} className='minicart'>
      <MiniCartItem />
      <MiniCartItem />
      <MiniCartItem />
      <MiniCartCheck />
      {/* <MiniCartItem />
      <MiniCartItem />
      <MiniCartItem />
      <MiniCartItem />
      <MiniCartItem />
      <MiniCartItem />
      <MiniCartItem />
      <MiniCartItem />
      <MiniCartItem />
      <MiniCartItem /> */}
    </div>
  );
};

export default MiniCart;
