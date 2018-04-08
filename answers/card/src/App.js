import React, { Component } from 'react';
import Card from './Card';
import './App.css';

const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

const colors = [
  { id: 1, color: 'red' },
  { id: 2, color: 'red' },
  { id: 3, color: 'blue' },
  { id: 4, color: 'blue' },
  { id: 5, color: 'green' },
  { id: 6, color: 'green' },
  { id: 7, color: 'purple' },
  { id: 8, color: 'purple' },
  { id: 9, color: 'pink' },
  { id: 10, color: 'pink' }
];

class App extends Component {
  state = {
    colors: shuffle(colors)
  };

  handleClick = () => {
    this.setState({
      colors: shuffle(colors)
    });
  }

  render() {
    const { colors } = this.state;
    const cards = colors.map(c =>
      <Card key={c.id} color={c.color}/>
    );
    return (
      <div>
        <div className="container">
          {cards}
        </div>
        <div style={{ marginTop: 20, textAlign: 'center' }}>
        <button
          onClick={this.handleClick}
          className="new-deck"
        >
          New Deck
        </button>        
        </div>
      </div>
    );
  }
}

export default App;
