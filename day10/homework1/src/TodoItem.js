import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    const { todo, onDelete } = this.props;
    return (
      <li>
        <div className="view">
          <label>
            {todo.text}
          </label>
          <button className="destroy" onClick={() => onDelete(todo.id)} />
        </div>
      </li>
    )
  }
}
