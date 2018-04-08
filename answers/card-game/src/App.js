import React, { Component } from 'react';
import Card from './Card';
import './App.css';

const cardState = {
  hidden: 0,
  showing: 1,
  matched: 2
}

// shuffle array
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

// return card array
// n = number of card per color
function makeCard(n) {
  const colors = ['red', 'blue', 'green', 'purple', 'pink'];
  const cards = [];
  let id = 0;
  for (let color of colors) {
    for(let i = 0; i < n; i += 1) {
      cards.push({ id, color, state: cardState.hidden });
      id += 1;
    }
  }
  return cards;
}

class App extends Component {
  state = {
    cards: shuffle(makeCard(2)),
    noClick: false,
  }

  newDeck = () => {
    const cards = this.state.cards.map(c => ({ ...c, state: cardState.hidden }));
    this.setState({
      noClick: false,
      cards: shuffle(cards)
    });
  }

  flipCard = (id) => {
    // หาการ์ดที่เลือกใน array ด้วย id
    const selectedCard = this.state.cards.find(c => c.id === id);
    // ถ้าถูกห้ามคลิก หรือ ถ้า state ของการ์ดที่เลือกไม่ใช่ hidden ให้ออกจากฟังค์ชั่น
    if (this.state.noClick || selectedCard.state !== cardState.hidden) return;
    // เปลี่ยน state ของการ์ดที่เลือกให้เป็น showing
    let cards = this.changeCardState(this.state.cards, [id], cardState.showing);
    // หาการ์ดที่กำลังโชว์อยู่
    const showingCards = cards.filter((c) => c.state === cardState.showing);
    // เก็บไอดีการ์ดที่โชว์ไว้
    const ids = showingCards.map(c => c.id);
    // ตรวจสีการ์ดที่โชว์อยู่
    // ถ้าตรงให้เปลี่ยน state ของการ์ดเป็น matched
    if (showingCards.length === 2 && showingCards[0].color === showingCards[1].color) {
      cards = this.changeCardState(cards, ids, cardState.matched);
    } else if (showingCards.length === 2) {
      // ถ้าเปิดอยู่สองใบแต่ไม่ตรง ให้ห้ามคลิกและ delay ปิดการ์ด 1 วินาที
      let willHideCards = this.changeCardState(cards, ids, cardState.hidden);
      this.setState({ cards, noClick: true }, () => {
        setTimeout(() => {
          this.setState({cards: willHideCards, noClick: false}); //ปิดการ์ดและอนุญาตให้คลิกเล่นต่อ
        }, 1000);
      });
      return;
    }
    // setState การ์ดที่ผ่านเงื่อนไขด้านบน
    this.setState({ cards, noClick: false });
  }

  changeCardState = (cards, ids, newState) => {
    return cards.map(c => (
      ids.includes(c.id)
      ? { ...c, state: newState }
      : c
    ));
  }

  render() {
    return (
      <div>
        <div className="container">
          {this.state.cards.map(c =>
            <Card
              key={c.id}
              show={c.state !== cardState.hidden}
              card={c}
              onFlip={this.flipCard}
            />
          )}
        </div>
        <div>
          <button onClick={this.newDeck} style={{ display: 'block', margin: 'auto' }}>new deck</button>
        </div>
      </div>
    );
  }
}

export default App;
