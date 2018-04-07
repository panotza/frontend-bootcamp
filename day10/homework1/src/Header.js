import React from 'react';
import TodoTextInput from './TodoTextInput';

const Header = ({ onSave }) => (
  <header className="header">
    <h1>todos</h1>
    <TodoTextInput onSave={onSave} />
  </header>
);

export default Header;
