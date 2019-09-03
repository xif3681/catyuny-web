import { CreateStoreFunction, EnhancerFunction, ReducerFunction } from '../../tsTypes';

const round = (n: number) => Math.round(n * 100) / 100;

const monitorReducersEnhancer = (createStore: CreateStoreFunction) => (
  reducer: ReducerFunction,
  initialState: object,
  enhancer: EnhancerFunction
) => {
  const monitoredReducer = (state: object, action: object) => {
    const start = performance.now();
    const newState = reducer(state, action)
    const end = performance.now();
    const diff = round(end - start);

    console.debug('reducer process time:', diff);

    return newState;
  }

  return createStore(monitoredReducer, initialState, enhancer);
}

export default monitorReducersEnhancer;
