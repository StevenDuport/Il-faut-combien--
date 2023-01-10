import { legacy_createStore as createStore, applyMiddleware } from 'redux';
// Import Reducer
import rootReducer from '../reducers';

const store = createStore(
  // reducer
  rootReducer,
);

export default store;
