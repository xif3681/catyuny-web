import User from './user';
export interface GlobalState {
  [key: string]: any
  common: User
}
