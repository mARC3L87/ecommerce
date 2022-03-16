import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './Shipping.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Shipping = ({ setFormData, delivery, setOption }) => {
  const [formInputs, setFormInputs] = useState({
    firstname: '',
    lastname: '',
    address: '',
    city: '',
    postal: '',
    phone: '',
    email: '',
  });
  const [selected, setSelected] = useState('');

  useEffect(() => {
    setFormData(formInputs);
    setOption(selected);
  }, [formInputs, setFormData, selected, setOption]);
  const { firstname, lastname, address, city, postal, phone, email } =
    formInputs;

  const onInputChange = (e) =>
    setFormInputs({ ...formInputs, [e.target.name]: e.target.value });

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
                {delivery.map((option, index) => {
                  return (
                    <option
                      onClick={setSelected(option)}
                      key={index}
                      value={option}
                    >
                      {option}
                    </option>
                  );
                })}
              </select>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='firstname flexible'>
              <label htmlFor='firstname'>FIRST NAME</label>
              <input
                id='firstname'
                name='firstname'
                type='text'
                value={firstname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </Col>
          <Col>
            <div className='lastname flexible'>
              <label htmlFor='lastname'>LAST NAME</label>
              <input
                id='lastname'
                name='lastname'
                type='text'
                value={lastname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className='address flexible'>
              <label htmlFor='address'>ADDRESS</label>
              <input
                id='address'
                name='address'
                type='text'
                value={address}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='city flexible'>
              <label htmlFor='city'>CITY</label>
              <input
                id='city'
                name='city'
                type='text'
                value={city}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </Col>
          <Col>
            <div className='postal flexible'>
              <label htmlFor='postal'>POSTAL CODE</label>
              <input
                id='postal'
                name='postal'
                type='text'
                value={postal}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='phone flexible'>
              <label htmlFor='phone'>PHONE NUMBER</label>
              <input
                id='phone'
                name='phone'
                type='number'
                value={phone}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </Col>
          <Col>
            <div className='email flexible'>
              <label htmlFor='email'>E-MAIL</label>
              <input
                id='email'
                name='email'
                type='email'
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  delivery: state.products.delivery,
});

export default connect(mapStateToProps)(Shipping);
