
import { CommmonActionTypes} from "src/constants/actionTypes"

import { Map } from 'immutable'

import { Action } from "redux-actions"
import { ROOMINFO } from 'src/constants/RoomInfo'

const roomInfo = {
  status: 200,
  data: ROOMINFO
  
}

export default (state=Map(roomInfo), { type, payload }: Action<any>) => {
  switch (type) {
      case CommmonActionTypes.ROOMINFO:
          return state
      default:
          return state
  }
}