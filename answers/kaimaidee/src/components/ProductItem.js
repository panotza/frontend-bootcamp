import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';

const ProductItem = ({
  product,
  addCart
}) => (
  <Card style={{ marginBottom: 15 }}>
    <CardImg top width="100%" src={product.img} alt={product.title} />
    <CardBody>
      <CardTitle>{product.title}</CardTitle>
      <CardText>Price: {product.price}</CardText>
      <Button color="success" onClick={() => addCart(product.id)}>Add Cart</Button>
    </CardBody>
  </Card>
);

export default ProductItem;
