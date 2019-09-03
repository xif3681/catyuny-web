import { combineReducers } from "redux-immutable"

import tabs  from 'src/reducers/tabs'
import menusCurrent  from '@/reducers/common/menusCurrent'
import roomInfo  from '@/reducers/common/roomInfo'

export default combineReducers ({
  menusCurrent,
  roomInfo,
  tabs,

})
