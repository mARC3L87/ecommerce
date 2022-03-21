import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { parsePrice, countPrice } from '../../utils/utils';
import './Summary.scss';

const Summary = ({
  products: {
    shipping,
    cart,
    total,
    formValues: {
      formData: { firstname, lastname, address, postal, city, phone, email },
      deliveryOption,
      paymentMethod,
    },
  },
}) => {
  return (
    <div className='summary-container'>
      <h1>Thank you for your order.</h1>
      <Container>
        <Row>
          <div>
            {cart.map((product) => {
              return (
                <Col sm={12}>
                  <div className='summary-details'>
                    <img src={product.image} alt={product.product_name} />
                    <p>
                      <span>Name:</span> {product.product_name}
                    </p>
                    {product.pickedSize.map((pick) => {
                      return (
                        <p>
                          <span>Size:</span> {pick}
                        </p>
                      );
                    })}
                    <p>
                      <span>Quantity:</span> {product.qty}
                    </p>
                    <p>
                      <span>Price:</span> $
                      {parsePrice(
                        countPrice(product.price.current_price, product.qty)
                      )}
                    </p>
                  </div>
                </Col>
              );
            })}
          </div>
          <div className='summary-payment'>
            <p>Shipping cost: ${parsePrice(shipping)}</p>
            <p>Total: ${parsePrice(total)}</p>
          </div>
          <div className='summary-delivery'>
            <h4>Delivery address</h4>
            <p>
              {firstname} {lastname}
            </p>
            <p>{address}</p>
            <p>
              {city} {postal}
            </p>
            <p>
              <span>Phone:</span> {phone}
            </p>
            <p>
              <span>E-mail:</span> {email}
            </p>
          </div>
          <div className='summary-delivery'>
            <p>
              <span>Shipping method:</span> {deliveryOption}
            </p>
            <p>
              <span>Payment method:</span> {paymentMethod}
            </p>
          </div>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(Summary);
