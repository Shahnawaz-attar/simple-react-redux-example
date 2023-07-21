import React, { useReducer } from 'react';
const reducer = (state, action) => {
  switch (action.type) {
    case 'increament':
      return {
        count: state.count + 1,
      };
    case 'decrement':
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      count {state.count}
      <button onClick={() => dispatch({ type: 'increament' })}>Click</button>
    </div>
  );
};

export default Reducer;
