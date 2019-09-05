import { Action } from 'redux-actions'
import { RecordActionTypes } from 'src/constants/actionTypes'
import { Map } from 'immutable'
import  {RECORDTYPE } from '@/constants/RecordType'
import { ReduxStoreAsyncState, RecordTypeInterface } from '@/interface'
const recordType : ReduxStoreAsyncState<Array<RecordTypeInterface>>= {
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
