import { applyMiddleware, compose, createStore, StoreCreator } from 'redux';
import thunkMiddleware from 'redux-thunk';

import resetStoreEnhacer from '../enhancers/resetStore';

import rootReducer from 'src/redux/rootReducer';
import { combineReducers } from 'redux';

const configureStore = (preloadedState: object) => {
  const middlewaresEnhancer = applyMiddleware(thunkMiddleware);
  const composedEnhancers = compose(middlewaresEnhancer, resetStoreEnhacer);

  const store: any = createStore(rootReducer, preloadedState, composedEnhancers as StoreCreator);
  store._reducer = rootReducer;

  return store;
}

export default configureStore;
