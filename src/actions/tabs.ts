import { Dispatch } from "redux"
import { createAction } from "redux-actions"
import { HomeActionTypes } from "../constants/actionTypes"


export const increment = () => (dispatch: Dispatch) => {
  dispatch(createAction(HomeActionTypes.INCREMENT)({num: 2}))
}
export const decrement = () => (dispatch: Dispatch) => {
  dispatch(createAction(HomeActionTypes.DECREMENT)())
}
export const reset = () => (dispatch: Dispatch) => {
  dispatch(createAction(HomeActionTypes.RESET)())
}
export const handleClick = (e: any) => (dispatch: Dispatch) => {
  dispatch(createAction(HomeActionTypes.TABCURRENT)(e))
}
