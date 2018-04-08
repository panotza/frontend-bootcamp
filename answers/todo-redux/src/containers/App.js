import React from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo } from '../actions/todo';
import Header from '../components/Header';
import TodoList from '../components/TodoList';

const App = ({ todos, addTodo, deleteTodo }) => {
  return (
    <div>
      <Header onSave={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo}/>
    </div>
  );
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = {
  addTodo,
  deleteTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
