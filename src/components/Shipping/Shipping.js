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
          <Col xs={12}>
            <div className='delivery flexible'>
              <label htmlFor='delivery'>SELECT DELIVERY METHOD</label>
              <select id='delivery'>
                <option value='dhl'>DHL</option>
                <option value='ups'>UPS</option>
                <option value='dpd'>DPD</option>
                <option value='inpost'>InPost</option>
              </select>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='firstname flexible'>
              <label htmlFor='firstname'>FIRST NAME</label>
              <input id='firstname' name='firstname' type='text' />
            </div>
          </Col>
          <Col>
            <div className='lastname flexible'>
              <label htmlFor='lastname'>LAST NAME</label>
              <input id='lastname' name='lastname' type='text' />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className='address flexible'>
              <label htmlFor='address'>ADDRESS</label>
              <input id='address' name='address' type='text' />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='city flexible'>
              <label htmlFor='city'>CITY</label>
              <input id='city' name='city' type='text' />
            </div>
          </Col>
          <Col>
            <div className='postal flexible'>
              <label htmlFor='postal'>POSTAL CODE</label>
              <input id='postal' name='postal' type='number' />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='phone flexible'>
              <label htmlFor='phone'>PHONE NUMBER</label>
              <input id='phone' name='phone' type='number' />
            </div>
          </Col>
          <Col>
            <div className='email flexible'>
              <label htmlFor='email'>E-MAIL</label>
              <input id='email' name='email' type='email' />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shipping;
