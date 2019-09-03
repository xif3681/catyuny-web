
interface StoreInterface {
  getState: () => void;
}

interface ActionInterface {
  type: string;
}

type NextFunction = (action: ActionInterface) => any;

const logger = (store: StoreInterface) => (next: NextFunction) => (action: ActionInterface) => {
  if (!action.type) { return next(action) }
  console.group(action.type);
  console.info('pre state', store.getState());
  console.info('dispatching', action);
  const result = next(action);
  console.info('next state', store.getState());
  console.groupEnd();
  return result;
}

export default logger;
