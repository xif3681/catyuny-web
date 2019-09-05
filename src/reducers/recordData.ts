import { Action } from 'redux-actions'
import { RecordActionTypes } from 'src/constants/actionTypes'
import { Map } from 'immutable'
import  { RECORDDATE} from '@/constants/RecordType'
const recordData = {
  status: 200,
  data: RECORDDATE
}

export default (state = Map(recordData), { type, payload }: Action<any>) => {
  switch (type) {
    case RecordActionTypes.RECORDTYPE_START:
      return state.merge({
        isLoading: true,
        error: undefined
      })
    case RecordActionTypes.RECORDTYPE_SUCCESS:
      return state.merge({
        isLoading: false,
        data: payload,
        updatedAt: new Date()
      })
    case RecordActionTypes.RECORDTYPE_ERROR:
      return state.merge({
        isLoading: false,
        error: payload
      })
    default:
      return state
  }
}
