import { combineReducers } from "redux-immutable"
import menusCurrent  from '@/reducers/common/menusCurrent'
import roomInfo  from '@/reducers/common/roomInfo'
import tabs  from 'src/reducers/tabs'
import recordType  from 'src/reducers/recordType'
import recordData  from 'src/reducers/recordData'

export default combineReducers ({
  menusCurrent,
  roomInfo,
  tabs,
  recordType,
  recordData,

})
