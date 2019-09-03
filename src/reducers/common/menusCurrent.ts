
import { CommmonActionTypes} from "@/constants/actionTypes"

import { Map } from 'immutable'

import { Action } from "redux-actions"

const  menusCurrent = {
  current: 'home'
}


export default (state=Map(menusCurrent), { type, payload }: Action<any>) => {
  switch (type) {
      case CommmonActionTypes.MENUSCURRENT:
          return state.merge({
            current:  payload.key
          })
      default:
          return state
  }
}