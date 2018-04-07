import React, { Component } from 'react';

export default class TodoTextInput extends Component {
  state = {
    text: ''
  }

  handleSubmit = e => {
    const text = e.target.value.trim();
    if (!text) return;
    if (e.which === 13) {
      this.props.onSave(text);
      this.setState({ text: '' });
    }
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <input
        className="new-todo"
        type="text"
        placeholder="What needs to be done?"
        value={this.state.text}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit} />
    )
  }
}
