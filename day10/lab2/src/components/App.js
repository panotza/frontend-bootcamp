import React from 'react';
import './App.css';
import CounterContainer from '../containers/CounterContainer';
import ButtonContainer from '../containers/ButtonContainer';

const App = () => (
  <div className="App">
    <CounterContainer />
    <ButtonContainer />
  </div>
);

export default App;
