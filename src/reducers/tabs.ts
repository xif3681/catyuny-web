// import { combineReducers } from "redux"
import { Map } from 'immutable'

import {  Action } from "redux-actions"
import { HomeActionTypes } from "@/constants/actionTypes"
const tabs = {
  count: 0
}


export default (state=Map(tabs), { type, payload }: Action<any>) => {
  switch (type) {
      case HomeActionTypes.INCREMENT:
          return state.merge({
            count: state.get('count') + payload.num + 1
          })
      case HomeActionTypes.DECREMENT:
          return state.merge({
            count: Number(state.get('count')) - 1
          })

      case HomeActionTypes.RESET:
          return state.merge({
            count: 0
          })
      default:
          return state
  }
}
