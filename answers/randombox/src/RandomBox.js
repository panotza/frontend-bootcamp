import React from 'react';
import './RandomBox.css';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

const RandomBox = () => {
  const backgroundColor = ['red', 'blue', 'green', 'purple', 'pink'][getRandomIntInclusive(0, 4)];
  const style = {
    backgroundColor,
    fontSize: Math.floor(getRandomIntInclusive(20, 40))
  };
  return (
    <div className="box" style={style}>
      Random Box
    </div>
  );
}

export default RandomBox;
