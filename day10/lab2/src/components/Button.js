import React from 'react';

const Button = (props) => (
  <button onClick={() => props.incrementBy(2)}>increment</button>
);

export default Button;
