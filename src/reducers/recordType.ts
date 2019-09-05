import { Action } from 'redux-actions'
import { RecordActionTypes } from 'src/constants/actionTypes'
import { Map } from 'immutable'
import  {RECORDTYPE } from '@/constants/RecordType'
const recordType = {
  status: 200,
  data: RECORDTYPE
}

export default (state = Map(recordType), { type, payload }: Action<any>) => {
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
