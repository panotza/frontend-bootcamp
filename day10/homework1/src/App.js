import React, { Component } from 'react';
import Header from './Header';
import TodoList from './TodoList';

class App extends Component {
  state = {
    todos: [
      {
        id: 0,
        text: 'Use Redux'
      }
    ]
  }

  addTodo = (text) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: this.state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          text
        }
      ]
    });
  }

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <Header onSave={this.addTodo} />
        <TodoList todos={todos} onDelete={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
