import React from 'react';
import { connect } from 'react-redux';
import './ShoppingCart.scss';
import ShoppingItem from '../ShoppingItem/ShoppingItem';
import Shipping from '../Shipping/Shipping';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

const ShoppingCart = ({ products }) => {
  return (
    <div className='shopping-container'>
      <h1>Your Shopping Bag</h1>
      <Container>
        <Row
          style={{ borderBottom: '1px solid #606060', marginBottom: '20px' }}
        >
          <Col sm={6}>
            <div className='col-1'>
              <p>Product</p>
              <p>Description</p>
            </div>
          </Col>
          <Col sm={6}>
            <div className='col-2'>
              <p>Size</p>
              <p>Qty</p>
              <p className='col-2-price'>Price</p>
              <p>Delete</p>
            </div>
          </Col>
        </Row>
        <Row>
          {products.items.map((product) => {
            return <ShoppingItem key={product.id} product={product} />;
          })}
        </Row>
        <Shipping />
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(ShoppingCart);
