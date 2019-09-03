import { Dispatch } from "redux"
import { createAction } from "redux-actions"
import { CommmonActionTypes} from "@/constants/actionTypes"
import * as HomeService from '@/services/home'
import * as OrderService from '@/services/order'

export const handleClick = (e: any) => (dispatch: Dispatch) => {
  dispatch(createAction(CommmonActionTypes.MENUSCURRENT)(e))
}
export const handleTabChange = (e: any) => async (dispatch: Dispatch) => {
  // const weekorder = await OrderService.queryWeekOrgOrder('szpszx')
  // console.log(weekorder)
  const roominfo = await HomeService.roomList()
  console.log(roominfo)
  dispatch(createAction(CommmonActionTypes.ROOMINFO)(e))
}