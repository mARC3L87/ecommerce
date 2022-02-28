import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import './ProductDetails.scss';

const ProductDetails = ({ products, filterProduct }) => {
  console.log(products);
  let param = useParams();
  const product = filterProduct(products.items, param.id);
  return (
    <div className='detail-container'>
      <div className='detail-img-box'>
        <img src={product.image} alt={product.product_name} />
      </div>
      <div className='detail-info'>
        <p className='detail-name'>{product.product_name}</p>
        <p className='detail-id'>Product number: {product.id}</p>
        <p className='detail-price'>{`${products.currency}${product.price.current_price}`}</p>
        <p className='detail-description'>{product.description}</p>
      </div>
      <div className='detail-sizes'>
        <p className='size'>Size</p>
        <ul>
          {product.sizes.map((size) => {
            return <li key={size}>{size}</li>;
          })}
        </ul>
      </div>
      <button className='btn btn-add'>ADD TO CART</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  filterProduct: (products, filterId) =>
    products.find((product) => product.id === parseInt(filterId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
