import { COUNTER_INCREMENT } from '../actions/counter';

function counter(state = 0, action) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return state + action.amount;
    default:
      return state;
  }
}

 export default counter;
