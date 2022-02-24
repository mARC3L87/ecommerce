import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.scss';

const ProductDetails = () => {
  let param = useParams();
  console.log(param);
  return (
    <div>
      <h1>Product Details {param.id}</h1>
    </div>
  );
};

export default ProductDetails;
