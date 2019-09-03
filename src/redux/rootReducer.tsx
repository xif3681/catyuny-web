import { combineReducers } from "redux-immutable"
import { Map } from 'immutable'
import { Tabs } from "src/interface/tabs"
import tabs  from 'src/reducers/tabs'
import menusCurrent  from '@/reducers/common/menusCurrent'
import roomInfo  from '@/reducers/common/roomInfo'


import { MenusCurrent, RoomInfo } from "@/interface/common"

export interface Store {
  menusCurrent:ReduxStoreItemState<MenusCurrent>
  roomInfo:ReduxStoreItemState<RoomInfo>
  tabs: ReduxStoreItemState<Tabs>,
}


export interface ReduxStore extends Map<keyof Store, any> {
	get<K extends keyof Store>(key: K): Store[K];
}

interface ReduxStoreAsyncState<T> {
	isLoading: boolean
	error?: Error
	message?: string
	isDirty?: boolean
	data?: T
}

export interface ReduxStoreAsyncItemState<T> extends Map<keyof ReduxStoreAsyncState<T>, any> {
	get<K extends keyof ReduxStoreAsyncState<T>>(key: K): ReduxStoreAsyncState<T>[K];
}

export interface ReduxStoreItemState<T> extends Map<keyof T, any> {
	get<K extends keyof T>(key: K): T[K];
}

export default combineReducers ({
  menusCurrent,
  roomInfo,
  tabs,

})
