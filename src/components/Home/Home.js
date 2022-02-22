import React from 'react';
import { connect } from 'react-redux';
import './Home.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProductItem from '../ProductItem/ProductItem';

const Home = ({ products }) => {
  console.log(products);
  return (
    <div className='home-container'>
      <h1>T-Shirts</h1>
      <Container>
        <Row xs='auto' sm={2} md={3} xxl={4}>
          {products.items.map((item) => {
            return <ProductItem item={item} key={item.id} />;
          })}
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(Home);
