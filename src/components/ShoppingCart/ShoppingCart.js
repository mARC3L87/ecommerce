import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './ShoppingCart.scss';
import ShoppingItem from '../ShoppingItem/ShoppingItem';
import ShippingWrapper from '../ShippingWrapper/ShippingWrapper';
import Shipping from '../Shipping/Shipping';
import Payment from '../Payment/Payment';
import EmptyCart from '../EmptyCart/EmptyCart';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

const ShoppingCart = ({ products }) => {
  const [formData, setFormData] = useState();
  const [deliveryOption, setDeliveryOption] = useState();

  if (products.length === 0) {
    return <EmptyCart />;
  }
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
          {products.map((product) => {
            return <ShoppingItem key={product.id} product={product} />;
          })}
        </Row>
        <ShippingWrapper>
          <Shipping
            setFormData={setFormData}
            setDeliveryOption={setDeliveryOption}
          />
        </ShippingWrapper>
        <ShippingWrapper>
          <Payment formData={formData} deliveryOption={deliveryOption} />
        </ShippingWrapper>
      </Container>
    </div>
  );
};

ShoppingCart.propTypes = {
  products: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.products.cart,
});

export default connect(mapStateToProps)(ShoppingCart);
