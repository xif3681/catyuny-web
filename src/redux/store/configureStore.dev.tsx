import { applyMiddleware, createStore, Middleware, StoreCreator } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import monitorReducersEnhancer from '../enhancers/monitorReducers';
import resetStoreEnhacer from '../enhancers/resetStore';
import loggerMiddleware from '../middlewares/logger';
import rootReducer from 'src/redux/rootReducer';
import { combineReducers } from 'redux';
import { StoreInterface } from 'src/tsTypes';

const configureStore = (preloadedState: object) => {
  const middlewaresEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware as Middleware);

  const composedEnhancers = composeWithDevTools(middlewaresEnhancer, monitorReducersEnhancer as StoreCreator, resetStoreEnhacer as StoreCreator);

  const store: StoreInterface = createStore(rootReducer, preloadedState, composedEnhancers);
  store._reducer = rootReducer;

  if (module.hot) {
    module.hot.accept('@/redux/rootReducer', () => store.replaceReducer(rootReducer));
  }

  return store;
}

export default configureStore;
