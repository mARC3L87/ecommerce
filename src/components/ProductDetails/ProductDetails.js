import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { parsePrice } from '../../utils/utils';
import { addToCart, pickSize } from '../../redux/actions/productActions';
import './ProductDetails.scss';

const ProductDetails = ({ products, filterProduct, addTo, pick }) => {
  console.log(products);
  let param = useParams();
  const product = filterProduct(products.items, param.id);

  const onHandleClick = (e) => {
    pick(product.id, e.target.innerHTML);
  };

  const add = () => {
    if (product.pickedSize.length === 0) {
      console.log('Choose size');
    } else {
      addTo(product.id);
    }
  };
  return (
    <div className='detail-container'>
      <div className='detail-img-box'>
        <img src={product.image} alt={product.product_name} />
      </div>
      <div className='detail-info'>
        <p className='detail-name'>{product.product_name}</p>
        <p className='detail-id'>Product number: {product.id}</p>
        <p className='detail-price'>
          {products.currency}
          {parsePrice(product.price.current_price)}
        </p>
        <p className='detail-description'>{product.description}</p>
      </div>
      <div className='detail-sizes'>
        <p className='size'>Size</p>
        <ul>
          {product.sizes.map((size, index) => {
            return (
              <div key={index}>
                <li
                  className={
                    product.pickedSize.includes(size) ? 'pick' : 'unpick'
                  }
                  onClick={onHandleClick}
                >
                  {size}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
      <button onClick={add} className='btn btn-add'>
        ADD TO CART
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  filterProduct: (products, filterId) =>
    products.find((product) => product.id === parseInt(filterId)),
  addTo: (id) => dispatch(addToCart(id)),
  pick: (id, size) => dispatch(pickSize(id, size)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
