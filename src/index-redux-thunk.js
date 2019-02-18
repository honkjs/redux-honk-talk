import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { coolApiAction } from './api';

const initialState = {
  count: 0,
};

function counter(state = initialState, action) {
  switch (action.type) {
    case 'INCREASE':
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

const store = createStore(counter, applyMiddleware(thunk.withExtraArgument({ url: 'http://localhost:5000' })));

function increase(amount) {
  return (dispatch, getState, { url }) => {
    coolApiAction(url).then(() => {
      dispatch({ type: 'INCREASE', payload: amount });
    });
  };
}

const unsub = store.subscribe(() => console.log('Redux', store.getState()));

store.dispatch(increase(1));

store.dispatch(increase(5));

// unsub();
