import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { show, card, onFlip } = this.props;
    return (
      <div className="gutter">
        <div
          className="card"
          style={{ backgroundColor: show ? card.color : 'grey' }}
          onClick={() => onFlip(card.id)}
        />
      </div>
    );
  }
}

export default Card;
