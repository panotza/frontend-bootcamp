import React, { Component } from 'react';

class Card extends Component {
    showColor = (color) => {
        alert(`this box is ${color}`);
    }
    render() {
        const { color } = this.props;
        const style = { background: color  };
        return (
            <div className="gutter">
                <div
                    className="card-box"
                    style={style}
                    onClick={() => this.showColor(color)}
                />
            </div>
        );
    }
}

export default Card;