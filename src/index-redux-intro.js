import { createStore } from 'redux';

const initialState = {
  count: 0,
};

// changes are made with pure functions
function counter(state = initialState, action) {
  switch (action.type) {
    case 'INCREASE':
      // state is read-only (immutable)
      return {
        ...state,
        count: state.count + action.payload,
      };
    case 'DECREASE':
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
}

// the store is the single source of truth
const store = createStore(counter);

const unsub = store.subscribe(() => console.log('Redux', store.getState()));

// the only way to change state is to emit an 'action'
store.dispatch({ type: 'INCREASE', payload: 1 });

store.dispatch({ type: 'INCREASE', payload: 2 });

store.dispatch({ type: 'DECREASE', payload: 3 });

unsub();
