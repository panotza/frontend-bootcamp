import { COUNTER_INCREMENT } from '../actions/counter';
// import todos from './todos';
// import counter from './counter';

function rootReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return { ...state, count: state.count + action.amount };
    default:
      return state;
  }
 }

export default rootReducer;

// export default combineReducers({
//   todos, // มีค่าเท่ากับ todos: todos
//   count: counter
//  });
