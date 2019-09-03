import { ActionInterface, CreateStoreFunction, EnhancerFunction, ReducerFunction } from '../../tsTypes';
import { combineReducers } from 'redux';

const RESET_ACTION_TYPE = '@@RESET';

const resetReducerCreator = (reducer: ReducerFunction, resetState: object) => (state: object, action: ActionInterface) => {
  if (action.type === RESET_ACTION_TYPE) {
    return resetState;
  } else {
    return reducer(state, action);
  }
}


const combineLazyReducers = (reducers: ReducerFunction, initialState: object) => {
  initialState = initialState || {};
  const handler = {
    ownKeys(target: object){
      return Array.from(new Set([...Reflect.ownKeys(target), ...Reflect.ownKeys(initialState)]));
    },
    get(target: { [propName: string]: any }, key: string) {
      return target[key] || ((state: object) => state === undefined ? null : state);
    },
    getOwnPropertyDescriptor(target: object, key: string) {
      return Reflect.getOwnPropertyDescriptor(target, key) || Reflect.getOwnPropertyDescriptor(initialState, key);
    }
  };

  return combineReducers(new Proxy(reducers, handler));
}

const resetStore = (createStore: CreateStoreFunction) => (
  reducer: ReducerFunction,
  initialState: object,
  enhancer: EnhancerFunction
) => {

  const store = createStore(reducer, initialState, enhancer);

  const reset = (resetReducer: ReducerFunction, resetState: object) => {
    const nextReducer = combineLazyReducers(resetReducer, resetState || {}) as ReducerFunction;
      store.replaceReducer(resetReducerCreator(nextReducer, resetState));

      store.dispatch({ type: RESET_ACTION_TYPE, state: resetState })
  }

  return {
    reset,
    ...store
  }
}

export default resetStore;
