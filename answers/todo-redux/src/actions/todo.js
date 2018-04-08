export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

let id = 1;
export const addTodo = (text) => {
    return { type: ADD_TODO, id: id++, text };
}

export const deleteTodo = (id) => {
    return { type: DELETE_TODO, id };
}