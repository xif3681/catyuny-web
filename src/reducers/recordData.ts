import { Action } from 'redux-actions'
import { RecordActionTypes } from 'src/constants/actionTypes'
import { Map } from 'immutable'
import  { RECORDDATE} from '@/constants/RecordType'
import { ReduxStoreAsyncState, RecordDataInterface } from '@/interface'
const recordData : ReduxStoreAsyncState<Array<RecordDataInterface>>= {
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
