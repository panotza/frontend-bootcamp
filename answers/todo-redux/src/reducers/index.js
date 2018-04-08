import { ADD_TODO, DELETE_TODO } from '../actions/todo';

const initState = {
    todos: [
        {
            id: 0,
            text: 'Use Redux'
        }
    ]
};

export default function rootReducer(state = initState, action) {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: action.id,
                        text: action.text
                    }
                ]
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        default:
            return state;
    }
}