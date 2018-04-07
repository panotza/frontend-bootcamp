// Function สร้าง Redux Store ---------------------
function createStore(reducer) {
  let currentState;
  let currentListener = [];

  function getState() {
    return currentState;
  }

  function dispatch(action) {
    currentState = reducer(currentState, action);

    currentListener.forEach(listener => {
      listener();
    });
  }

  function subscribe(listener) {
    currentListener.push(listener);
  }

  // ตอนสร้าง store เสร็จ เราจะ dispatch type ชื่อ INIT
  // เพื่อให้ reducer คืนค่า initial state กลับมา
  dispatch({ type: 'INIT' });

  return {
    getState,
    dispatch,
    subscribe
  }
}
