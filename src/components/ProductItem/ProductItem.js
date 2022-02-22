import React from 'react';
import './ProductItem.scss';

const ProductItem = ({ item }) => {
  return (
    <div className='product-item-container'>
      <div className='product-img-box'>
        <img className='product-img' src={item.image} alt={item.product_name} />
      </div>
      <p className='product-name'>{item.product_name}</p>
      <p className='product-price'>{item.price.current_price}</p>
    </div>
  );
};

export default ProductItem;
