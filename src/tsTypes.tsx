export interface StoreInterface {
  _reducer?: object;
  [propName: string]: any;
}
export interface ActionInterface {
  type: string;
  [propName: string]: any;
}
export type CreateStoreFunction = (m: object, i: object, e: object) => any;
export type ReducerFunction = (state: object, action: object) => any;
export type EnhancerFunction = () => any;
export type DispatchFunction = (o: any) => any;

export interface ObjectInterface {
  [propName: string]: any;
}