import React from 'react';
import { Row, Col } from 'reactstrap';
import ProductItem from './ProductItem';

const ProductList = ({
  products,
  addCart
}) => (
  <Row>
  {products.map(product => (
    <Col key={product.id}>
      <ProductItem product={product} addCart={addCart}/>
    </Col>
  ))}
  </Row>
);

export default ProductList;
