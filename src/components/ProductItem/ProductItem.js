import React from 'react';
import { Link } from 'react-router-dom';
import { parsePrice } from '../../utils/utils';
import './ProductItem.scss';

const ProductItem = ({ item, currency }) => {
  return (
    <div className='product-item-container'>
      <div className='product-img-box'>
        <Link to={`/products/${item.id}`}>
          <img
            className='product-img'
            src={item.image}
            alt={item.product_name}
          />
        </Link>
      </div>
      <p className='product-name'>{item.product_name}</p>
      <p className='product-price'>
        {currency} {parsePrice(item.price.current_price)}
      </p>
    </div>
  );
};

export default React.memo(ProductItem);
