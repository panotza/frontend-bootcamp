import React from 'react';
import { Table } from 'reactstrap';

const MyCart = ({ cart }) => (
  <div>
    <h2>My Cart</h2>
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
      {cart.items.map(item => (
        <tr key={item.product.id}>
          <th scope="row">{item.product.id}</th>
          <td>{item.product.title}</td>
          <td>{item.product.price}</td>
          <td>{item.quantity}</td>
          <td>{item.sumPrice}</td>
        </tr>
      ))}
      <tr>
        <th scope="row"></th>
        <td>Total</td>
        <td></td>
        <td>{cart.totalQuantity}</td>
        <td>{cart.totalPrice}</td>
      </tr>
      </tbody>
    </Table>
  </div>
);

export default MyCart;
