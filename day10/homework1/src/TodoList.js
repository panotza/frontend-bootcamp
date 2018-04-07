import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete }) => (
  <section className="main">
    <ul className="todo-list">
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />)}
    </ul>
  </section>
);

export default TodoList;
