import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/productActions';
import '../ShoppingItem/ShoppingItem.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ShoppingItem = ({ product, removeFromCart }) => {
  const [count, setCount] = useState(0);

  const onCount = (e) => {
    setCount(e.target.value);
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
            <p>M</p>
            <div className='qty-box'>
              <button className='btn btn-minus'>-</button>
              <input type='text' value={count} onChange={onCount} />
              <button className='btn btn-plus'>+</button>
            </div>
            <p>${product.price.current_price}</p>
            <div
              onClick={() => removeFromCart(product.id)}
              className='close'
            ></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

ShoppingItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default connect(null, { removeFromCart })(ShoppingItem);
