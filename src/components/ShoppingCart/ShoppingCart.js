import React from 'react';
import { connect } from 'react-redux';
import './ShoppingCart.scss';
import ShoppingItem from '../ShoppingItem/ShoppingItem';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

const ShoppingCart = ({ products }) => {
  return (
    <div className='shopping-container'>
      <h1>Your Shopping Bag</h1>
      <Container>
        <Row>
          <Col sm={6}>
            <div className='col-1'>
              <p>Product</p>
              <p>Description</p>
            </div>
          </Col>
          <Col sm={6}>
            <div className='col-2'>
              <p>Color</p>
              <p>Size</p>
              <p>Qty</p>
              <p>Amount</p>
              <p>Delete</p>
            </div>
          </Col>
        </Row>
        <Row>
          {products.items.map((product) => {
            return <ShoppingItem key={product.id} product={product} />;
          })}
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(ShoppingCart);
