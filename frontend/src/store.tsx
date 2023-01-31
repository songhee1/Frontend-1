import { legacy_createStore as createStore, legacy_createStore } from 'redux';

const reducer = (state = 0) => {
  return state;
};
export const store = legacy_createStore(reducer);
