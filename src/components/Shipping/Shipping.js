import React from 'react';
import './Shipping.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Shipping = () => {
  return (
    <div className='shipping-container'>
      <Container>
        <Row>
          <Col>
            <h1>SHIPPING ADDRESS</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <label htmlFor='delivery'>SELECT DELIVERY METHOD</label>
            <select id='delivery'>
              <option value='dhl'>DHL</option>
              <option value='ups'>UPS</option>
              <option value='dpd'>DPD</option>
              <option value='inpost'>InPost</option>
            </select>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shipping;
