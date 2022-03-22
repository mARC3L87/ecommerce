import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  removeFromCart,
  countTotal,
  increment,
  decrement,
  onCount,
} from '../../redux/actions/productActions';
import { parsePrice, countPrice } from '../../utils/utils';
import '../ShoppingItem/ShoppingItem.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ShoppingItem = ({
  product,
  removeFromCart,
  countTotal,
  increment,
  decrement,
  onCount,
}) => {
  const [count, setCount] = useState(product.qty);

  const onChangeCount = (e) => {
    const re = /\b([1-9]|10)\b/;
    if (re.test(e.target.value) || e.target.value === '') {
      onCount(product.id, parseInt(e.target.value) || '');
      setCount(product.qty);
      countTotal();
    }
  };

  const increase = () => {
    if (product.qty >= 10) {
      return;
    }
    increment(product.id);
    countTotal();
    setCount(product.qty);
  };

  const decrease = () => {
    if (product.qty <= 1) {
      return;
    }
    decrement(product.id);
    countTotal();
    setCount(product.qty);
  };

  const remove = () => {
    removeFromCart(product.id);
    countTotal();
  };
  return (
    <Container>
      <Row bsPrefix='row border-bottom'>
        <Col sm={6}>
          <div className='col-1'>
            <div className='shopping-img-box'>
              <img src={product.image} alt={product.product_name} />
            </div>
            <div className='shopping-description'>
              <p>{product.product_name}</p>
              <p>Product number: {product.id}</p>
            </div>
          </div>
        </Col>
        <Col sm={6} style={{ display: 'flex', alignItems: 'center' }}>
          <div className='col-2'>
            <div className='product-size'>
              {product.pickedSize.map((size) => {
                return <p key={size}>{size}</p>;
              })}
            </div>

            <div className='qty-box'>
              <button onClick={() => decrease()} className='btn btn-minus'>
                -
              </button>
              <input type='text' value={count} onChange={onChangeCount} />
              <button onClick={() => increase()} className='btn btn-plus'>
                +
              </button>
            </div>
            <p>
              $
              {parsePrice(countPrice(product.price.current_price, product.qty))}
            </p>
            <div onClick={remove} className='close'></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

ShoppingItem.propTypes = {
  product: PropTypes.object.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  countTotal: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

export default connect(null, {
  removeFromCart,
  countTotal,
  increment,
  decrement,
  onCount,
})(ShoppingItem);
